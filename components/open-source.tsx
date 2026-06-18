import { Shield, Code, Star, GitBranch } from "lucide-react"
import { Button } from "@/components/ui/button"

export function OpenSource() {
  return (
    <section id="open-source" className="border-b py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center justify-center gap-2 rounded-full border bg-muted/50 px-3.5 py-1 text-xs text-muted-foreground">
            <Shield className="size-3.5" />
            GPL-3.0 Licensed
          </div>
          <h2 className="mt-4 text-2xl font-medium tracking-tight sm:text-3xl">
            Open source, built in public
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Klyx is free and open source software. Built with Kotlin, Jetpack
            Compose, and Tree-sitter. Contributions, issues, and stars are
            welcome.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href="https://github.com/klyx-dev/klyx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="gap-2" size="lg">
                <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                View on GitHub
              </Button>
            </a>
            <a
              href="https://github.com/klyx-dev/klyx/stargazers"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="gap-2">
                <Star className="size-4" />
                Star the repo
              </Button>
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border bg-border sm:grid-cols-3">
          {[
            {
              icon: Code,
              label: "Built with",
              value: "Kotlin + Jetpack Compose",
            },
            {
              icon: GitBranch,
              label: "License",
              value: "GNU General Public License v3.0",
            },
            {
              icon: Star,
              label: "Contributions",
              value: "Welcome from everyone",
            },
          ].map((item) => {
            const Icon = item.icon
            return (
              <div key={item.label} className="bg-background p-6 text-center">
                <Icon className="mx-auto size-5 text-primary" />
                <p className="mt-2 text-xs text-muted-foreground">
                  {item.label}
                </p>
                <p className="mt-0.5 text-sm font-medium">{item.value}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
