import { Button } from "@/components/ui/button"

export default function ExampleButton() {
  return (
    <div class="flex flex-wrap gap-4 items-center h-screen w-full justify-center">
      <Button>Default Button</Button>
      <Button variant="destructive">Destructive Button</Button>
      <Button variant="outline">Outline Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="ghost">Ghost Button</Button>
      <Button variant="link">Link Button</Button>
      <Button size="sm">Small Button</Button>
      <Button size="lg">Large Button</Button>
      <Button size="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
        <span class="sr-only">Icon</span>
      </Button>
      <Button disabled>Disabled Button</Button>
    </div>
  )
}
