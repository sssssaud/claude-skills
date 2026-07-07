---
name: ml-vram-budget
description: Use for any ML/AI/model task — "train", "model", "fine-tune", "PyTorch", "Ollama", "Hugging Face", "LLM app", "RAG", "embeddings". Hard rule; the 6GB VRAM / 16GB RAM ceiling must be verified with arithmetic BEFORE recommending any model, library, or training run.
---

## Purpose
Encodes the ML discipline that made blt-llm work on a 6GB RTX 3050: budget arithmetic before proposals, fake-data smoke tests, overfit-one-batch gates, pre-stated held-out targets (BPB 8.0 → 0.71 achieved), and local-first defaults (Ollama, HF account sssssaud, provider-agnostic API keys via env var). Replaces/absorbs bulk-pack units: senior-ml-engineer, senior-data-scientist, senior-computer-vision, rag-architect, llm-cost-optimizer, statistical-analyst. Encodes Phase-1 patterns 5 (fake data first) and 11 (hardware ceiling arithmetic).

## Workflow
1. **VRAM budget first**: before proposing anything, do the arithmetic in the open — params × bytes/param × optimizer multiplier (AdamW ≈ 4× fp32 weights) + activations + KV cache. If it exceeds ~5.5GB usable of the 6GB, say so and offer: smaller model, quantization (4/8-bit), or "this needs a rented GPU, not local" — max 2–3 options.
2. **Local-first defaults**: inference → Ollama (`ollama list` to detect what's installed, never assume); models/datasets → HF hub (account sssssaud); API LLMs → provider-agnostic, key via env var, default model claude-opus-4-8.
3. **Fake-data smoke test**: every pipeline gets a `--smoke` path on tiny hardcoded data that runs in seconds. It must pass before any real data is downloaded or real run launched.
4. **Isolation gates per stage**: overfit-one-batch before full training; causality/no-data-leakage check for anything sequential; a held-out metric target stated BEFORE the run, not after.
5. **Checkpoints + real numbers**: save checkpoints, log metrics, and report actual measured numbers — never "training looks good".
6. **Verify vs target**: compare against the pre-stated target and record the result (pass or fail, verbatim) in PROGRESS.md.

## Inputs → Outputs
An ML task or model idea → VRAM feasibility verdict with visible arithmetic, a staged pipeline with smoke/overfit/held-out gates, measured results vs a pre-stated target, updated save-file.

## Guardrails & Best Practices
- Never suggest a model or library without the 6GB check — this is the hard ceiling, no exceptions.
- No full training runs before the smoke test and overfit-one-batch gates pass.
- Datasets, checkpoints, and logs go in .gitignore — never committed.
- Big runs move to a rented GPU only by Saud's explicit decision, never silently assumed.
- Leave calibration knobs in config files, not hardcoded (blt-llm's patcher_threshold.json precedent) — real data needs tuning a minimal model can't foresee.
- Statistical claims need the actual numbers and the split they came from.

## Examples
- blt-llm: 1,705,216-param entropy LM sized to fit; bisection-tuned patch threshold stored in patcher_threshold.json; held-out BPB improved 8.0 → 0.71 against a pre-stated target.
- music-taste-judge: Ollama grader with runtime model detection via `ollama list` instead of a hardcoded model name.
- game: adaptive boss with optional llama3.2; F3 debug overlay shows live Ollama status so "is the LLM on?" is answered by evidence, not assumption.

## Environment Notes
- **CLI**: check `nvidia-smi` before runs; install with dnf/pip inside the project .venv — never apt; run smoke tests directly and paste output.
- **Web**: show the VRAM arithmetic in full; give Saud the exact commands to run and require pasted output before declaring a gate passed.
