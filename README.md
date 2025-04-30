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

We're using shadcn/ui for our component library. To add a new compone navigate to packages/shadcn then run:

```bash
# Install a new component using the canary version
bunx --bun shadcn@canary add component-name
```

#### Example: Adding a Button Component

```bash
# Install the button component
bunx --bun shadcn@canary add button
```

This will generate a button.tsx component with the following structure:

```tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
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
