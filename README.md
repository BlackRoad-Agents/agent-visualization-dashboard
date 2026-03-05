# BlackRoad 30K Agent Visualization Dashboard

**Real-time visualization of 30,000 AI agents deployment**

**Copyright © 2024-2026 BlackRoad OS, Inc. All Rights Reserved.**
**CEO:** Alexa Amundson | **PROPRIETARY AND CONFIDENTIAL**

[![CI](https://github.com/BlackRoad-OS/agent-visualization-dashboard/actions/workflows/ci.yml/badge.svg)](https://github.com/BlackRoad-OS/agent-visualization-dashboard/actions/workflows/ci.yml)
[![Deploy](https://github.com/BlackRoad-OS/agent-visualization-dashboard/actions/workflows/deploy.yml/badge.svg)](https://github.com/BlackRoad-OS/agent-visualization-dashboard/actions/workflows/deploy.yml)
[![CodeQL](https://github.com/BlackRoad-OS/agent-visualization-dashboard/actions/workflows/blackroad-codeql-analysis.yml/badge.svg)](https://github.com/BlackRoad-OS/agent-visualization-dashboard/actions/workflows/blackroad-codeql-analysis.yml)

---

## Overview

Visual representation of the BlackRoad 30,000 agent deployment system. Watch in real-time as agents are deployed, track their status, and monitor the entire ecosystem.

**Features**:
- Real-time particle-based visualization (30,000 agents)
- Live statistics: total agents, active, working, error rates
- 7 agent types with color-coded visualization
- Progressive deployment simulation (100 → 1K → 10K → 30K)
- Cloudflare Worker API for long-running tasks and metrics
- Clerk + Stripe integration for auth and billing
- BlackRoad design system (golden ratio, gradient colors)

---

## Quick Start

### Local Development

```bash
# Clone repository
git clone https://github.com/BlackRoad-OS/agent-visualization-dashboard.git
cd agent-visualization-dashboard

# Install dependencies
npm install

# Start local server
npm start
# Opens at http://localhost:3000

# Open visualization directly
open index.html
```

### Deploy to Cloudflare Pages

```bash
# Install wrangler
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy static site
wrangler pages deploy . --project-name=agent-visualization
```

### Deploy Cloudflare Worker (API + scheduled tasks)

```bash
# Deploy worker
wrangler deploy

# Test worker locally
wrangler dev
```

---

## Architecture

```
agent-visualization-dashboard/
├── index.html                          # Main visualization (30K agent canvas)
├── worker.js                           # Cloudflare Worker (API + cron jobs)
├── wrangler.toml                       # Cloudflare configuration
├── package.json                        # Dependencies (pinned versions)
├── lib/
│   └── clerk-stripe-integration.js     # Clerk auth + Stripe billing
├── pages/
│   └── api/webhooks/
│       ├── clerk.js                    # Clerk webhook handler
│       └── stripe.js                   # Stripe webhook handler
├── .github/
│   ├── workflows/
│   │   ├── ci.yml                      # CI: build, test, brand compliance
│   │   ├── deploy.yml                  # Deploy to Cloudflare Pages
│   │   ├── auto-merge.yml             # Auto-merge Dependabot + bot PRs
│   │   └── blackroad-codeql-analysis.yml  # CodeQL security scanning
│   ├── dependabot.yml                  # npm + github-actions updates
│   ├── CODEOWNERS                      # Review requirements
│   ├── SECURITY.md                     # Vulnerability reporting
│   └── ISSUE_TEMPLATE/                 # Bug + feature templates
├── LICENSE                             # BlackRoad OS, Inc. Proprietary
├── CONTRIBUTING.md                     # Contribution guidelines
├── CLERK_STRIPE_SETUP_GUIDE.md         # Clerk + Stripe integration guide
├── BLACKROAD_EMOJI_DICTIONARY.md       # Brand emoji dictionary
└── TRAFFIC_LIGHT_SYSTEM.md             # Status system guide
```

---

## Agent Types

| Type | Count | Color | Purpose |
|------|-------|-------|---------|
| Quantum Physics | 1,000 | #00ff88 | Scientific calculations |
| Development | 5,000 | #00aaff | Code review, CI/CD |
| Research | 5,000 | #ff00ff | Literature analysis |
| Documentation | 5,000 | #ffaa00 | API docs, tutorials |
| Monitoring | 5,000 | #ff3366 | Infrastructure watch |
| Integration | 5,000 | #aa00ff | API connectors |
| Analytics | 4,000 | #ffffff | Metrics, predictions |

---

## Cloudflare Worker API

The worker (`worker.js`) provides:

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/health` | GET | Health check |
| `/api/metrics` | GET | Full agent fleet metrics |
| `/api/agents` | GET | Agent type breakdown |

**Scheduled tasks** run every 6 hours (`0 */6 * * *`) to aggregate and persist metrics.

---

## Workflows

All GitHub Actions are pinned to specific commit hashes for reproducibility:

| Workflow | Trigger | Purpose |
|----------|---------|---------|
| `ci.yml` | Push/PR to main/master | Build, test, brand compliance, asset verification |
| `deploy.yml` | Push to main/master | Deploy to Cloudflare Pages |
| `auto-merge.yml` | PR events | Auto-merge Dependabot and labeled PRs |
| `blackroad-codeql-analysis.yml` | Push/PR/Weekly | CodeQL security scanning |

**Dependabot** monitors both npm packages and GitHub Actions for updates weekly.

---

## Stripe Products & Billing

Integrated via Clerk + Stripe webhooks. See [CLERK_STRIPE_SETUP_GUIDE.md](CLERK_STRIPE_SETUP_GUIDE.md) for setup.

**Required secrets** (set in GitHub repo settings or Cloudflare):
- `CLERK_WEBHOOK_SECRET` — Clerk webhook signing secret
- `STRIPE_SECRET_KEY` — Stripe API secret key
- `STRIPE_WEBHOOK_SECRET` — Stripe webhook signing secret
- `CLOUDFLARE_API_TOKEN` — Cloudflare API token
- `CLOUDFLARE_ACCOUNT_ID` — Cloudflare account ID

---

## Design System

### Golden Ratio Spacing
- Base: phi = 1.618
- Spacing: 8px, 13px, 21px, 34px, 55px

### Gradient Colors
```css
background: linear-gradient(135deg,
  #F5A623 0%,      /* Amber */
  #FF1D6C 38.2%,   /* Hot Pink */
  #9C27B0 61.8%,   /* Violet */
  #2979FF 100%     /* Electric Blue */
);
```

### Typography
- Font: SF Mono, monospace
- Primary: #00ff88 (neon green)
- Background: #000000 (pure black)

---

## Configuration

Edit configuration in `index.html` script section:

```javascript
const TARGET_AGENTS = 30000;
const AGENT_TYPES = [
    { name: 'Quantum Physics', count: 1000, color: '#00ff88' },
    { name: 'Development', count: 5000, color: '#00aaff' },
    { name: 'Research', count: 5000, color: '#ff00ff' },
    { name: 'Documentation', count: 5000, color: '#ffaa00' },
    { name: 'Monitoring', count: 5000, color: '#ff3366' },
    { name: 'Integration', count: 5000, color: '#aa00ff' },
    { name: 'Analytics', count: 4000, color: '#ffffff' }
];
```

---

## Enterprise Scale

- 30,000 AI Agents
- 30,000 Human Employees
- CEO: Alexa Amundson

**Contact:** blackroad.systems@gmail.com

---

## License & Copyright

**Copyright © 2024-2026 BlackRoad OS, Inc. All Rights Reserved.**

This software is proprietary and confidential. NOT open source. NOT for commercial resale.

See [LICENSE](LICENSE) for complete terms.
