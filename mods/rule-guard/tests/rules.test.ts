import { expect, test } from 'claude-code/testing'

import { judgeBash, judgePath } from '../hooks/rules'

const HOME = '/home/saud/Desktop/Projects'
const SIH = `${HOME}/SIH Project`

const DENY: [string, string, string][] = [
  ['sudo apt install htop', HOME, 'apt'],
  ['apt-get update', HOME, 'apt'],
  ['cd x && sudo -E apt install y', HOME, 'apt'],
  ['sudo dnf upgrade -y', HOME, 'nobara-sync'],
  ['sudo dnf --refresh update', HOME, 'nobara-sync'],
  ['git push --force', HOME, 'force-push'],
  ['git push -f origin main', HOME, 'force-push'],
  ['git push origin +main', HOME, 'force-push'],
  ['git -C "a b" push --force-with-lease', HOME, 'force-push'],
  ['cd repo && git push -uf origin x', HOME, 'force-push'],
  ['git rebase main', HOME, 'history'],
  ['git filter-repo --path x', HOME, 'history'],
  ['gh repo delete sssssaud/old --yes', HOME, 'deleting'],
  ['gh repo rename new-name', HOME, 'deleting'],
  ['gh repo edit --visibility private', HOME, 'visibility'],
  ['gh api -X DELETE repos/sssssaud/x', HOME, 'DELETE'],
  ['cat ~/Desktop/Projects/mission-control/credentials/gh.txt', HOME, 'credentials'],
  ['cd ~/Desktop/Projects/mission-control && cat credentials/a', HOME, 'credentials'],
  ['ls credentials', `${HOME}/mission-control`, 'credentials'],
  ['cd "SIH Project/drishti" && git push', HOME, 'team project'],
  ['git commit -am wip', `${SIH}/drishti`, 'team project'],
  ['echo x > notes.md', `${SIH}/drishti-urban-intelligence`, 'team project'],
  ['sed -i s/a/b/ app.py', `${SIH}/drishti`, 'team project'],
  ['rm -rf build', `${SIH}/drishti`, 'team project'],
  ['cd drishti && git checkout -b x', SIH, 'team project'],
  ['gh pr create --repo sssssaud/drishti', HOME, 'team project'],
  ['gh api repos/sssssaud/drishti -f private=true', HOME, 'team project'],
]

const ALLOW: [string, string][] = [
  ['sudo dnf install htop', HOME],
  ['dnf upgrade kernel', HOME],
  ['nobara-sync cli', HOME],
  ['git push -u origin worktree-skills-audit', HOME],
  ['git push --follow-tags', HOME],
  ['git pull --rebase', HOME],
  ['git rebase --abort', HOME],
  ['grep -r aptitude docs/', HOME],
  ['gh repo create sssssaud/new --public', HOME],
  ['gh repo view sssssaud/drishti', HOME],
  ['git status', `${SIH}/drishti`],
  ['git log --oneline -5 && git diff HEAD~1', `${SIH}/drishti`],
  ['cat drishti_api.py | head -20', `${SIH}/drishti-urban-intelligence`],
  ['find . -name "*.py" 2>/dev/null | wc -l', `${SIH}/drishti`],
  ['git remote -v', `${SIH}/drishti`],
  ['ls drishti DRISHTI', SIH],
  ['git commit -m "notes on drishti recall"', `${HOME}/mission-control`],
  ['git -C "SIH Project/DRISHTI" log -1', HOME],
  ['cat ~/.claude/.credentials.json | wc -c', HOME],
  ['git status', `${HOME}/mission-control`],
]

test('blocks every hard-rule command', () => {
  for (const [cmd, cwd, word] of DENY) {
    const reason = judgeBash(cmd, cwd)
    expect(reason === undefined ? `ALLOWED: ${cmd}` : reason.includes(word) ? 'ok' : `${cmd} -> ${reason}`).toBe('ok')
  }
})

test('lets ordinary work through', () => {
  for (const [cmd, cwd] of ALLOW) expect(`${cmd} -> ${judgeBash(cmd, cwd) ?? 'allowed'}`).toBe(`${cmd} -> allowed`)
})

test('file tools: credentials never, drishti read but not write', () => {
  expect(judgePath(`${HOME}/mission-control/credentials/a.txt`, HOME, false)).toContain('credentials')
  expect(judgePath('credentials/a.txt', `${HOME}/mission-control`, false)).toContain('credentials')
  expect(judgePath(`${HOME}/mission-control/STATUS.md`, HOME, true)).toBeUndefined()
  expect(judgePath(`${SIH}/drishti/app.py`, HOME, false)).toBeUndefined()
  expect(judgePath(`${SIH}/drishti/app.py`, HOME, true)).toContain('team project')
  expect(judgePath(`${SIH}/DRISHTI/app.py`, HOME, true)).toBeUndefined()
  expect(judgePath(`${SIH}/PROGRESS.md`, HOME, true)).toBeUndefined()
})

test('a denied call never reaches the tool; an allowed one does', async ($, on) => {
  let ran = 0
  on('session.start', (_, e) => ({ cwd: e.cwd }))
  on('session.cwd', () => ({ value: HOME }))
  on('tool.call', () => {
    ran++
    return { result: {} }
  })
  await $.session.start({ cwd: HOME, surface: 'terminal', isInteractive: true })

  const denied = await $.tool.call({ tool: 'Bash', command: 'sudo apt install htop' })
  expect(denied.deny).toContain('use dnf, never apt')
  expect(ran).toBe(0)

  await $.tool.call({ tool: 'Bash', command: 'sudo dnf install htop' })
  expect(ran).toBe(1)
})
