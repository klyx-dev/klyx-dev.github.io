import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Klyx — Modern code editor for Android",
  description:
    "A lightweight, high-performance code editor for Android. Built with Jetpack Compose and Material 3 Expressive. Features syntax highlighting, built-in terminal, and full project management.",
  openGraph: {
    title: "Klyx — Modern code editor for Android",
    description:
      "A lightweight, high-performance code editor for Android with syntax highlighting, terminal, and project management.",
    url: "https://klyx.dev",
    siteName: "Klyx",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Klyx — Modern code editor for Android",
    description:
      "A lightweight, high-performance code editor for Android with syntax highlighting, terminal, and project management.",
  },
  keywords: [
    "code editor",
    "android",
    "klyx",
    "text editor",
    "programming",
    "jetpack compose",
    "material 3",
    "open source",
  ],
  robots: { index: true, follow: true },
  icons: {
    icon: "/klyx-logo.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
