import { createEffect, Show } from "solid-js"
import { Dynamic } from "solid-js/web"
import { useNavigate, useParams } from "@solidjs/router"

import { components } from "@/lib/registry"

const RenderComp = () => {
  const params = useParams()
  const navigate = useNavigate()
  const slug = () => params.slug as string

  createEffect(() => {
    if (!components[slug()]) {
      navigate("/404", { replace: true })
    }
  })

  return (
    <Show when={components[slug()]}>
      <div class="container py-10">
        <div class="flex items-center justify-between">
          <div class="space-y-1">
            <h1 class="text-3xl font-bold tracking-tight">
              {components[slug()]?.name}
            </h1>
            <p class="text-muted-foreground">
              {components[slug()]?.description}
            </p>
          </div>
        </div>
        <div class="mt-16 flex w-full items-center justify-center rounded-lg border bg-background p-10">
          <Dynamic component={components[slug()]?.component} />
        </div>
      </div>
    </Show>
  )
}

export default RenderComp
