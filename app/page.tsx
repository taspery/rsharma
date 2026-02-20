import type { Metadata } from "next"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProductsGrid } from "@/components/products-grid"
import { AboutSection } from "@/components/about-section"
import { ShippingSection } from "@/components/shipping-section"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Arduino, Raspberry Pi & Electronics Components — Australia",
  description:
    "Quality electronic components for hobbyists, students, and makers. Arduino, Raspberry Pi, ESP32, sensors, and DIY kits shipped Australia-wide from Sydney.",
  openGraph: {
    title: "Arduino, Raspberry Pi & Electronics Components — Ryan Sharma",
    description:
      "Quality electronic components for hobbyists, students, and makers. Arduino, Raspberry Pi, ESP32, sensors, and DIY kits shipped Australia-wide from Sydney.",
    url: "https://rsmakes.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arduino, Raspberry Pi & Electronics Components — Ryan Sharma",
    description:
      "Quality electronic components for hobbyists, students, and makers. Arduino, Raspberry Pi, ESP32, sensors, and DIY kits shipped Australia-wide from Sydney.",
  },
  alternates: {
    canonical: "https://rsmakes.com",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ProductsGrid />
      <AboutSection />
      <ShippingSection />
      <Footer />
    </main>
  )
}
