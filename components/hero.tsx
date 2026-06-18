import Image from "next/image"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b">
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8 lg:pb-32 lg:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <a
            href="https://github.com/klyx-dev/klyx"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-6 inline-flex items-center gap-1.5 rounded-full border bg-muted/50 px-3.5 py-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <svg viewBox="0 0 24 24" className="size-3.5" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span className="font-medium">v4.1.0</span>
            <span className="opacity-50">&mdash;</span>
            <span>Open source under GPL-3.0</span>
          </a>
          <h1 className="text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
            A modern code editor
            <br />
            <span className="text-primary">for Android</span>
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg sm:leading-relaxed">
            Klyx is a lightweight, high-performance code editor crafted with
            Jetpack Compose and Material 3 Expressive. Write, edit, and manage
            your code on the go.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href="https://github.com/klyx-dev/klyx/releases"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="gap-2">
                Download
                <ArrowRight className="size-4" />
              </Button>
            </a>
            <a
              href="https://github.com/klyx-dev/klyx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="gap-2">
                <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                Source code
              </Button>
            </a>
          </div>
        </div>

        <div className="mt-14 flex justify-center sm:mt-16 lg:mt-20">
          <div className="relative">
            <div className="absolute -inset-x-8 -inset-y-4 rounded-2xl border bg-card/50 shadow-2xs" />
            <Image
              src="/screenshot_1.jpg"
              alt="Klyx code editor screenshot"
              width={720}
              height={1612}
              className="relative mx-auto block h-auto max-w-[320px] rounded-xl border shadow-xs sm:max-w-[360px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
