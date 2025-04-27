# @yadwy/ui

A shadcn UI component library package for the Yadwy frontend applications.

## Overview

This package contains reusable UI components based on shadcn/ui for use across Yadwy frontend applications. It ensures consistent styling and behavior across all Yadwy apps.

## Components

The package includes the following components:

- Button
- Card
- Input
- Toast (with Toast Provider)

## Usage

Import components from the package:

```tsx
import { Button, Card, Input, Toaster, toast } from "@yadwy/ui";
```

### Button Example

```tsx
<Button variant="default" size="default">
  Click me
</Button>
```

### Card Example

```tsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>Content goes here</CardContent>
  <CardFooter>Footer content</CardFooter>
</Card>
```

### Toast Example

First, add the Toaster component to your layout:

```tsx
import { Toaster } from "@yadwy/shadcn";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
```

Then use the toast function in your components:

```tsx
import { toast } from "@yadwy/ui";

function MyComponent() {
  return (
    <Button
      onClick={() =>
        toast({ title: "Success!", description: "Your action was completed." })
      }
    >
      Show Toast
    </Button>
  );
}
```

## Utility Functions

The package also includes the `cn` utility for composing class names:

```tsx
import { cn } from "@yadwy/shadcn";

const className = cn(
  "base-class",
  condition && "conditional-class",
  dynamicStyles,
);
```
