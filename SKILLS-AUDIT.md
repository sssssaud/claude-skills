# Skills audit — 2026-10-20

467 skills installed: 200 on, 267 off. Only **13** have ever been used (transcripts since 2026-09-12, typed commands since 2026-05-22).

On-skill descriptions cost ~18,562 tokens every session. After this plan: ~7,941.

| Bucket | Count | Action |
|---|---|---|
| ✅ Keep on | 81 | nothing |
| 💤 Later | 124 | turn off (`skillOverrides: off`), keep on disk |
| 🗑️ Not for you | 262 | move to `~/.claude/skills-archive/` (not deleted) |

## ⚠️ Name clashes with built-in commands

These loose skills share a name with a Claude Code command, so `/name` may run the wrong thing:

- `resume` vs built-in `/resume`
- `loop` vs built-in `/loop`
- `init` vs built-in `/init`
- `review` vs built-in `/review`
- `status` vs built-in `/status`

## ✅ Keep on

| Skill | Uses | Why |
|---|---|---|
| parametric-3d-printing |  | 3D |
| senior-data-scientist |  | AI-ML |
| senior-ml-engineer |  | AI-ML |
| senior-computer-vision |  | AI-ML / SIH detector |
| animate |  | Emil core |
| break-ui |  | Emil core |
| review-animations |  | Emil core |
| mcp-server-builder |  | LLM apps |
| rag-architect |  | LLM apps |
| a11y-audit |  | accessibility is a hard rule for you |
| skill-security-auditor |  | audit new skills before install |
| playwright-cli |  | just installed |
| brag |  | plugin brag |
| brag-slim |  | plugin brag |
| frontend-design |  | plugin frontend-design |
| ig-audit |  | plugin instagram-agent |
| ig-caption |  | plugin instagram-agent |
| ig-carousel |  | plugin instagram-agent |
| ig-comment |  | plugin instagram-agent |
| ig-dm |  | plugin instagram-agent |
| ig-human |  | plugin instagram-agent |
| ig-plan |  | plugin instagram-agent |
| ig-profile |  | plugin instagram-agent |
| ig-reel |  | plugin instagram-agent |
| ig-reply |  | plugin instagram-agent |
| ig-repurpose |  | plugin instagram-agent |
| ig-story |  | plugin instagram-agent |
| ig-viral |  | plugin instagram-agent |
| bom |  | plugin kicad-happy |
| datasheets |  | plugin kicad-happy |
| digikey |  | plugin kicad-happy |
| element14 |  | plugin kicad-happy |
| emc |  | plugin kicad-happy |
| jlcpcb |  | plugin kicad-happy |
| kicad |  | plugin kicad-happy |
| lcsc |  | plugin kicad-happy |
| mouser |  | plugin kicad-happy |
| pcbway |  | plugin kicad-happy |
| spice |  | plugin kicad-happy |
| ponytail |  | plugin ponytail |
| ponytail-audit |  | plugin ponytail |
| ponytail-debt |  | plugin ponytail |
| ponytail-gain |  | plugin ponytail |
| ponytail-help |  | plugin ponytail |
| ponytail-review |  | plugin ponytail |
| brainstorming | 7 | plugin superpowers |
| diagnosing-superpowers |  | plugin superpowers |
| dispatching-parallel-agents |  | plugin superpowers |
| executing-plans |  | plugin superpowers |
| finishing-a-development-branch |  | plugin superpowers |
| receiving-code-review |  | plugin superpowers |
| requesting-code-review |  | plugin superpowers |
| subagent-driven-development |  | plugin superpowers |
| systematic-debugging | 1 | plugin superpowers |
| test-driven-development |  | plugin superpowers |
| using-git-worktrees |  | plugin superpowers |
| using-superpowers |  | plugin superpowers |
| verification-before-completion |  | plugin superpowers |
| writing-plans |  | plugin superpowers |
| writing-skills |  | plugin superpowers |
| asset-pipeline |  | plugin universal-modder |
| fal-assets |  | plugin universal-modder |
| game-automation |  | plugin universal-modder |
| game-recon |  | plugin universal-modder |
| game-research-websearch |  | plugin universal-modder |
| mashup-mods |  | plugin universal-modder |
| mod-any-game | 1 | plugin universal-modder |
| publish-mod |  | plugin universal-modder |
| reverse-engineering |  | plugin universal-modder |
| share-field-notes |  | plugin universal-modder |
| showcase-video |  | plugin universal-modder |
| ai-design-skills-cheat-sheet | 2 | used 2x |
| emil-design-eng | 2 | used 2x |
| impeccable | 2 | used 2x |
| design-taste-frontend | 3 | used 3x (now v2) |
| claude-context-pdf |  | yours |
| evidence-debug |  | yours |
| ml-vram-budget |  | yours |
| spec-gated-build |  | yours |
| ui-screenshot-loop | 3 | yours, used 3x |
| ship-clean | 5 | yours, used 5x |

