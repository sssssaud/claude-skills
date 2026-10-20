import { expect, mock, test } from 'claude-code/testing'

const STATS = {
  command: 'skill-stats',
  args: '',
  origin: { kind: 'composer' },
  presentation: { isFullscreen: false, columns: 120 },
} as const

test('counts each picked skill and lists them most used first', async ($, on) => {
  mock.store(on)
  on('command.register', () => ({ value: { command: 'skill-stats' } }))
  on('session.start', (_, e) => ({ cwd: e.cwd }))
  on('tool.call', () => ({ result: {} }))

  await $.session.start({ cwd: '/', surface: 'terminal', isInteractive: true })
  await $.tool.call({ tool: 'Skill', skill: 'impeccable' })
  await $.tool.call({ tool: 'Skill', skill: 'ship-clean' })
  await $.tool.call({ tool: 'Skill', skill: 'impeccable' })

  const { text } = await $.command.run(STATS)
  const lines = (text ?? '').split('\n')
  expect(lines[0]).toBe('2 skills picked so far (uses · last used · skill):')
  expect(lines[1]).toMatch(/^\s+2\s+\d{4}-\d{2}-\d{2}\s+impeccable$/)
  expect(lines[2]).toMatch(/^\s+1\s+\d{4}-\d{2}-\d{2}\s+ship-clean$/)
})

test('an empty or corrupt store says nothing was picked', async ($, on) => {
  mock.store(on, { uses: { broken: 'x' } })
  on('command.register', () => ({ value: { command: 'skill-stats' } }))
  on('session.start', (_, e) => ({ cwd: e.cwd }))

  await $.session.start({ cwd: '/', surface: 'terminal', isInteractive: true })
  const { text } = await $.command.run(STATS)
  expect(text).toBe('No skills picked yet.')
})
