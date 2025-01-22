import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipPortal,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function TooltipExample() {
  return (
    <div class="flex items-center justify-center h-screen">
      <Tooltip openDelay={0}>
        <TooltipTrigger>
          <Button variant="outline">Hover me</Button>
        </TooltipTrigger>
        <TooltipPortal>
          <TooltipContent>
            <p>Add to library</p>
          </TooltipContent>
        </TooltipPortal>
      </Tooltip>
    </div>
  )
}
