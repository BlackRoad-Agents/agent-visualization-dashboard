# GitHub Integration

This repository is integrated with GitHub automation for BlackRoad OS, Inc.

## Workflows

All actions are pinned to specific commit hashes for supply-chain security.

### CI Workflow (`ci.yml`)
- Runs on every push and PR to main/master
- Installs dependencies, runs syntax checks, tests
- Brand compliance validation (forbidden color check)
- Verifies all required static assets are present
- Node.js 18 environment

### Deploy Workflow (`deploy.yml`)
- Deploys to Cloudflare Pages on push to main/master
- Brand compliance check before deploy
- Uses `cloudflare/wrangler-action` (pinned hash)
- Requires secrets: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`

### Auto-Merge Workflow (`auto-merge.yml`)
- Auto-merges Dependabot PRs (approve + squash merge)
- Auto-merges bot PRs and PRs labeled `automerge`
- Validates mergeability before merging
- Squash merge with branch cleanup

### CodeQL Security Analysis (`blackroad-codeql-analysis.yml`)
- Runs on push, PR, and weekly schedule (Monday 4 AM UTC)
- JavaScript/TypeScript analysis
- Security + quality queries
- Auto-creates issues on failure

## Dependabot

- **npm**: Weekly dependency updates (Monday)
- **github-actions**: Weekly action updates (Monday)
- Auto-labeled with `dependencies` + `automerge`

## Labels

- `bug` — Bug reports
- `enhancement` — Feature requests
- `dependencies` — Dependency updates
- `automerge` — PRs to auto-merge
- `security` — Security issues
- `codeql` — CodeQL findings

---

© 2024-2026 BlackRoad OS, Inc. All Rights Reserved.
