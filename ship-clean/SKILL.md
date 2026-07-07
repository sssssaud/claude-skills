---
name: ship-clean
description: Use when publishing, pushing, or backing up work — "push to GitHub", "publish", "create the repo", "upload to Hugging Face", "commit this". Owns pre-push secrets hygiene and honest push reporting. Must trigger before any FIRST commit in a repo (the .gitignore/.env check happens then, not at push time).
---

## Purpose
Encodes Saud's publish discipline and guards its one recorded failure: the claude-ide .env near-leak (2026-07-05, caught before push) and the "done delete all the repo" typo near-miss (2026-06-18). GitHub is the durable backup — every meaningful step ends in a verified commit+push. Replaces/absorbs bulk-pack units: github-everyday, env-secrets-manager, secrets-vault-manager, release-manager, changelog-generator, git-worktree-manager. Encodes Phase-1 patterns 7 (GitHub-as-backup cadence) and 10 (never fake a push).

## Workflow
1. **Auth first**: `gh auth status`, then confirm the real login with `gh api user --jq .login` — expect sssssaud (account renamed from shaikh-saud705 in 2026-07; `gh auth status` may still display the stale old name). Anything else → STOP, print the exact error, do not improvise credentials.
2. **Secrets sweep BEFORE staging**: .gitignore must cover `.env` + secrets, `__pycache__/ *.py[cod]`, `.venv/ venv/ env/`, `*.egg-info/`, `.pytest_cache/`, `.DS_Store .idea/ .vscode/`. Prove it: `git check-ignore .env` must succeed. Grep tracked files for `sk-`, `api_key`, `token`, `secret`. Read `git status` line by line — every staged file justified.
3. **Repo hygiene**: README.md, commented requirements.txt, .env.example, PROGRESS.md present and current before the push.
4. **Commit**: noreply identity (Shaikh Saud <123188975+shaikh-saud705@users.noreply.github.com>, already in ~/.gitconfig — still attributes correctly post-rename; GitHub matches the numeric ID). New repo only when Saud asks: `gh repo create <kebab-name> --public --source=. --remote=origin --push` — omit the owner prefix so the token resolves it (an explicit stale username 404s).
5. **Push and PROVE it**: paste the real push output and the repo URL. A push without pasted evidence is reported as "not verified".
6. **On failure**: exact error verbatim + the manual commands to recover. Never claim a push that didn't happen.
7. **HF mirror (on request)**: account sssssaud, proper model card, LFS for weights.

## Inputs → Outputs
A repo ready to publish (or a "push this" request) → verified auth, proven-clean staging area, commit with correct identity, push with pasted evidence, or an exact-error report with recovery steps.

## Guardrails & Best Practices
- Never push secrets — even under time pressure, even "just this once". The sweep is not skippable.
- Never force-push, never push to repos that aren't sssssaud's, never hardcode tokens (gh is the credential helper).
- A destructive-sounding instruction that could be a typo ("done delete all the repo") → confirm the exact repo name before acting.
- Private data (chat logs, personal info, API responses with user data) never goes in a public repo.
- If .env was ever tracked, rotating the keys comes before scrubbing history — say so explicitly.

## Examples
- blt-llm: dual publish — GitHub repo + HF model upload as sssssaud, weights via LFS.
- music-taste-judge: spec had an explicit push phase with the gitignore-before-first-commit rule.
- claude-ide: .env caught by the pre-staging sweep on 2026-07-05 — the incident this skill exists to prevent.

## Environment Notes
- **CLI**: run gh/git directly; gh is the git credential helper — no token handling ever.
- **Web**: output the exact command sequence and require pasted output for each step; auth status and push results only count when Saud pastes them.
