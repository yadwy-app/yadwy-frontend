---
inclusion: always
---

# Frontend Architecture Rules

## Type Colocation Principles

**Types MUST be colocated with their usage - no centralized type files.**

### Structure:

```
src/
├── services/
│   ├── auth/
│   │   ├── types.ts          # Auth-specific types only
│   │   ├── auth.service.ts   # Auth service implementation
│   │   └── index.ts          # Barrel export
│   ├── products/
│   │   ├── types.ts          # Product-specific types only
│   │   ├── product.service.ts
│   │   └── index.ts
│   └── categories/
│       ├── types.ts          # Category-specific types only
│       ├── category.service.ts
│       └── index.ts
├── components/
│   ├── auth/
│   │   ├── types.ts          # Auth component types
│   │   ├── LoginForm.tsx
│   │   └── index.ts
│   └── products/
│       ├── types.ts          # Product component types
│       ├── ProductCard.tsx
│       └── index.ts
└── lib/
    └── types.ts              # ONLY shared types used across modules
```

## Critical Rules:

### ✅ DO:

- Keep types next to where they're used
- Create module-specific type files (`auth/types.ts`, `products/types.ts`)
- Use barrel exports (`index.ts`) for clean imports
- Put truly shared types in `lib/types.ts` (ApiError, PaginationParams, etc.)

### ❌ DON'T:

- Create centralized `types/api.ts` files
- Mix unrelated types in the same file
- Import types from distant modules

## Import Examples:

```typescript
// ✅ Good - colocated types
import { LoginRequestDto } from "./types";
import { User } from "../auth/types";

// ❌ Bad - centralized types
import { LoginRequestDto, ProductDto, CategoryDto } from "@/types/api";
```

## Module Boundaries:

Each service module should be self-contained:

- `types.ts` - Module-specific types
- `service.ts` - Service implementation
- `index.ts` - Public API exports

This mirrors the backend DDD module structure and ensures maintainability.
