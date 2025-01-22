import {
  createContext,
  createEffect,
  createSignal,
  ParentComponent,
  useContext,
} from "solid-js"

type Theme = "dark" | "light" | "system"

const ThemeContext = createContext({
  theme: "system" as Theme,
  toggleTheme: () => {},
})

export const ThemeProvider: ParentComponent = (props) => {
  const initialTheme = (localStorage.getItem("theme") as Theme) || "system"
  const [theme, setTheme] = createSignal<Theme>(initialTheme)
  const [systemTheme, setSystemTheme] = createSignal(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  )

  // Watch for system theme changes
  createEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handler = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? "dark" : "light")
    }

    mediaQuery.addEventListener("change", handler)
    return () => mediaQuery.removeEventListener("change", handler)
  })

  // Apply theme changes
  createEffect(() => {
    const currentTheme = theme()
    const effectiveTheme =
      currentTheme === "system" ? systemTheme() : currentTheme

    document.documentElement.classList.remove("light", "dark")
    document.documentElement.classList.add(effectiveTheme)
    localStorage.setItem("theme", currentTheme)
  })

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"))
  }

  return (
    <ThemeContext.Provider value={{ theme: theme(), toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
