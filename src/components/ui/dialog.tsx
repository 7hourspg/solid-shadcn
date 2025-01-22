import { JSX, splitProps } from "solid-js"
import { Dialog as KDialog } from "@kobalte/core"
import { X } from "lucide-solid"

import { cn } from "@/lib/utils"

const Dialog = KDialog.Root

const DialogTrigger = KDialog.Trigger

interface DialogOverlayProps extends JSX.HTMLAttributes<HTMLDivElement> {}

const DialogOverlay = (props: DialogOverlayProps) => {
  const [local, others] = splitProps(props, ["class"])
  return (
    <KDialog.Overlay
      class={cn(
        "fixed inset-0 z-50 bg-black/50 transition-all duration-100 data-[expanded]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[expanded]:fade-in-0",
        local.class
      )}
      {...others}
    />
  )
}

interface DialogContentProps extends JSX.HTMLAttributes<HTMLDivElement> {
  children: JSX.Element
}

const DialogContent = (props: DialogContentProps) => {
  const [local, others] = splitProps(props, ["class", "children"])
  return (
    <KDialog.Content
      class={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[expanded]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[expanded]:fade-in-0 data-[closed]:zoom-out-95 data-[expanded]:zoom-in-95 data-[closed]:slide-out-to-left-1/2 data-[closed]:slide-out-to-top-[48%] data-[expanded]:slide-in-from-left-1/2 data-[expanded]:slide-in-from-top-[48%] sm:rounded-lg",
        local.class
      )}
      {...others}
    >
      {local.children}
      <DialogClose class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[expanded]:bg-accent data-[expanded]:text-muted-foreground">
        <X class="h-4 w-4" />
        <span class="sr-only">Close</span>
      </DialogClose>
    </KDialog.Content>
  )
}

const DialogHeader = (props: JSX.HTMLAttributes<HTMLDivElement>) => {
  const [local, others] = splitProps(props, ["class"])
  return (
    <div
      class={cn(
        "flex flex-col space-y-1.5 text-center sm:text-left",
        local.class
      )}
      {...others}
    />
  )
}

const DialogFooter = (props: JSX.HTMLAttributes<HTMLDivElement>) => {
  const [local, others] = splitProps(props, ["class"])
  return (
    <div
      class={cn(
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
        local.class
      )}
      {...others}
    />
  )
}

const DialogTitle = (props: JSX.HTMLAttributes<HTMLHeadingElement>) => {
  const [local, others] = splitProps(props, ["class"])
  return (
    <KDialog.Title
      class={cn(
        "text-lg font-semibold leading-none tracking-tight",
        local.class
      )}
      {...others}
    />
  )
}

const DialogDescription = (props: JSX.HTMLAttributes<HTMLParagraphElement>) => {
  const [local, others] = splitProps(props, ["class"])
  return (
    <KDialog.Description
      class={cn("text-sm text-muted-foreground", local.class)}
      {...others}
    />
  )
}

interface DialogCloseProps
  extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {}

const DialogClose = (props: DialogCloseProps) => {
  const [local, others] = splitProps(props, ["class"])
  return (
    <KDialog.CloseButton
      class={cn(
        "rounded-sm ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[expanded]:bg-accent data-[expanded]:text-muted-foreground",
        local.class
      )}
      {...others}
    />
  )
}

export {
  Dialog,
  DialogTrigger,
  DialogOverlay,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
}
