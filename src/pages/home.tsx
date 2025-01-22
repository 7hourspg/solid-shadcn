import { Component } from "solid-js"
import { A } from "@solidjs/router"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const Home: Component = () => {
  return (
    <div class="flex flex-col min-h-screen">
      <main class="flex-1">
        <section class="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div class="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <a
              class="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
              target="_blank"
              href="https://github.com/7hourspg"
            >
              Follow along on GitHub
            </a>
            <h1 class="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              Beautiful components built with SolidJS
            </h1>
            <p class="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              A collection of accessible and customizable components for
              building high‑quality user interfaces with SolidJS and Tailwind
              CSS.
            </p>
            <div class="space-x-4">
              <Button size="lg" asChild>
                <A href="https://github.com/7hourspg/solid-shadcn">Get Started</A>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <A href="/components">Components</A>
              </Button>
            </div>
          </div>
        </section>

        <section class="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24">
          <div class="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 class="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
              Features
            </h2>
            <p class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Solid Shadcn provides a robust foundation for building modern web
              applications.
            </p>
          </div>
          <div class="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            <div class="relative overflow-hidden rounded-lg border bg-background p-2">
              <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-12 w-12"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
                <div class="space-y-2">
                  <h3 class="font-bold">Accessible</h3>
                  <p class="text-sm text-muted-foreground">
                    Follows WAI-ARIA patterns for maximum accessibility.
                  </p>
                </div>
              </div>
            </div>
            <div class="relative overflow-hidden rounded-lg border bg-background p-2">
              <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-12 w-12"
                >
                  <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76z"></path>
                  <line x1="16" y1="8" x2="2" y2="22"></line>
                  <line x1="17.5" y1="15" x2="9" y2="15"></line>
                </svg>
                <div class="space-y-2">
                  <h3 class="font-bold">Customizable</h3>
                  <p class="text-sm text-muted-foreground">
                    Easy to customize with Tailwind CSS and CSS variables.
                  </p>
                </div>
              </div>
            </div>
            <div class="relative overflow-hidden rounded-lg border bg-background p-2">
              <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-12 w-12"
                >
                  <path d="M12 2v20"></path>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
                <div class="space-y-2">
                  <h3 class="font-bold">Type Safe</h3>
                  <p class="text-sm text-muted-foreground">
                    Built with TypeScript for a better developer experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="container py-8 md:py-12 lg:py-24">
          <div class="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 class="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
              Get Started
            </h2>
            <p class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Get started with Solid Shadcn in your project.
            </p>
          </div>

          <div class="mx-auto flex justify-center mt-8 max-w-[58rem] p-4">
            <Button asChild>
              <A href="https://github.com/7hourspg/solid-shadcn">View Docs</A>
            </Button>
          </div>
        </section>

        <section class="container py-8 md:py-12 lg:py-24 border-t">
          <div class="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            <div class="relative overflow-hidden rounded-lg border bg-background p-2">
              <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
                <h3 class="text-2xl font-bold">10+</h3>
                <p class="text-sm text-muted-foreground">
                  Production-ready components built with Solid.js and Tailwind
                  CSS
                </p>
              </div>
            </div>
            <div class="relative overflow-hidden rounded-lg border bg-background p-2">
              <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
                <h3 class="text-2xl font-bold">Just Copy & Paste</h3>
                <p class="text-sm text-muted-foreground">
                  Just copy and paste the components you need into your project
                </p>
              </div>
            </div>
            <div class="relative overflow-hidden rounded-lg border bg-background p-2">
              <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
                <h3 class="text-2xl font-bold">MIT Licensed</h3>
                <p class="text-sm text-muted-foreground">
                  Free to use for personal and commercial projects
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="container py-8 md:py-12 lg:py-24 border-t">
          <div class="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 class="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
              Components
            </h2>
            <p class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              A showcase of our beautiful components
            </p>
          </div>
          <div class="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
            <Card class="relative overflow-hidden">
              <CardHeader>
                <CardTitle>Buttons</CardTitle>
                <CardDescription>
                  Different button variants with hover and focus states.
                </CardDescription>
              </CardHeader>
              <CardContent class="flex gap-2">
                <Button>Default</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="secondary">Secondary</Button>
              </CardContent>
            </Card>

            <Card class="relative overflow-hidden">
              <CardHeader>
                <CardTitle>Dialog</CardTitle>
                <CardDescription>
                  Modal dialogs for important content.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Dialog>
                  <DialogTrigger>
                    <Button variant="outline">Open Dialog</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Example Dialog</DialogTitle>
                      <DialogDescription>
                        This is a dialog example from our components.
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
