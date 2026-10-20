# Skills audit — 2026-10-20 (v2: every description read)

467 skills (408 loose + 59 in plugins). Only 13 have ever been used. The 25 skills synced from your claude.ai account are not counted (Anthropic manages them).

Claude Code has 4 modes per skill (`skillOverrides` in `~/.claude/settings.json`):

| Mode | What it means | Count |
|---|---|---|
| on | Claude sees the description and uses it automatically | **82** |
| user-invocable-only | hidden from Claude, you type `/name` to use it — zero tokens | **227** |
| off | gone from both | **158** |

Description tokens every session: ~18,562 now → ~7,949 after. Nothing is moved or deleted.

## By domain

| Domain | on | /name | off |
|---|---|---|---|
| Core workflow | 26 |  |  |
| Website / UI | 8 | 27 |  |
| 2D animation / video | 5 | 20 |  |
| 3D model | 1 |  |  |
| Circuits | 11 |  |  |
| AI model | 6 | 15 |  |
| App (mobile) |  | 6 |  |
| Software | 1 | 50 |  |
| Game modding | 11 |  |  |
| Research / study |  | 9 |  |
| Thinking / process |  | 20 |  |
| Business: idea + market |  | 13 |  |
| Business: pricing + money |  | 11 |  |
| Business: launch + marketing |  | 34 |  |
| Business: social + video | 13 | 10 |  |
| Business: founder + legal |  | 12 |  |
| Medical-device regulation |  |  | 17 |
| Enterprise compliance audits |  |  | 11 |
| Big-company management |  |  | 65 |
| Enterprise tools you don't use |  |  | 24 |
| Bundle index pages (the real skills are listed separately) |  |  | 11 |
| Demo / junk |  |  | 9 |
| Duplicate |  |  | 16 |
| Clashes with a built-in command |  |  | 5 |

Gap: no skill for **3D animation**. That runs through the Blender MCP server (already connected), not a skill.

## Core workflow

- **on:** claude-context-pdf, evidence-debug, ponytail:ponytail, ponytail:ponytail-audit, ponytail:ponytail-debt, ponytail:ponytail-gain, ponytail:ponytail-help, ponytail:ponytail-review, ship-clean (5x), skill-security-auditor, spec-gated-build, superpowers:brainstorming (7x), superpowers:diagnosing-superpowers, superpowers:dispatching-parallel-agents, superpowers:executing-plans, superpowers:finishing-a-development-branch, superpowers:receiving-code-review, superpowers:requesting-code-review, superpowers:subagent-driven-development, superpowers:systematic-debugging (1x), superpowers:test-driven-development, superpowers:using-git-worktrees, superpowers:using-superpowers, superpowers:verification-before-completion, superpowers:writing-plans, superpowers:writing-skills

## Website / UI

- **on:** a11y-audit, ai-design-skills-cheat-sheet (2x), break-ui, design-taste-frontend (3x), emil-design-eng (2x), frontend-design:frontend-design, impeccable (2x), ui-screenshot-loop (3x)
- **/name:** deploy-to-vercel, design-md-reference, epic-design, full-page-screenshot, gpt-taste, high-end-visual-design, image-to-code, imagegen-frontend-web, industrial-brutalist-ui, landing, landing-page-generator, minimalist-ui, schema-markup, senior-backend, senior-frontend, senior-fullstack, site-architecture, stitch-design-taste, ui-design-system, ux-product-auditor, ux-researcher-designer, vercel-cli-with-tokens, vercel-composition-patterns, vercel-optimize, vercel-react-best-practices, vercel-react-view-transitions, web-design-guidelines

## 2D animation / video

- **on:** animate, brag:brag, brag:brag-slim, remotion-best-practices, review-animations
- **/name:** animation-performance, animation-vocabulary, apple-design, ask-sonner, demo-video, find-animation-opportunities, improve-animations, pick-ui-library, prototype, remotion-captions, remotion-create, remotion-docs, remotion-interactivity, remotion-maps, remotion-markup, remotion-multimedia, remotion-render, remotion-saas, remotion-studio, remotion-upgrade

## 3D model

- **on:** parametric-3d-printing

