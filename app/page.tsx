import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { TerminalShowcase } from "@/components/terminal-showcase"
import { OpenSource } from "@/components/open-source"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="flex min-h-svh flex-col">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <TerminalShowcase />
        <OpenSource />
      </main>
      <Footer />
    </div>
  )
}