## 💤 Later — turn off, keep on disk

- **Code-review duplicates (code-review + ponytail-review + superpowers cover these):** adversarial-reviewer, code-reviewer, pr-review-expert
- **Browser duplicates (playwright-cli + Chrome cover these):** agent-browser, browser-automation, full-page-screenshot
- **Agent / prompt building:** agent-designer, agent-workflow-designer, autoresearch-agent, loop, prompt-engineer-toolkit, prompt-optimizer, resume (7x), senior-prompt-engineer, setup, workflow-builder
- **Emil niche (React Native, Sonner, iOS feel):** animate-expo, animation-performance, animation-vocabulary, apple-design, ask-sonner, find-animation-opportunities, improve-animations, mobile-native, pick-ui-library, prototype
- **Dev / ops, for when a project needs it:** api-design-reviewer, api-test-suite-builder, ci-cd-pipeline-builder, codebase-onboarding, database-designer, dependency-auditor, docker-development, env-secrets-manager, git-worktree-manager, performance-profiler, security-guidance, senior-architect, senior-qa, senior-security, ship-gate, sql-database-assistant, tech-stack-evaluator
- **Design duplicates (impeccable + taste + Emil cover these):** apple-hig-expert, design-md-reference, epic-design, gpt-taste, high-end-visual-design, image-to-code, imagegen-frontend-mobile, imagegen-frontend-web, industrial-brutalist-ui, landing, landing-page-generator, minimalist-ui, redesign-existing-projects, stitch-design-taste, ui-design-system, ux-product-auditor, ux-researcher-designer, web-design-guidelines
- **Process duplicates (your skills + superpowers + ponytail cover these):** caveman, focused-fix, grill-me, grill-with-docs, handoff, karpathy-coder, skill-finder, skill-tester (1x), tdd-guide, write-a-skill, writing-guidelines
- **was already off:** changelog-generator, code-tour, content-creator, design-taste-frontend-v1, grants, llm-cost-optimizer, market-research, patent, presentation-structure (1x), presentation-styling, red-team, saas-idea-validator, security-pen-testing, senior-devops, spec-to-repo, youtube-producer
- **Playwright test pack (generic names hijack 'fix'/'review'/'init'):** coverage, fix, generate, init, migrate, pw, report, review
- **Video (brag covers launch videos):** demo-video, remotion-best-practices, remotion-captions, remotion-create, remotion-docs, remotion-interactivity, remotion-maps, remotion-markup, remotion-multimedia, remotion-render, remotion-saas, remotion-studio, remotion-upgrade
- **React / Vercel web stack:** deploy-to-vercel, senior-backend, senior-frontend, senior-fullstack, vercel-composition-patterns, vercel-react-best-practices, vercel-react-native-skills, vercel-react-view-transitions
- **Research / study:** litreview, notebooklm, pulse, research, research-summarizer, statistical-analyst, syllabus

## 🗑️ Not for you — archive

