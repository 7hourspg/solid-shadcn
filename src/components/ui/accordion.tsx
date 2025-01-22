import { JSX, splitProps } from "solid-js"
import { Accordion as KAccordion } from "@kobalte/core"
import { ChevronDown } from "lucide-solid"

import { cn } from "@/lib/utils"

const Accordion = KAccordion.Root

interface AccordionItemProps extends KAccordion.AccordionItemProps {
  class?: string
  children: JSX.Element
}

const AccordionItem = (props: AccordionItemProps) => {
  const [local, others] = splitProps(props, ["class", "children"])
  return (
    <KAccordion.Item class={cn("border-b", local.class)} {...others}>
      {local.children}
    </KAccordion.Item>
  )
}

interface AccordionTriggerProps extends KAccordion.AccordionTriggerProps {
  class?: string
  children: JSX.Element
}

const AccordionTrigger = (props: AccordionTriggerProps) => {
  const [local, others] = splitProps(props, ["class", "children"])
  return (
    <KAccordion.Header class="flex">
      <KAccordion.Trigger
        class={cn(
          "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-expanded]>svg]:rotate-180",
          local.class
        )}
        {...others}
      >
        {local.children}
        <ChevronDown class="h-4 w-4 shrink-0 transition-transform duration-200" />
      </KAccordion.Trigger>
    </KAccordion.Header>
  )
}

interface AccordionContentProps extends KAccordion.AccordionContentProps {
  class?: string
  children: JSX.Element
}

const AccordionContent = (props: AccordionContentProps) => {
  const [local, others] = splitProps(props, ["class", "children"])
  return (
    <KAccordion.Content
      class={cn(
        "overflow-hidden text-sm transition-all data-[expanded]:animate-accordion-down data-[closed]:animate-accordion-up",
        local.class
      )}
      {...others}
    >
      <div class="pb-4 pt-0">{local.children}</div>
    </KAccordion.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
