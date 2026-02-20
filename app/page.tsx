import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProductsGrid } from "@/components/products-grid"
import { AboutSection } from "@/components/about-section"
import { ShippingSection } from "@/components/shipping-section"
import { Footer } from "@/components/footer"

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