Currently **on**: aeo (SEO for AI answers), claude-coach (fires on every turn), command-guide (noise), full-output-enforcement (removed upstream, fights ponytail), ponytail (exact copy of the ponytail plugin's skill), ponytail-audit (exact copy of the ponytail plugin's skill), ponytail-debt (exact copy of the ponytail plugin's skill), ponytail-gain (exact copy of the ponytail plugin's skill), ponytail-help (exact copy of the ponytail plugin's skill), ponytail-review (exact copy of the ponytail plugin's skill), write-swift (Swift/iOS, you're on Linux)

Already off: ab-test-setup, ad-creative, agent-protocol, agenthub, agile-product-owner, ai-act-readiness, ai-research-analyst, ai-security, ai-seo, ai-workflow-architect, aims-audit, analytics-tracking, andreessen, app-store-optimization, atlassian-admin, atlassian-templates, aws-solution-architect, azure-cloud-architect, behuman, board, board-deck-builder, board-meeting, board-prep, boardroom, brand-guidelines, brandkit, brief, browserstack, business-growth-consultant, business-growth-skills, business-investment-advisor, business-operations-skills, c-level-agents, c-level-skills, caio-review, campaign-analytics, capa-officer, capacity-planner, capture, cco-review, cdo-review, ceo-advisor, cfo-advisor, cfo-review, challenge, change-management, channel-economics, chaos-engineering, chief-ai-officer-advisor, chief-content-officer, chief-customer-officer-advisor, chief-data-officer-advisor, chief-of-staff, chro-advisor, churn-prevention, ciso-advisor, ciso-review, clinical-research, cloud-security, cmo-advisor, cmo-review, code-to-prd, cold-email, commercial-forecaster, commercial-policy, commercial-skills, company-os, competitive-intel, competitive-teardown, competitor-alternatives, compliance-os, compliance-readiness, confluence-expert, content-humanizer, content-production, content-strategy, context-engine, contract-and-proposal-writer, coo-advisor, copy-editing, copywriting, cpo-advisor, cpo-review, cro-advisor, cro-review, cross-eval, cs-onboard, cto-advisor, cto-review, culture-architect, customer-success-manager, data-quality-auditor, database-schema-designer, deal-desk, decide, decision-logger, dossier, email-sequence, email-template-builder, engineering-advanced-skills, engineering-skills, eu-ai-act-specialist, eval, execute, executive-mentor, experiment-designer, extract, fda-consultant-specialist, fda-qsr-audit-prep, feature-flags-architect, finance-skills, financial-analyst, form-cro, founder-ceo-coach, founder-coach, founder-mode, free-tool-strategy, freeze, gc-review, gcp-cloud-architect, gdpr-audit-prep, gdpr-dsgvo-expert, general-counsel-advisor, google-workspace-cli, hard-call, helm-chart-builder, inbox-setup, inbox-triage, incident-commander, incident-response, information-security-manager-iso27001, internal-comms, internal-narrative, interview-system-designer, intl-expansion, isms-audit-expert, iso13485-audit-prep, iso27001-audit-prep, iso42001-specialist, jira-expert, knowledge-ops, kubernetes-operator, landing-page-cro-expert, launch-strategy, llm-wiki, ma-playbook, marketing-campaign-planner, marketing-context, marketing-demand-acquisition, marketing-ideas, marketing-ops, marketing-psychology, marketing-skills, marketing-strategy-pmm, mdr-745-specialist, meeting-analyzer, merge, migration-architect, monorepo-navigator, ms365-tenant-manager, newsletter-writer, observability-designer, office-hours, onboard, onboarding-cro, org-health-diagnostic, page-cro, paid-ads, partnerships-architect, paywall-upgrade-cro, personal-brand-godin, pm-skills, popup-cro, post-mortem, postmortem, pricing-strategist, pricing-strategy, process-mapper, procurement-optimizer, product-analytics, product-discovery, product-manager-toolkit, product-research, product-skills, product-strategist, programmatic-seo, promote, prompt-governance, qms-audit-expert, quality-documentation-manager, quality-manager-qmr, quality-manager-qms-iso13485, ra-qm-skills, referral-program, reflect, regulatory-affairs-head, release-manager, remember, research-finance, research-ops-skills, revenue-operations, rfp-responder, risk-management-specialist, roadmap-communicator, run, runbook-generator, saas-metrics-coach, saas-scaffolder, sales-engineer, scenario-war-room, schema-markup, scrum-master, secrets-vault-manager, self-eval, self-improving-agent, senior-data-engineer, senior-pm, senior-secops, seo-audit, signup-flow-cro, site-architecture, slo-architect, snowflake-development, soc2-audit-prep, soc2-compliance, social-content, social-media-analyzer, social-media-manager, spawn, spec-driven-workflow, status, strategic-alignment, stress-test, stripe-integration-expert, tc-tracker, team-communications, tech-debt-tracker, terraform-patterns, testrail, threat-detection, time-skill, vendor-management, vercel-cli-with-tokens, vercel-optimize, vibe-to-agentic-framework, video-content-strategist, vpe-advisor, vpe-review, weather-fetcher, weather-svg-creator, x-twitter-growth

