import { Terminal } from "lucide-react"

export function TerminalShowcase() {
  return (
    <section id="terminal" className="border-b py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="flex size-10 items-center justify-center rounded-lg border bg-muted/50">
              <Terminal className="size-5 text-primary" />
            </div>
            <h2 className="mt-4 text-2xl font-medium tracking-tight sm:text-3xl">
              Full terminal, right in your pocket
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              A complete terminal emulator built directly into the app. Run
              shells, scripts, and commands with multiple session support,
              customizable themes, and extra keys for mobile convenience.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Multiple terminal sessions",
                "Extra keys bar for common characters",
                "Customizable terminal themes",
                "Foreground service for persistent sessions",
                "Notification integration",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm">
                  <span className="mt-0.5 block size-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-x-4 -inset-y-4 rounded-2xl border bg-card/50 shadow-2xs" />
            <div className="relative overflow-hidden rounded-xl border bg-[#0d1117] p-4 shadow-xs sm:p-5">
              <div className="mb-3 flex items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-red-500" />
                <span className="size-2.5 rounded-full bg-yellow-500" />
                <span className="size-2.5 rounded-full bg-green-500" />
                <span className="ml-2 text-xs text-zinc-500">terminal</span>
              </div>
              <pre className="overflow-x-auto text-xs leading-relaxed text-zinc-300 sm:text-sm">
                <code>
                  <span className="text-green-400">klyx@device</span>
                  <span className="text-zinc-500">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-zinc-500">$</span> neofetch
                  <br />
                  <span className="text-zinc-500">OS:</span> KlyxOS 4.1.0
                  arm64
                  <br />
                  <span className="text-zinc-500">Host:</span>{" "}
                  Google Pixel 9 Pro
                  <br />
                  <span className="text-zinc-500">Kernel:</span>{" "}
                  Linux 6.x-android
                  <br />
                  <span className="text-zinc-500">Shell:</span> bash 5.2.37
                  <br />
                  <span className="text-green-400">klyx@device</span>
                  <span className="text-zinc-500">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-zinc-500">$</span>{" "}
                  <span className="animate-pulse">▊</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
