---
name: ui-screenshot-loop
description: Use when building or polishing anything visual — desktop UI, game screens, Streamlit/web pages — or when Saud shares a screenshot ("make it look better", "polish the UI", "ye kaisa lag raha hai"). Runs the screenshot → ranked critique → tokens-first fix → re-screenshot loop.
---

## Purpose
Encodes how visual work actually converged in Saud's projects: iterate against real screenshots, fix design tokens before components, and treat Saud's eye as the acceptance gate. Consolidates the 17-skill design-taste pack installed 2026-06-26 (impeccable, emil-design-eng, high-end-visual-design, minimalist-ui, industrial-brutalist-ui, design-taste-frontend, review-animations, and siblings) into one loop. Works WITH the frontend-design plugin, not instead of it. Encodes Phase-1 pattern 13 (screenshot-driven UI iteration).

## Workflow
1. **See the current state**: get a screenshot — from Saud, or capture it (`spectacle -b -n -o out.png` on KDE, browser screenshot for web). No screenshot, no critique; refuse to restyle blind.
2. **Ranked critique, max 5 faults**: visual hierarchy → spacing rhythm → contrast (WCAG AA, cite the actual ratio numbers) → token consistency → motion restraint. Ranked by impact, not a laundry list.
3. **Fix tokens first**: tokens.css / theme variables before per-component styles; CSS before JS; native platform features before libraries.
4. **One visual concern per iteration**: fix it, re-screenshot, compare before/after side by side.
5. **Verify**: contrast numbers pass AA, keyboard focus visible, nothing overflows at realistic sizes. Then Saud judges — his eye is the acceptance gate, not the checklist.

## Inputs → Outputs
A screenshot (or a UI to capture) → ranked critique with numbers, smallest token-level fix, before/after evidence, loop until Saud accepts.

## Guardrails & Best Practices
- Accessibility is never sacrificed for aesthetics — contrast, focus states, and readable sizes survive every restyle.
- No new UI dependencies for what CSS already does.
- Respect established identity: the game's in-code pixel font and palette are intentional, not faults to "fix".
- No drive-by restyling of things outside the asked-about area.
- "Looks better" claims require a new screenshot — the same rule as never faking a test result.

## Examples
- game: menu/HUD polished over repeated Spectacle capture → critique → fix rounds.
- claude-ide: tokens.css as single source of truth; UI-polish phase gated like any other phase.
- music-taste-judge: Streamlit errors surfaced via st.error(), never a raw traceback on screen.

## Environment Notes
- **CLI**: capture with spectacle (KDE) or a headless browser shot; edit the files directly and re-capture to verify.
- **Web**: Saud pastes screenshots; return CSS/token diffs as code blocks and ask for a fresh screenshot after he applies them.