## Circuits

- **on:** kicad-happy:bom, kicad-happy:datasheets, kicad-happy:digikey, kicad-happy:element14, kicad-happy:emc, kicad-happy:jlcpcb, kicad-happy:kicad, kicad-happy:lcsc, kicad-happy:mouser, kicad-happy:pcbway, kicad-happy:spice

## AI model

- **on:** mcp-server-builder, ml-vram-budget, rag-architect, senior-computer-vision, senior-data-scientist, senior-ml-engineer
- **/name:** agent-designer, agent-workflow-designer, ai-security, ai-workflow-architect, autoresearch-agent, data-quality-auditor, llm-cost-optimizer, prompt-engineer-toolkit, prompt-governance, prompt-optimizer, senior-data-engineer, senior-prompt-engineer, setup, statistical-analyst, workflow-builder

## App (mobile)

- **/name:** animate-expo, apple-hig-expert, imagegen-frontend-mobile, mobile-native, vercel-react-native-skills, write-swift

## Software

- **on:** playwright-cli
- **/name:** adversarial-reviewer, agent-browser, api-design-reviewer, api-test-suite-builder, aws-solution-architect, azure-cloud-architect, browser-automation, changelog-generator, ci-cd-pipeline-builder, cloud-security, code-reviewer, code-to-prd, code-tour, codebase-onboarding, coverage, database-designer, database-schema-designer, dependency-auditor, docker-development, email-template-builder, env-secrets-manager, feature-flags-architect, fix, gcp-cloud-architect, generate, git-worktree-manager, migrate, migration-architect, monorepo-navigator, observability-designer, performance-profiler, pr-review-expert, pw, red-team, release-manager, report, saas-scaffolder, secrets-vault-manager, security-guidance, security-pen-testing, senior-architect, senior-devops, senior-qa, senior-security, ship-gate, spec-to-repo, sql-database-assistant, tech-debt-tracker, tech-stack-evaluator, terraform-patterns
- _Playwright test pack; /pw is the entry_

## Game modding

- **on:** universal-modder:asset-pipeline, universal-modder:fal-assets, universal-modder:game-automation, universal-modder:game-recon, universal-modder:game-research-websearch, universal-modder:mashup-mods, universal-modder:mod-any-game (1x), universal-modder:publish-mod, universal-modder:reverse-engineering, universal-modder:share-field-notes, universal-modder:showcase-video

## Research / study

- **/name:** ai-research-analyst, dossier, litreview, notebooklm, patent, pulse, research, research-summarizer, syllabus

## Thinking / process

- **/name:** behuman, capture, caveman, challenge, extract, focused-fix, grill-me, grill-with-docs, handoff, karpathy-coder, llm-wiki, presentation-structure (1x), presentation-styling, reflect, self-eval, skill-finder, skill-tester (1x), tdd-guide, write-a-skill, writing-guidelines

## Business: idea + market

- **/name:** andreessen, competitive-intel, competitive-teardown, competitor-alternatives, hard-call, market-research, office-hours, product-discovery, product-manager-toolkit, product-research, product-strategist, saas-idea-validator, stress-test

## Business: pricing + money

- **/name:** business-investment-advisor, cfo-advisor, churn-prevention, customer-success-manager, financial-analyst, paywall-upgrade-cro, pricing-strategist, pricing-strategy, referral-program, saas-metrics-coach, stripe-integration-expert

## Business: launch + marketing

- **/name:** ab-test-setup, ad-creative, aeo, ai-seo, analytics-tracking, app-store-optimization, brand-guidelines, brandkit, campaign-analytics, chief-content-officer, content-humanizer, content-production, content-strategy, copy-editing, copywriting, experiment-designer, form-cro, free-tool-strategy, landing-page-cro-expert, launch-strategy, marketing-campaign-planner, marketing-context, marketing-demand-acquisition, marketing-ideas, marketing-psychology, marketing-strategy-pmm, onboarding-cro, page-cro, paid-ads, popup-cro, product-analytics, programmatic-seo, seo-audit, signup-flow-cro

## Business: social + video

