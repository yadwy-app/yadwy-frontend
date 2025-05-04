# Yadwy Frontend Monorepo

[![Netlify Status](https://api.netlify.com/api/v1/badges/f4636eed-7eb6-4f66-b491-0f3c54cfd8ae/deploy-status)](https://app.netlify.com/sites/yadwy/deploys)

## How to Contribute

Project workspaces:

| Workspace       | Path              | Description                                                                                                                                                                   |
| --------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `@yadwy/store`  | `apps/store`      | The Next.js app that the users use to buy products and contact with the merchants.                                                                                            |
| `@yadwy/seller` | `apps/seller`     | The Next.js app that merchants use to manage their products, orders, and store settings.                                                                                      |
| `@yadwy/api`    | `packages/api`    | Contains the basic logic for the API calls to the backend so that it can be reused in other workspaces.                                                                       |
| `@yadwy/config` | `packages/config` | Contains the configurations for tools that may vary between workspaces, like `tsconfig.json`. but not the global tools like Biome which is configured for the whole monorepo. |
| `@yadwy/types`  | `packages/types`  | The types that will be used between the difference packages like `Product`                                                                                                    |
| `@yadwy/ui`     | `packages/ui`     | UI components that are shared across applications based on shadcn/ui.                                                                                                         |

### Tools Needed

- VSCode is recommended.
- Use AI tools like Copilot and v0.dev.
- [Bun.js](http://bun.sh/) as the JavaScript runtime.
- Install dependencies: `bun install`.
- Start developing: `bun dev`.
- Build the project: `bun store build`.
- Run checks: Ensure you follow the rules and everything is correct by running `bun check`.
- To run checks on one of the workspaces: `bunx turbo --filter @yadwy/store check:types`
  - Or just run `bun store check:types`
- We are using Turborepo to manage this monorepo and easily run tasks in the workspaces
- Lefthook is used to run checks before each commit so that the issues can be discovered before the GitHub Action discovers them.

### Adding New UI Components

We're using shadcn/ui for our component library. To add a new component to the shared UI library:

1. Navigate to the UI package directory:

   ```bash
   cd packages/ui
   ```

2. Add a new component using the shadcn CLI:

   ```bash
   bunx --bun shadcn@canary add <component-name>
   ```

3. Export the component in `src/components/index.ts` to make it available to consuming applications.

#### Example: Adding a Button Component

```bash
# Navigate to the UI package
cd packages/ui

# Install the button component
bunx --bun shadcn@canary add button

# Then make sure to export it in src/index.ts
```

This will generate a button.tsx component.

### Using UI Components in Applications

After adding components to the `@yadwy/ui` package, you can use them in your applications:

```tsx
// In apps/store or apps/seller
import { Button } from "@yadwy/ui";

export default function MyComponent() {
  return (
    <Button variant="default" size="lg">
      Click Me
    </Button>
  );
}
```

### Commit Message Convention

The project uses the following format for commit messages:

```txt
[tag] : message
```

The `tag` should be one of the following:

- `feat`: For new features or functionality.
- `fix`: For bug fixes or resolving issues.
- `style`: For changes related to styling, such as enhancing the UI or modifying colors.
- `docs`: For documentation updates or improvements.
- `refactor`: For code restructuring without changing functionality.
- `test`: For adding or updating tests.
- `chore`: For maintenance tasks like dependency updates or build process changes.

### Pull Requests (PRs)

Make your changes in a new branch other than `main` and open a pull request when you are done. A GitHub workflow will run for your PR to check type correctness using `tsc` and enforce rules using [Biome.js](https://biomejs.dev/). Ensure you run these checks locally and fix any issues if the GitHub Action fails.

At least one reviewer must approve your changes for the PR to be merged. :)

### Design principle to care about

- Strive for loose coupling
  - Each component is standalone, don't pass its core functionaly as a prop, get the result through a callback function
- [Co-locate](https://kentcdodds.com/blog/colocation) as possible
  - TLDR: put the code as near as possbile to the place where it is being used, maybe in the same file.
