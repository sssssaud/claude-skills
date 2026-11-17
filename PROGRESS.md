# PROGRESS: claude-skills

Save-file for this repo. Read it at session start; add a dated line after each install or change.
Overview of all projects: `~/Desktop/Projects/mission-control/STATUS.md`.

## Where things stand
- Branch `worktree-skills-audit`: `SKILLS-AUDIT.md` (what's on/off and why) + the `rule-guard` and
  `skill-tracker` mods. **Not merged into `main`** yet; waiting on Saud's yes.
- Still open: the repo layout (marketplace vs `manage.py` vs plain inventory), waiting on Saud.
- Every third-party repo is audited before install (`skill-security-auditor` + reading the code by hand).

## Install log (newest first)
| Date | What | How | Audit |
|---|---|---|---|
| 2026-11-17 | `rea` plugin (morluto/rea, MIT): REA "Reverse Engineer Anything", 1 skill (`reverse-engineer-anything`) + MCP server with 255 tools | `claude plugin marketplace add morluto/rea` + `claude plugin install rea@rea` (user scope). The plugin installs npm `rea-agents@6.9.0`, not the git repo; installed files diffed identical to the audited tarball | Audited the npm tarball (`npm pack --ignore-scripts`): no preinstall/install/postinstall scripts, no Claude hooks, launcher only checks the version pin and starts its own `scripts/rea.mjs mcp`; scanner PASS (0 issues) on the skill; no telemetry libs in `dist/`; "start without asking" in desktop-build.md only means skip questions the request already answered. Needs Node >=22.23.4 or >=24.22.1: Nobara's repos had 22.23.1/24.18.0, so Node v24.22.3 LTS was installed user-local in `~/.local/opt` and linked into `~/.local/bin` (SHA256 checked). MCP handshake verified: 255 tools. No decompiler installed yet (Ghidra/IDA/Hopper), so native-binary analysis waits; web/JS/Electron/.NET/Android work. |
| 2026-11-01 | `day-trader-skill` plugin (Jakeschincariol, MIT): 11 `trader-*` skills | `claude plugin marketplace add Jakeschincariol/day-trader-skill` + `claude plugin install day-trader-skill@day-trader-skill` (user scope), commit `3d0f4ef` | Scanner WARN = false alarms (urllib GETs to Yahoo Finance, SEC, stooq, House/Senate disclosures, Nasdaq; `pdftotext` via list args; tests clean up temp dirs). `trader-broker/ticket.py` never contacts a broker: a real order needs a trader-risk PASS + a typed "yes" + Claude's Allow card, and no broker MCP is set up. |
| 2026-11-01 | `ai-job-search` (ai-job-search-dev, MIT): job-application workspace | `git clone` (not a fork: forks are public and `/setup` writes personal data) to `~/Desktop/Projects/ai-job-search/`, commit `7f01d75` | Scanner FAIL = false alarms (regex `.exec()` in TypeScript, CHANGELOG describing its own prompt-injection guard, tests removing temp dirs). `.claude/settings.json` has no hooks; it denies reading `.env`/`.ssh`/`.aws` and curl/wget uploads. Not installed: `bun` (needed only by the `/scrape` portal CLIs; 4 of the 6 portals are Danish job boards). |
| 2026-10-20 | 7 skill repos installed/updated; `SKILLS-AUDIT.md` v1-v3 (467 skills, 127 on); `skillListingBudgetFraction` 0.01 → 0.03; rule-guard + skill-tracker mods | see `SKILLS-AUDIT.md` | code audited first |
| 2026-10-13 | 268 off-domain skills turned off via `skillOverrides`; CockroachDB plugin disabled | `~/.claude/settings.json` (backup `settings.json.bak-2026-10-13-before-skill-cleanup`) | n/a |
| 2026-10-11 | universal-modder plugin, official frontend-design (enabled), 3D print skill, Blender MCP, Remotion, kicad-happy | global `~/.claude` | hooks/network/exec read first |
