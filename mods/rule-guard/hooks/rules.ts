// Saud's CLAUDE.md hard rules as pure checks: a reason string means "deny", undefined means "allow".
// ponytail: text patterns, not a shell parser. Ceiling: a command built at runtime (eval, a script file)
// or a `cd` into drishti made in an earlier Bash call slips past; upgrade path is the Bash tool's live cwd.

const GIT = String.raw`\bgit\s+(?:-C\s+(?:"[^"]*"|'[^']*'|\S+)\s+)?`
const SEG = String.raw`[^;&|\n]*` // stay inside one command of a chain

const BASH: [RegExp, string][] = [
  [/(?:^|[;&|(\n]\s*|\bsudo\s+(?:-\S+\s+)*)(?:apt|apt-get|aptitude)\b/, 'Nobara is Fedora-based: use dnf, never apt'],
  [/\bdnf\s+(?:-\S+\s+)*(?:upgrade|update|distro-sync)(?:\s+-\S+)*\s*(?:$|[;&|\n)])/, 'full system updates go through nobara-sync, not raw dnf upgrade'],
  [new RegExp(String.raw`${GIT}push\b${SEG}(?:\s--force(?:-with-lease)?\b|\s-[a-zA-Z]*f|\s\+\S)`), 'no force-push'],
  [new RegExp(String.raw`${GIT}(?:filter-branch|filter-repo|rebase\b(?!\s+--(?:abort|continue|skip|quit)\b))`), 'no rewriting git history'],
  [/\bgh\s+repo\s+(?:delete|rename|archive)\b/, 'no deleting, renaming or archiving a repo'],
  [/\bgh\s+repo\s+edit\b[^;&|\n]*--(?:visibility|name)\b/, "no changing a repo's visibility or name"],
  [/\bgh\s+api\b[^;&|\n]*(?:-X|--method)\s*DELETE\b/i, 'no DELETE calls on the GitHub API'],
]

const CREDS = 'mission-control/credentials is never read, printed, copied or committed'
const TEAM = 'drishti and drishti-urban-intelligence are the SIH team project: read-only'
const IN_CREDS = /mission-control\/credentials(?:\/|$)/
const IN_MC = /\/mission-control(?:\/|$)/
const DRISHTI = /\/(?:drishti|drishti-urban-intelligence)(?=\.git\b|[/\s"'`]|$)/
const DRISHTI_WORD = /(?:^|[\s"'])(?:drishti|drishti-urban-intelligence)(?=[/\s"']|$)/

// what may run inside the team repos
const READ = new Set('cd ls cat head tail less grep rg find wc file tree du stat pwd echo diff sort uniq sed'.split(' '))
const GIT_READ = new Set('status log diff show ls-files blame rev-parse describe fetch shortlog'.split(' '))
const GH_READ = /^gh\s+(?:repo\s+(?:view|list)|(?:pr|issue|run|release)\s+(?:list|view)|api\b(?![^]*(?:-X|--method|-f\b|-F\b|--field|--raw-field|--input)))/

const isReadOnly = (cmd: string): boolean =>
  cmd.split(/&&|\|\||[;|\n]/).every(part => {
    const s = part.trim()
    if (s === '') return true
    if (/>(?!&1|\s*\/dev\/null)/.test(s.replace(/\d>/g, '>'))) return false // redirect into a file
    if (s.startsWith('gh ')) return GH_READ.test(s)
    const git = s.match(/^git\s+(?:-C\s+(?:"[^"]*"|'[^']*'|\S+)\s+)?(\S+)(.*)$/)
    if (git) {
      const [, sub = '', rest = ''] = git
      if (sub === 'remote') return /^\s*(?:-v|show|get-url)?(?:\s|$)/.test(rest)
      if (sub === 'branch') return !/\s-(?:[dDmM]|-delete|-move)\b/.test(rest)
      return GIT_READ.has(sub)
    }
    const word = s.split(/\s+/)[0] ?? ''
    if (word === 'find') return !/\s-(?:delete|exec|execdir|ok|fprint)/.test(s)
    if (word === 'sed') return !/\s-[a-zA-Z]*i/.test(s)
    return READ.has(word)
  })

export const judgeBash = (cmd: string, cwd: string): string | undefined => {
  for (const [re, reason] of BASH) if (re.test(cmd)) return reason
  const credsWord = /\bcredentials\b/.test(cmd)
  if (IN_CREDS.test(cmd) || (credsWord && (/mission-control/.test(cmd) || IN_MC.test(cwd)))) return CREDS
  const touches = DRISHTI.test(cmd) || DRISHTI.test(cwd) || (/\/SIH Project$/.test(cwd) && DRISHTI_WORD.test(cmd))
  if (touches && !isReadOnly(cmd)) return TEAM
  return undefined
}

export const judgePath = (path: string, cwd: string, writes: boolean): string | undefined => {
  const full = path.startsWith('/') ? path : `${cwd}/${path}`
  if (IN_CREDS.test(full)) return CREDS
  if (writes && DRISHTI.test(full)) return TEAM
  return undefined
}
