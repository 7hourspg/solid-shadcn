import { ParentComponent } from "solid-js"
import { A } from "@solidjs/router"
import { Github } from "lucide-solid"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

const Layout: ParentComponent = (props) => {
  return (
    <div class="flex flex-col min-h-screen">
      <header class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div class="container flex h-14 items-center">
          <a class="flex items-center justify-center mr-6" href="/">
            <svg
              class="h-6 w-6"
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
            <span class="ml-2 text-xl font-bold">Solid Shadcn</span>
          </a>
          <nav class="flex items-center space-x-6 text-sm font-medium">
            <A
              class="transition-colors hover:text-foreground/80 text-foreground/60"
              href="/"
            >
              Home
            </A>

            <A
              class="transition-colors hover:text-foreground/80 text-foreground/60"
              href="/components"
            >
              Components
            </A>
            <A
              class="transition-colors hover:text-foreground/80 text-foreground/60"
              href="https://github.com/7hourspg/solid-shadcn"
            >
              Docs
            </A>
            <A
              class="transition-colors hover:text-foreground/80 text-foreground/60"
              href="https://github.com/7hourspg/solid-shadcn/blob/master/README.md"
            >
              Get Started
            </A>
          </nav>
          <div class="flex flex-1 items-center justify-end space-x-4">
            <nav class="flex items-center space-x-2">
              <a
                href="https://github.com/yourusername/solid-ui"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="ghost" size="icon">
                  <Github class="h-4 w-4" />
                  <span class="sr-only">GitHub</span>
                </Button>
              </a>
              <ThemeToggle />
            </nav>
          </div>
        </div>
      </header>

      <main class="flex-1">{props.children}</main>

      <footer class="border-t py-6 md:py-0">
        <div class="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p class="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{" "}
            <a
              href="https://github.com/7hourspg"
              target="_blank"
              rel="noreferrer"
              class="font-medium underline underline-offset-4"
            >
              7hours ❤️
            </a>
            . The source code is available on{" "}
            <a
              href="https://github.com/yourusername/solid-ui"
              target="_blank"
              rel="noreferrer"
              class="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
