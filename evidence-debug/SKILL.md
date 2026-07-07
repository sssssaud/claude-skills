---
name: evidence-debug
description: Use when something is broken, failing, or surprising — "bug", "error", "crash", "CI failed", "doesn't work", "why is this happening" — and before any state-changing fix (restart, delete, config edit). Enforces diagnose-before-fix using evidence pulled from the real system, never guesses or memory.
---

## Purpose
Encodes the evidence-first debugging that repeatedly worked: live-probing the installed CLI overturned the written spec (claude-ide perm_probe.py, 2026-06-26), CI diagnosed via `gh run view --log-failed` before touching code, suspicious fast clippy runs re-verified with a `touch`. Replaces/absorbs bulk-pack units: fix, focused-fix, performance-profiler, incident-response, post-mortem/postmortem. Complements superpowers:systematic-debugging — invoke that for multi-hypothesis marathons; this skill is the everyday reflex. Encodes Phase-1 patterns 6 (probe the real system), 8 (negative checks), and guards anti-pattern 14 (typo'd destructive instructions).

## Workflow
1. **Reproduce first**: run the failing thing, capture exact output. No repro → no fix; say so and ask for the missing piece.
2. **Probe reality, not docs**: installed binary (`--help`, `--version`), real logs (`gh run view --log-failed`, journalctl, app logs), actual API responses. Write each result down as a verified fact.
3. **Hypothesize narrowly**: max 2–3 hypotheses ranked by the evidence; state which one the evidence favors and why.
4. **Find the root**: grep every caller of the function before editing it. Fix once where all paths route through — a guard in the shared function beats a guard per caller.
5. **One change, one re-run**: apply a single change, re-run the repro, paste real before/after output.
6. **Leave a tripwire**: add the negative check that fails if the bug returns — an assert, a tiny test, or a grep rule (music-taste-judge style: "`grep -ri spotif` must return nothing").
7. **Record**: verified facts + fix go into PROGRESS.md so no future session re-derives them.

## Inputs → Outputs
A symptom plus access to the failing system → verified diagnosis with cited evidence, minimal root-cause fix, a regression tripwire, updated save-file.

## Guardrails & Best Practices
- Never claim a fix works without re-running the repro.
- Never change system state (restart, delete, config edit) unless the evidence supports that *specific* action — a signal that pattern-matches a known failure may have a different cause.
- An instruction that reads destructive but could be a typo ("done delete all the repo") → confirm before acting; that exact near-miss happened 2026-06-18.
- Report failures verbatim; a fix that didn't land is reported as not landed.
- Performance claims need numbers from a measurement, not intuition.

## Examples
- claude-ide: CI failure pulled with `gh run view --log-failed` before any code change; `--permission-prompt-tool` proven working by live probe despite being absent from `--help`.
- blt-llm: causality bug class prevented by a standing no-future-leakage isolation test rather than spot fixes.
- game: "llm is on does it really on or not??" — user demands proof; F3 debug overlay shows live Ollama status instead of assuming.

## Environment Notes
- **CLI**: run every probe directly in Bash; prefer read-only probes before any mutating command.
- **Web**: write the exact probe commands for Saud to run and paste back; never conclude from a command that was never executed.
