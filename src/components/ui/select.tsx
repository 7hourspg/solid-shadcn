import { JSX, splitProps } from "solid-js"
import { Select as KSelect } from "@kobalte/core"
import { CheckIcon, ChevronDown } from "lucide-solid"

import { cn } from "@/lib/utils"

export interface SelectOption {
  value: string
  label: string
}

interface SelectProps {
  options: SelectOption[]
  placeholder?: string
  onChange?: (value: string) => void
  class?: string
}

export function Select(props: SelectProps) {
  const [local, others] = splitProps(props, ["class", "placeholder", "options"])

  return (
    <KSelect.Root
      options={local.options}
      placeholder={local.placeholder}
      onChange={props.onChange}
      itemComponent={(props) => (
        <KSelect.Item
          item={props.item}
          class="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
        >
          <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
            <KSelect.ItemIndicator>
              <CheckIcon class="h-4 w-4" />
            </KSelect.ItemIndicator>
          </span>
          <KSelect.ItemLabel>{props.item.rawValue.label}</KSelect.ItemLabel>
        </KSelect.Item>
      )}
    >
      <KSelect.Trigger
        class={cn(
          "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          local.class
        )}
        aria-label="Food"
      >
        <KSelect.Value<SelectOption> placeholder={local.placeholder} />
        <KSelect.Icon>
          <ChevronDown class="h-4 w-4 opacity-50" />
        </KSelect.Icon>
      </KSelect.Trigger>
      <KSelect.Portal>
        <KSelect.Content class="relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-80">
          <KSelect.Listbox class="p-1" />
        </KSelect.Content>
      </KSelect.Portal>
    </KSelect.Root>
  )
}
