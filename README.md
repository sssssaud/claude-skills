# claude-skills

Five consolidated [Claude Code](https://claude.com/claude-code) skills, distilled from a full workspace audit of ~350 installed skills — of which only a handful were ever actually used. These five encode the working patterns that showed up again and again in real project transcripts (blt-llm, music-taste-judge, claude-ide, game): spec-first builds, evidence-first debugging, secrets-safe publishing, VRAM-budgeted ML, and screenshot-driven UI polish.

Each skill is a single `SKILL.md` with YAML frontmatter. Claude Code auto-triggers a skill when your request matches its description — no manual invocation needed.

## Install

```bash
git clone https://github.com/sssssaud/claude-skills.git
cp -r claude-skills/*/ ~/.claude/skills/
```

Each skill folder (e.g. `spec-gated-build/`) lands as `~/.claude/skills/spec-gated-build/SKILL.md`. Restart Claude Code (or start a new session) and they're live.

## The skills

### 1. `spec-gated-build` — project workflow, encoded
**Triggers:** "let's build X", "new project", "here's the spec", "resume", "continue where we left off"

Reads the project save-file (PROGRESS.md / RESUME.md) first and reports where things stand. Drafts the build brief *with* you — never guesses. Waits for plan approval before touching files, scaffolds per convention (kebab-case, commented requirements.txt, .env.example, .venv), builds one phase at a time with fake data before real APIs, and refuses to advance past a failing gate. Every step ends in an updated save-file and a commit.

### 2. `evidence-debug` — diagnose before fixing
**Triggers:** "bug", "error", "crash", "CI failed", "doesn't work", "why is this happening"

Reproduces the failure before anything else. Probes the *real* system — installed binaries, actual logs, live API responses — instead of trusting docs or memory. Keeps hypotheses to 2–3, fixes at the root (the shared function, not one caller), re-runs after every single change, and leaves a regression tripwire (assert / tiny test / grep rule) so the bug can't silently return.

### 3. `ship-clean` — safe publishing to GitHub/HF
**Triggers:** "push to GitHub", "publish", "create the repo", "commit this" — and before any *first* commit in a repo

Verifies `gh auth status` before anything. Sweeps for secrets *before* staging: proves `.env` is ignored via `git check-ignore`, greps tracked files for keys and tokens, reads `git status` line by line. Pushes and proves it with real output — on failure, reports the exact error with recovery commands. Never claims a push that didn't happen. Born from a real `.env` near-leak caught minutes before push.

### 4. `ml-vram-budget` — the hardware ceiling, enforced
**Triggers:** "train", "model", "fine-tune", "PyTorch", "Ollama", "LLM app", "RAG"

Does the VRAM arithmetic in the open (params × bytes/param × optimizer overhead + activations) *before* recommending any model or library — over budget means smaller model, quantization, or "rented GPU, not local". Defaults local-first (Ollama, Hugging Face). Requires a fake-data smoke test and an overfit-one-batch gate before any real run, and measures results against a held-out target stated *before* training, not after. Written for a 6GB RTX 3050; adjust the ceiling to your card.

### 5. `ui-screenshot-loop` — visual polish with evidence
**Triggers:** UI/design work, or sharing a screenshot — "make it look better", "polish the UI"

Refuses to critique blind: no screenshot, no opinion. Gives a ranked critique of max 5 faults with actual WCAG contrast numbers, fixes design tokens before individual components, changes one visual concern per iteration, and requires a fresh screenshot before claiming anything "looks better". Accessibility survives every restyle. The human eye is the final acceptance gate.

## Why these five

They bracket the full project lifecycle:

```
spec-gated-build ──▶ evidence-debug ──▶ ui-screenshot-loop ──▶ ship-clean
     (start)            (when stuck)         (when visual)        (publish)
                        ml-vram-budget
                        (when ML is involved)
```

Some file paths, account names, and hardware limits in the skill bodies are specific to my machine — fork and edit `SKILL.md` frontmatter/body to fit your own setup.

## Mods

Mods are plugins with a hooks module that change Claude Code itself (status line, slash commands, tool-call guards).

### `skill-tracker`
Shows the skill Claude just picked in the status line (`🧩 impeccable`) and counts uses across sessions. `/skill-stats` lists them, most used first.

```bash
cp -r claude-skills/mods/skill-tracker ~/.claude/skills/
```

Loads from the next session as `skill-tracker@skills-dir`. Turn off with `claude plugin disable skill-tracker@skills-dir`.

## License

MIT — take what's useful.
