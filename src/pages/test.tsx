import { Component, createSignal, For, JSX } from "solid-js"
import { Check, Copy, Gift, Trash } from "lucide-solid"

import { copyToClipboard } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import buttonCode from "@/components/ui/button.tsx?raw"

interface ButtonType {
  label: string
  variant:
    | "default"
    | "secondary"
    | "outline"
    | "ghost"
    | "destructive"
    | "link"
  leftIcon?: JSX.Element
  rightIcon?: JSX.Element
}

const ButtonShowcase: Component = () => {
  const [copiedStates, setCopiedStates] = createSignal<boolean>(false)

  const buttons: ButtonType[] = [
    { label: "Default", variant: "default" },
    { label: "Secondary", variant: "secondary" },
    { label: "Outline", variant: "outline" },
    { label: "Ghost", variant: "ghost" },
    { label: "Destructive", variant: "destructive" },
    { label: "Link", variant: "link" },
    {
      label: "Outline with Trash",
      leftIcon: <Trash class="w-4 h-4 mr-2" />,
      variant: "outline",
    },
    {
      label: "Default with Gift",
      leftIcon: <Gift class="w-4 h-4 mr-2" />,
      variant: "default",
    },
    {
      label: "Ghost with Arrow",
      leftIcon: <span class="mr-2">←</span>,
      variant: "ghost",
    },
    {
      label: "Outline with Arrow",
      rightIcon: <span class="ml-2">→</span>,
      variant: "outline",
    },
  ]

  const handleCopyButtonComponent = async () => {
    await copyToClipboard(buttonCode)
    setCopiedStates(true)
    setTimeout(() => setCopiedStates(false), 2000)
  }

  return (
    <div class="min-h-screen p-8">
      <h1 class="text-4xl font-bold mb-4">Button</h1>
      <p class="text-gray-400 mb-8">
        A growing collection of button components built with SolidJS and
        TailwindCSS.
      </p>

      {/* copy button will be here   */}
      <Button
        class="absolute top-16 right-8"
        variant="outline"
        onClick={() => handleCopyButtonComponent()}
      >
        {copiedStates() ? (
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

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <For each={buttons}>
          {(button) => (
            <div class="flex items-center justify-center p-8 bg-gray-800/10 rounded-lg">
              <Button
                variant={button.variant}
                onClick={() => console.log("Button clicked")}
              >
                {button.leftIcon}
                {button.label}
                {button.rightIcon}
              </Button>
            </div>
          )}
        </For>
      </div>
    </div>
  )
}

export default ButtonShowcase
