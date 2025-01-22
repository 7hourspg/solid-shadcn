import { createEffect, createSignal, Show } from "solid-js"
import { Dynamic } from "solid-js/web"
import { useNavigate, useParams } from "@solidjs/router"
import { Check, Copy } from "lucide-solid"

import { components } from "@/lib/registry"
import { copyToClipboard } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const ComponentPage = () => {
  const params = useParams()
  const navigate = useNavigate()
  const slug = () => params.slug as string
  const [copied, setCopied] = createSignal(false)

  createEffect(() => {
    if (!components[slug()]) {
      navigate("/404", { replace: true })
    }
  })

  const handleCopy = async () => {
    if (components[slug()]?.code) {
      await copyToClipboard(components[slug()].code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <Show when={components[slug()]}>
      <div class="container max-w-7xl mx-auto py-10">
        <div class="flex items-center justify-between mb-8">
          <div class="space-y-1">
            <h1 class="text-4xl font-bold tracking-tight">
              {components[slug()].name}
            </h1>
            <p class="text-muted-foreground text-lg">
              {components[slug()].description}
            </p>
          </div>
          <Button variant="outline" onClick={handleCopy} class="h-10">
            {copied() ? (
              <>
                <Check class="w-4 h-4 mr-2" />
                Copied!
              </>
            ) : (
              <>
                <Copy class="w-4 h-4 mr-2" />
                Copy code
              </>
            )}
          </Button>
        </div>

        <Card class="rounded-lg border bg-card">
          <div class="flex items-center max-h-[600px] justify-center p-10 border-b">
            <Dynamic component={components[slug()].component} />
          </div>
          <div class="p-6 bg-muted/50">
            <pre class="overflow-x-auto">
              <code class="text-sm whitespace-pre">
                {components[slug()].code}
              </code>
            </pre>
          </div>
        </Card>
      </div>
    </Show>
  )
}

export default ComponentPage
