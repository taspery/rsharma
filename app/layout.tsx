import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://rsmakes.com"),
  title: {
    default: "Ryan Sharma",
    template: "%s | Ryan Sharma",
  },
  description:
    "Quality electronic components for hobbyists, students, and makers. Arduino, Raspberry Pi, sensors, and DIY kits shipped Australia-wide from Sydney.",
  keywords: [
    "Arduino Australia",
    "Raspberry Pi Australia",
    "electronics components",
    "maker supplies",
    "DIY electronics",
    "sensors",
    "ESP32",
    "Seven Hills NSW",
  ],
  authors: [{ name: "Ryan Sharma" }],
  creator: "Ryan Sharma",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "/",
    title: "Ryan Sharma",
    description:
      "Ryan Sharma — maker, developer, and builder.",
    siteName: "Ryan Sharma",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f9fa" },
    { media: "(prefers-color-scheme: dark)", color: "#141a1f" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-AU" suppressHydrationWarning className={`${geist.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true} storageKey="rs-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
