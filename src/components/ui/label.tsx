import { JSX, splitProps } from "solid-js"

import { cn } from "@/lib/utils"

export interface LabelProps extends JSX.LabelHTMLAttributes<HTMLLabelElement> {}

export function Label(props: LabelProps) {
  const [, rest] = splitProps(props, ["class"])
  return (
    <label
      class={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        props.class
      )}
      {...rest}
    />
  )
}
