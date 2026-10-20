import type { Register } from 'claude-code'

type Uses = Record<string, { n: number; last: string }>

// $.store hands back whatever JSON is on disk: keep only well-formed rows
const asUses = (raw: unknown): Uses => {
  if (raw === null || typeof raw !== 'object') return {}
  const uses: Uses = {}
  for (const [name, row] of Object.entries(raw)) {
    if (row && typeof row.n === 'number' && typeof row.last === 'string') uses[name] = row
  }
  return uses
}

export const register: Register = on => {
  on('session.start', async ($, e, next) => {
    await $.command.register({
      name: 'skill-stats',
      description: 'Show which skills Claude picked, most used first',
    })
    return next(e)
  })

  on('tool.call', { tool: 'Skill' }, async ($, e, next) => {
    const ran = await next(e)
    if (ran.deny !== undefined || ran.isError === true) return ran

    $.ui.status(`🧩 ${e.skill}`)
    // ponytail: read-modify-write, two skills loading at the same instant can lose one count
    const uses = asUses(await $.store.get('uses'))
    uses[e.skill] = { n: (uses[e.skill]?.n ?? 0) + 1, last: new Date().toISOString().slice(0, 10) }
    await $.store.set('uses', uses)
    return ran
  }).catch(($, e, next) => next(e)) // tracking must never block a skill

  on('command.run', { command: 'skill-stats' }, async $ => {
    const rows = Object.entries(asUses(await $.store.get('uses'))).sort((a, b) => b[1].n - a[1].n)
    if (rows.length === 0) return { text: 'No skills picked yet.' }
    return {
      text: [
        `${rows.length} skills picked so far (uses · last used · skill):`,
        ...rows.map(([name, u]) => `${String(u.n).padStart(4)}  ${u.last}  ${name}`),
      ].join('\n'),
    }
  })
}
