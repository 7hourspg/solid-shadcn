import { JSX, splitProps } from "solid-js"
import { Popover as KPopover } from "@kobalte/core"

import { cn } from "@/lib/utils"

const Popover = KPopover.Root

interface PopoverTriggerProps extends KPopover.PopoverTriggerProps {
  class?: string
  children: JSX.Element
}

const PopoverTrigger = (props: PopoverTriggerProps) => {
  const [local, others] = splitProps(props, ["class", "children"])
  return (
    <KPopover.Trigger
      class={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        local.class
      )}
      {...others}
    >
      {local.children}
    </KPopover.Trigger>
  )
}

interface PopoverContentProps extends KPopover.PopoverContentProps {
  class?: string
  children: JSX.Element
}

const PopoverContent = (props: PopoverContentProps) => {
  const [local, others] = splitProps(props, ["class", "children"])
  return (
    <KPopover.Portal>
      <KPopover.Content
        class={cn(
          "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none",
          "data-[expanded]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[expanded]:fade-in-0 data-[closed]:zoom-out-95 data-[expanded]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          local.class
        )}
        {...others}
      >
        {local.children}
        <KPopover.Arrow class="fill-popover [&>path]:stroke-border [&>path]:stroke-2" />
      </KPopover.Content>
    </KPopover.Portal>
  )
}

export { Popover, PopoverTrigger, PopoverContent }
