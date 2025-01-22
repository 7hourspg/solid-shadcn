import { Route, Router } from "@solidjs/router"

import ComponentsPage from "@/pages/components"
import ComponentPage from "@/pages/components/[slug]"
import ExampleButton from "@/pages/example-button"
import CardExample from "@/pages/example-card"
import Home from "@/pages/home"
import ButtonShowcase from "@/pages/test"

import Layout from "./components/layout"
import { ThemeProvider } from "./components/theme-provider"
import AccordionExample from "./pages/example-accordion"
import DialogExample from "./pages/example-dialog"
import PopoverExample from "./pages/example-popover"
import TooltipExample from "./pages/example-tooltip"
import RenderComp from "./pages/render-comp"

export default function App() {
  return (
    <ThemeProvider>
      <Router root={Layout}>
        <Route path="/" component={Home} />
        <Route path="/components" component={ComponentsPage} />
        <Route path="/components/:slug" component={ComponentPage} />
        <Route path="/button" component={ExampleButton} />
        <Route path="/card" component={CardExample} />
        <Route path="/test" component={ButtonShowcase} />
        <Route path="/dialog" component={DialogExample} />
        <Route path="/accordion" component={AccordionExample} />
        <Route path="/popover" component={PopoverExample} />
        <Route path="/tooltip" component={TooltipExample} />
        <Route path="/hello-world" component={() => <h1>Hello World!</h1>} />
        <Route path="/about" component={() => <h1>About</h1>} />
        <Route path="/:slug" component={RenderComp} />
      </Router>
    </ThemeProvider>
  )
}
