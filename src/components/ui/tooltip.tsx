import { JSX, splitProps } from "solid-js"
import { Tooltip as KTooltip } from "@kobalte/core"

import { cn } from "@/lib/utils"

const Tooltip = KTooltip.Root

interface TooltipTriggerProps extends KTooltip.TooltipTriggerProps {
  class?: string
  children: JSX.Element
}

const TooltipTrigger = (props: TooltipTriggerProps) => {
  const [local, others] = splitProps(props, ["class", "children"])
  return (
    <KTooltip.Trigger class={cn("", local.class)} {...others}>
      {local.children}
    </KTooltip.Trigger>
  )
}

const TooltipPortal = KTooltip.Portal

interface TooltipContentProps extends KTooltip.TooltipContentProps {
  class?: string
  children: JSX.Element
}

const TooltipContent = (props: TooltipContentProps) => {
  const [local, others] = splitProps(props, ["class", "children"])
  return (
    <KTooltip.Content
      class={cn(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md",
        "animate-in fade-in-0 zoom-in-95 data-[expanded]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[expanded]:fade-in-0 data-[closed]:zoom-out-95 data-[expanded]:zoom-in-95",
        "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        local.class
      )}
      {...others}
    >
      {local.children}
      <KTooltip.Arrow
        size={20}
        class="fill-popover [&>path]:stroke-border [&>path]:stroke-2"
      />
    </KTooltip.Content>
  )
}

export { Tooltip, TooltipTrigger, TooltipPortal, TooltipContent }