- **on:** instagram-agent:ig-audit, instagram-agent:ig-caption, instagram-agent:ig-carousel, instagram-agent:ig-comment, instagram-agent:ig-dm, instagram-agent:ig-human, instagram-agent:ig-plan, instagram-agent:ig-profile, instagram-agent:ig-reel, instagram-agent:ig-reply, instagram-agent:ig-repurpose, instagram-agent:ig-story, instagram-agent:ig-viral
- **/name:** cold-email, email-sequence, newsletter-writer, personal-brand-godin, social-content, social-media-analyzer, social-media-manager, video-content-strategist, x-twitter-growth, youtube-producer

## Business: founder + legal

- **/name:** business-growth-consultant, ceo-advisor, cmo-advisor, contract-and-proposal-writer, cpo-advisor, cto-advisor, executive-mentor, founder-ceo-coach, founder-coach, gdpr-dsgvo-expert, general-counsel-advisor, intl-expansion

## Medical-device regulation

- **off:** capa-officer, clinical-research, fda-consultant-specialist, fda-qsr-audit-prep, grants, information-security-manager-iso27001, iso13485-audit-prep, mdr-745-specialist, qms-audit-expert, quality-documentation-manager, quality-manager-qmr, quality-manager-qms-iso13485, ra-qm-skills, regulatory-affairs-head, research-finance, research-ops-skills, risk-management-specialist

## Enterprise compliance audits

- **off:** ai-act-readiness, aims-audit, compliance-os, compliance-readiness, eu-ai-act-specialist, gdpr-audit-prep, isms-audit-expert, iso27001-audit-prep, iso42001-specialist, soc2-audit-prep, soc2-compliance

## Big-company management

- **off:** agent-protocol, board, board-deck-builder, board-meeting, board-prep, boardroom, brief, c-level-agents, caio-review, capacity-planner, cco-review, cdo-review, cfo-review, change-management, channel-economics, chief-ai-officer-advisor, chief-customer-officer-advisor, chief-data-officer-advisor, chief-of-staff, chro-advisor, ciso-advisor, ciso-review, cmo-review, commercial-forecaster, commercial-policy, company-os, context-engine, coo-advisor, cpo-review, cro-advisor, cro-review, cross-eval, cs-onboard, cto-review, culture-architect, deal-desk, decide, decision-logger, execute, founder-mode, freeze, gc-review, internal-comms, internal-narrative, interview-system-designer, knowledge-ops, ma-playbook, meeting-analyzer, onboard, org-health-diagnostic, partnerships-architect, post-mortem, postmortem, process-mapper, procurement-optimizer, revenue-operations, rfp-responder, roadmap-communicator, sales-engineer, scenario-war-room, strategic-alignment, team-communications, vendor-management, vpe-advisor, vpe-review

## Enterprise tools you don't use

- **off:** agile-product-owner, atlassian-admin, atlassian-templates, browserstack, chaos-engineering, confluence-expert, google-workspace-cli, helm-chart-builder, inbox-setup, inbox-triage, incident-commander, incident-response, jira-expert, kubernetes-operator, ms365-tenant-manager, runbook-generator, scrum-master, senior-pm, senior-secops, slo-architect, snowflake-development, tc-tracker, testrail, threat-detection

## Bundle index pages (the real skills are listed separately)

- **off:** business-growth-skills, business-operations-skills, c-level-skills, commercial-skills, engineering-advanced-skills, engineering-skills, finance-skills, marketing-ops, marketing-skills, pm-skills, product-skills

## Demo / junk

- **off:** agenthub, eval, merge, run, spawn, time-skill, vibe-to-agentic-framework, weather-fetcher, weather-svg-creator

## Duplicate

- **off:** claude-coach, command-guide, content-creator, design-taste-frontend-v1, full-output-enforcement, ponytail, ponytail-audit, ponytail-debt, ponytail-gain, ponytail-help, ponytail-review, promote, redesign-existing-projects, remember, self-improving-agent, spec-driven-workflow
- _covered by a kept skill or Claude Code itself_
- _exact copy of the ponytail plugin_

## Clashes with a built-in command

- **off:** init, loop, resume (7x), review, status (5x)
- _/resume /loop /init /review /status_
