import {
  createContext,
  createSignal,
  JSX,
  ParentComponent,
  Show,
  splitProps,
  useContext,
} from "solid-js"

import { cn } from "@/lib/utils"

interface TabsContextValue {
  value: () => string
  setValue: (value: string) => void
}

const TabsContext = createContext<TabsContextValue>()

interface TabsProps extends JSX.HTMLAttributes<HTMLDivElement> {
  defaultValue: string
  value?: string
  onValueChange?: (value: string) => void
}

export const Tabs: ParentComponent<TabsProps> = (props) => {
  const [, rest] = splitProps(props, [
    "class",
    "defaultValue",
    "value",
    "onValueChange",
    "children",
  ])
  const [localValue, setLocalValue] = createSignal(props.defaultValue)

  const value = () => props.value ?? localValue()
  const setValue = (newValue: string) => {
    props.onValueChange?.(newValue)
    setLocalValue(newValue)
  }

  return (
    <TabsContext.Provider value={{ value, setValue }}>
      <div class={cn("w-full", props.class)} {...rest}>
        {props.children}
      </div>
    </TabsContext.Provider>
  )
}

export const TabsList: ParentComponent<JSX.HTMLAttributes<HTMLDivElement>> = (
  props
) => {
  const [, rest] = splitProps(props, ["class", "children"])
  return (
    <div
      class={cn(
        "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
        props.class
      )}
      {...rest}
    >
      {props.children}
    </div>
  )
}

interface TabsTriggerProps extends JSX.HTMLAttributes<HTMLButtonElement> {
  value: string
}

export const TabsTrigger: ParentComponent<TabsTriggerProps> = (props) => {
  const [, rest] = splitProps(props, ["class", "value", "children"])
  const context = useContext(TabsContext)

  const isSelected = () => context?.value() === props.value

  return (
    <button
      class={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        isSelected() && "bg-background text-foreground shadow-sm",
        props.class
      )}
      onClick={() => context?.setValue(props.value)}
      {...rest}
    >
      {props.children}
    </button>
  )
}

interface TabsContentProps extends JSX.HTMLAttributes<HTMLDivElement> {
  value: string
}

export const TabsContent: ParentComponent<TabsContentProps> = (props) => {
  const [, rest] = splitProps(props, ["class", "value", "children"])
  const context = useContext(TabsContext)

  const isSelected = () => context?.value() === props.value

  return (
    <Show when={isSelected()}>
      <div
        class={cn(
          "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          props.class
        )}
        {...rest}
      >
        {props.children}
      </div>
    </Show>
  )
}
