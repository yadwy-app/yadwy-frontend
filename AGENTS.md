# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Yadwy is an e-commerce monorepo with two Next.js 15 applications and shared packages:

- **@yadwy/store** (`apps/store`) - Customer-facing storefront (port 4000)
- **@yadwy/seller** (`apps/seller`) - Merchant dashboard (port 5000)
- **@yadwy/ui** (`packages/ui`) - Shared shadcn/ui component library
- **@yadwy/api** (`packages/api`) - Backend API integration with auth handling
- **@yadwy/types** (`packages/types`) - Shared TypeScript types
- **@yadwy/config** (`packages/config`) - Shared tsconfig base

## Commands

```bash
# Development
bun install                    # Install dependencies
bun dev                        # Start store app (default)
bun store dev                  # Start store app
bun seller dev                 # Start seller app

# Building
bun store build                # Build store
bun seller build               # Build seller

# Code Quality (run before committing)
bun check                      # Run all checks (biome + prettier + types)
bun check:types                # TypeScript checking across all workspaces
bun check:biome                # Lint and format with Biome
bun store check:types          # Type check store only
bun seller check:types         # Type check seller only

# Adding UI components
cd packages/ui && bunx --bun shadcn@canary add <component-name>
```

## Architecture

### Import Aliases

- Store app: `~/` → `src/` (e.g., `~/components/Header`)
- Seller app: `@/` → `src/` (e.g., `@/components/Header`)

### Routing Structure

Both apps use Next.js App Router with i18n (`[locale]` segment):

- Store: `apps/store/src/app/[locale]/(root)/{products,search,cart,billing,...}`
- Seller: `apps/seller/src/app/[locale]/{products,orders,wallet,settings,...}`

Supported locales: `en`, `ar` (with RTL support)

### API & Authentication

The `@yadwy/api` package handles all backend communication:

- Direct client-to-backend calls (no server proxy)
- Tokens stored in HTTP-only cookies
- Automatic token refresh 1 day before expiration
- Environment-specific files use `.client.ts` / `.server.ts` suffixes

Key patterns:

```tsx
// Client-side session
import { useSession } from "@yadwy/api/utils/session.client";

// Server-side session
import { getServerSession } from "@yadwy/api/utils/session.server";
```

### Component Organization

- `_components/` - Feature-specific components co-located with routes
- `_sections/` - Page sections
- Use `@yadwy/ui` for shared UI components (Radix UI + Tailwind)

## Code Style

- **Linting/Formatting**: Biome handles JS/TS/JSON, Prettier handles HTML/YAML/MD
- **Pre-commit hooks**: Lefthook runs checks automatically
- **TypeScript**: Strict mode enabled, no unchecked indexed access
- **Styling**: Tailwind CSS v4 with CVA for component variants

## Guidelines

### TypeScript

- **Never use `any`** — defeats type safety; use `unknown` and narrow, or define proper types
- **Avoid type assertions (`as`)** — masks type errors; fix the actual type instead
- **Use `@yadwy/types`** for shared types — single source of truth, prevents drift

### Components

- **One responsibility per component** — easier to test, reuse, and reason about
- **< 150 lines per component** — if larger, split into subcomponents
- **Props over internal state** — makes components predictable and testable
- **Colocate components with their route** — reduces mental overhead finding code
- **Extract reusable UI to `@yadwy/ui`** — if used in both apps, it belongs in the shared package

### Performance

- **Use Server Components by default** — smaller client bundle, faster initial load
- **Add `"use client"` only when needed** — interactivity, hooks, browser APIs
- **Use `next/image`** — automatic optimization, lazy loading, prevents layout shift
- **Avoid layout shifts** — always set explicit dimensions on images/embeds
- **Memoize expensive computations** — `useMemo` for calculations, `useCallback` for callbacks passed to children

### Data Fetching

- **Fetch on server when possible** — faster, no loading spinners, better SEO
- **Use TanStack Query for client fetching** — handles caching, deduplication, background refresh
- **Handle loading and error states** — never leave UI in indeterminate state

### Styling

- **Use Tailwind utilities** — consistent spacing, colors, responsive breakpoints
- **Follow existing patterns** — check similar components before creating new styles
- **RTL support** — use logical properties (`ms-`, `me-`, `ps-`, `pe-`) instead of `ml-`, `mr-`
- **Mobile-first** — default styles for mobile, use `md:` / `lg:` for larger screens

### State Management

- **Local state first** — `useState` unless state needs to be shared
- **URL state for filters/pagination** — shareable, bookmarkable, survives refresh
- **Zustand for global client state** — already used for session management

## Commit Convention

Format: `[tag]: message`

Tags: `feat`, `fix`, `style`, `docs`, `refactor`, `test`, `chore`
