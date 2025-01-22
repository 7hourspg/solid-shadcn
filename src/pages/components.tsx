import { For } from "solid-js"
import { A } from "@solidjs/router"

import { components } from "@/lib/registry"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const ComponentsPage = () => {
  const categories = {
    inputs: "Form Inputs",
    "data-display": "Data Display",
    navigation: "Navigation",
    feedback: "Feedback",
    layout: "Layout",
    overlay: "Overlay",
  }

  const groupedComponents = () => {
    const grouped: Record<string, typeof components> = {}
    Object.entries(components).forEach(([key, value]) => {
      if (!grouped[value.category]) {
        grouped[value.category] = {}
      }
      grouped[value.category][key] = value
    })
    return grouped
  }

  return (
    <div class="container py-10">
      <div class="flex flex-col gap-8">
        <div class="space-y-1">
          <h1 class="text-3xl font-bold tracking-tight">Components</h1>
          <p class="text-muted-foreground">
            A collection of pre-built components ready for your next project.
          </p>
        </div>
        <For each={Object.entries(groupedComponents())}>
          {([category, items]) => (
            <div class="space-y-4">
              <h2 class="text-2xl font-semibold tracking-tight">
                {categories[category as keyof typeof categories]}
              </h2>
              <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                <For each={Object.entries(items)}>
                  {([key, item]) => (
                    <A href={`/components/${key}`}>
                      <Card class="hover:bg-muted/50 transition-colors h-[120px] flex flex-col justify-center">
                        <CardHeader>
                          <CardTitle>{item.name}</CardTitle>
                          <CardDescription class="line-clamp-2">
                            {item.description}
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    </A>
                  )}
                </For>
              </div>
            </div>
          )}
        </For>
      </div>
    </div>
  )
}

export default ComponentsPage
