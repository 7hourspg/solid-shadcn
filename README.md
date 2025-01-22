# Getting Started with Solid Shadcn

### 1. Clone the Repository

```bash
git clone https://github.com/7hourspg/solid-shadcn.git
cd solid-shadcn
```

### 2. Install Dependencies

Choose one of the following commands based on your package manager:

```bash
# For npm
npm install

# For yarn
yarn install

# For pnpm
pnpm install
```

### 3. Start Development Server

```bash
npm run dev
```

---

## Manual Setup (For Existing Projects)

If you want to add **Solid Shadcn** to an existing project, follow these steps:

### 1. Install Required Dependencies

```bash
npm install @kobalte/core class-variance-authority clsx tailwind-merge tailwindcss-animate lucide-solid
```

### 2. Install and Configure Tailwind CSS

1. Install Tailwind CSS and its peer dependencies:

```bash
npm install -D tailwindcss postcss autoprefixer
```

Then run the following command to generate the `tailwind.config.ts` file:

```bash
npx tailwindcss init
```

2. Add the following configuration to your `tailwind.config.ts` file:

```ts
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  plugins: [require("tailwindcss-animate")],
}
```

### 3. Add CSS Variables

Add these base styles to your `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 215 20.2% 65.1%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    /* Add other dark mode variables */
  }
}
```

You can visit the shadcn theme [here](https://ui.shadcn.com/themes) and choose your theme

### 4. Add Utility Functions

Create a `src/lib/utils.ts` file:

```ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### 5. Copy Components

Navigate to the [components](https://solid-shadcn.vercel.com/components) page and copy the components you want to use.

### 6. Start Using Components

You can now import and use the components in your application. For example:

```tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const MyComponent = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Card</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Click Me</Button>
      </CardContent>
    </Card>
  )
}
```

if you still have config related issues, please explore this codebase [here](https://github.com/7hourspg/solid-shadcn)

---

## Available Components

The library includes several pre-built components:

- **Button**
- **Card**
- **Dialog**
- **Accordion**
- **Popover**
- **Tooltip**
- _And more..._

Each component is built with accessibility in mind and follows **WAI-ARIA** patterns.

---

## Live Demo

You can visit the live demo [here](https://solid-shadcn.vercel.app/)

---

## License

This project is **MIT licensed**.

---

## Contributing

If you want to contribute to this project, please follow the steps below:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Create a pull request

We need to add more components to the library, so if you want to contribute, please add more components to the library.
