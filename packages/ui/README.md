# @yadwy/ui

A component library based on shadcn/ui for Yadwy frontend applications.

## Overview

This package provides reusable UI components for Yadwy frontend applications. Built on shadcn/ui, it ensures consistent styling and behavior across all Yadwy apps while maintaining a modern, accessible design system.

## Setup

1. Import the global styles in your application:

```css
/* In your apps/styles/globals.css */
@import "../../../../packages/ui/src/styles/globals.css";
```

2. You can now import and use components:

```tsx
import { Button, Card, Input } from "@yadwy/ui";
```

## Component Examples

### Button

```tsx
<Button variant="default" size="default">
  Click me
</Button>
```

### Other Components

Check the component folder for available components and their props.

## Adding New Components

To add a new component to the library:

1. Navigate to the ui package directory:

```sh
cd packages/ui
```

2. Add a new component using the shadcn CLI:

```sh
bunx --bun shadcn@canary add <component-name>
```

3. Export the component in `src/components/index.ts` to make it available to consuming applications.
