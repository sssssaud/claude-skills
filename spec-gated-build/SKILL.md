---
name: spec-gated-build
description: Use when Saud starts a new project, pastes a build brief or spec, or asks to plan and build something non-trivial — "let's build X", "new project", "here's the spec", "start phase N". Also triggers when resuming work in a project that has a PROGRESS.md, RESUME.md, or project CLAUDE.md ("resume", "continue where we left off", "what's left"). Turns ideas into a phase-gated build plan and keeps the session save-file honest.
---

## Purpose
Operationalizes Saud's proven build method: spec-first briefs with hard rules (music-taste-judge, blt-llm, claude-ide), plan-mode approval before scaffolding, phase-by-phase builds with per-phase isolation tests, and PROGRESS.md save-file discipline. Replaces/absorbs the bulk-pack units: spec-driven-workflow, spec-to-repo, saas-scaffolder, init, setup, resume, handoff, freeze, epic-design. Encodes Phase-1 patterns 1 (spec-first briefs), 2 (plan gate), 3 (phase gates), 4 (save-file discipline), 5 (fake data first).

## Workflow
1. **Orient**: if the project has PROGRESS.md / RESUME.md / CLAUDE.md, read them FIRST. Report current phase, done, pending, blockers in ≤6 lines before doing anything.
2. **Brief (new projects)**: draft the build brief WITH Saud, never guess — goal ("done looks like"), stack (verify it fits 6GB VRAM / 16GB RAM / Nobara-dnf), directory map, phases each with acceptance criteria + an isolation test, hard rules. Open decisions get max 2–3 options.
3. **Plan gate**: present the plan and wait for explicit approval before touching any file.
4. **Scaffold** per conventions: kebab-case folder, README.md, commented requirements.txt, .gitignore (must cover .env, __pycache__/, .venv/ — verify with `git check-ignore .env` before first commit), .env.example, .venv/, entry point (app.py / cli.py / run.py), CLAUDE.md from ~/.claude/templates/project-CLAUDE.md, PROGRESS.md.
5. **Build one phase at a time**: pure logic modules first on fake/hardcoded data; real APIs or hardware only after pure modules pass in isolation. One concern per step; explain WHY.
6. **Verify the gate**: run the phase's isolation test or demo and paste the actual output. "Looks done" is not done — acceptance criteria met and measured, or the phase stays open.
7. **Save**: after each meaningful step update PROGRESS.md (done / pending / blockers / verified facts) and commit. Never advance past a failing gate.

## Inputs → Outputs
Idea or pasted spec, plus any existing save-file → approved brief, scaffolded repo per conventions, phase-gated implementation, PROGRESS.md and commits that let any future session resume cold.

## Guardrails & Best Practices
- Never skip a phase, gate, or isolation test — even when the next phase "obviously" works.
- Never fabricate or paraphrase test output; paste the real thing.
- Hardware ceiling is hard: check VRAM/RAM fit before proposing models or heavy deps.
- Ponytail rules apply: no unrequested abstractions, smallest diff that meets the gate.
- Keep interim narration short — Saud actively manages token spend.
- A failing step stops the line: report it verbatim, don't route around it.

## Examples
- blt-llm: locked `BLT_LLM.md` phases with `test_phase0_patcher.py`-style gates; PROGRESS.md referenced 127× in one session.
- music-taste-judge: spec with mandatory file structure ("what stops it looking vibe-coded"), full error matrix, fake Last.fm data before live calls.
- claude-ide: gate-driven BUILD_SPEC, plan-mode-first operating contract, 1800-line PROGRESS.md of verified facts.

## Environment Notes
- **CLI**: use plan mode for step 3; Bash for scaffolding, tests, and git; update PROGRESS.md with Edit/Write and commit directly.
- **Web**: output the brief and every file as separate code blocks; maintain PROGRESS.md content as a block Saud pastes into the repo; verification means Saud runs the commands and pastes output back — never declare a gate passed without it.
