import { lazy } from "solid-js"
import type { Component } from "solid-js"

import accordionCode from "@/components/ui/accordion.tsx?raw"
import buttonCode from "@/components/ui/button.tsx?raw"
import cardCode from "@/components/ui/card.tsx?raw"
import dialogCode from "@/components/ui/dialog.tsx?raw"
import popoverCode from "@/components/ui/popover.tsx?raw"
import tooltipCode from "@/components/ui/tooltip.tsx?raw"

export interface ComponentExample {
  name: string
  component: Component
  code: string
  description: string
  category:
    | "inputs"
    | "data-display"
    | "navigation"
    | "feedback"
    | "layout"
    | "overlay"
}

export const components: Record<string, ComponentExample> = {
  accordion: {
    name: "Accordion",
    component: lazy(() => import("@/pages/example-accordion")),
    code: accordionCode,
    description:
      "A vertically stacked set of interactive headings that each reveal a section of content.",
    category: "data-display",
  },
  button: {
    name: "Button",
    component: lazy(() => import("@/pages/example-button")),
    code: buttonCode,
    description: "Displays a button or a component that looks like a button.",
    category: "inputs",
  },
  dialog: {
    name: "Dialog",
    component: lazy(() => import("@/pages/example-dialog")),
    code: dialogCode,
    description:
      "A modal dialog that interrupts the user with important content.",
    category: "overlay",
  },
  card: {
    name: "Card",
    component: lazy(() => import("@/pages/example-card")),
    code: cardCode,
    description: "Displays a card with header, content, and footer.",
    category: "data-display",
  },
  tooltip: {
    name: "Tooltip",
    component: lazy(() => import("@/pages/example-tooltip")),
    code: tooltipCode,
    description:
      "A popup that displays information related to an element when it receives keyboard focus or mouse hover.",
    category: "overlay",
  },
  popover: {
    name: "Popover",
    component: lazy(() => import("@/pages/example-popover")),
    code: popoverCode,
    description: "Displays floating content in relation to a target element.",
    category: "overlay",
  },
}

export type ComponentKey = keyof typeof components
