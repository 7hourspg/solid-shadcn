import { JSX, splitProps } from "solid-js"

import { cn } from "@/lib/utils"

const Card = (props: JSX.HTMLAttributes<HTMLDivElement>) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <div
      class={cn(
        "rounded-lg border bg-card text-card-foreground shadow-sm",
        props.class
      )}
      {...rest}
    />
  )
}

const CardHeader = (props: JSX.HTMLAttributes<HTMLDivElement>) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <div class={cn("flex flex-col space-y-1.5 p-6", props.class)} {...rest} />
  )
}

const CardTitle = (props: JSX.HTMLAttributes<HTMLHeadingElement>) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <h3
      class={cn(
        "text-2xl font-semibold leading-none tracking-tight",
        props.class
      )}
      {...rest}
    />
  )
}

const CardDescription = (props: JSX.HTMLAttributes<HTMLParagraphElement>) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <p class={cn("text-sm text-muted-foreground", props.class)} {...rest} />
  )
}

const CardContent = (props: JSX.HTMLAttributes<HTMLDivElement>) => {
  const [, rest] = splitProps(props, ["class"])
  return <div class={cn("p-6 pt-0", props.class)} {...rest} />
}

const CardFooter = (props: JSX.HTMLAttributes<HTMLDivElement>) => {
  const [, rest] = splitProps(props, ["class"])
  return <div class={cn("flex items-center p-6 pt-0", props.class)} {...rest} />
}

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
