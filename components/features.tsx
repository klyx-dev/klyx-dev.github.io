import {
  Code,
  Terminal,
  FolderTree,
  Palette,
  Image,
  Copy,
} from "lucide-react"

const features = [
  {
    icon: Code,
    title: "Syntax highlighting",
    description:
      "Tree-sitter-powered syntax highlighting for 12+ languages including Python, JavaScript, TypeScript, Java, Kotlin, C, C++, CSS, HTML, Rust, and more.",
  },
  {
    icon: Terminal,
    title: "Built-in terminal",
    description:
      "Full terminal emulator with session management, extra keys bar, themes, and foreground service support for long-running tasks.",
  },
  {
    icon: FolderTree,
    title: "File explorer",
    description:
      "Browse, create, rename, delete, copy, cut, and paste files and directories. Open projects with Storage Access Framework.",
  },
  {
    icon: Copy,
    title: "Multi-tab editing",
    description:
      "Work on multiple files simultaneously with drag-to-switch tabs, close controls, and tab management that mirrors desktop editors.",
  },
  {
    icon: Palette,
    title: "Customizable theme",
    description:
      "Dynamic color support, AMOLED dark mode, light/dark theme toggle, custom fonts, and configurable color schemes.",
  },
  {
    icon: Image,
    title: "Image viewer",
    description:
      "Built-in image viewer with pinch-to-zoom up to 100x, perfect for viewing design assets and screenshots.",
  },
]

export function Features() {
  return (
    <section id="features" className="border-b py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">
            Everything you need to code on Android
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Klyx packs essential developer tools into a clean, responsive
            interface designed for mobile.
          </p>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="bg-background p-6 sm:p-8"
              >
                <div className="flex size-10 items-center justify-center rounded-lg border bg-muted/50">
                  <Icon className="size-5 text-primary" />
                </div>
                <h3 className="mt-4 text-sm font-medium">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
