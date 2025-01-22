import { For } from "solid-js"
import { A } from "@solidjs/router"

import { components } from "@/lib/registry"

const ComponentsPage = () => {
  return (
    <div class="container py-10">
      <div class="flex flex-col gap-4">
        <h1 class="text-4xl font-bold mb-8">Components</h1>
        <ul class="space-y-2">
          <For each={Object.entries(components)}>
            {([key, item]) => (
              <li>
                <A href={`/components/${key}`} class="text-lg hover:underline">
                  {item.name}
                </A>
              </li>
            )}
          </For>
        </ul>
      </div>
    </div>
  )
}

export default ComponentsPage
