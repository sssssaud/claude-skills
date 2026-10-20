import type { Register } from 'claude-code'

import { judgeBash, judgePath } from './rules'

const OVERRIDE = 'If Saud said yes to this exact item, he runs it himself in his own terminal.'

export const register: Register = on => {
  on('tool.call', async ($, e, next) => {
    let reason: string | undefined
    if (e.tool === 'Bash') reason = judgeBash(e.command, await $.session.cwd())
    else if (e.tool === 'Read' || e.tool === 'Edit' || e.tool === 'Write')
      reason = judgePath(e.file_path, await $.session.cwd(), e.tool !== 'Read')
    else if (e.tool === 'NotebookEdit') reason = judgePath(e.notebook_path, await $.session.cwd(), true)
    // searches (grep, rg, find) run through Bash in this build, so judgeBash covers them

    return reason === undefined ? next(e) : { deny: `rule-guard: ${reason}. ${OVERRIDE}` }
  }).catch(($, e, next) =>
    // fail closed: a guard that broke must not wave a risky call through
    next.called ? next(e) : { deny: 'rule-guard: the guard itself failed, so this call is held. Check the transcript for its error.' },
  )
}
