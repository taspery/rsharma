import Image from "next/image"
import { Truck, ShieldCheck, Headphones } from "lucide-react"

const trustBadges = [
  { icon: Truck, label: "Australia-Wide Shipping" },
  { icon: ShieldCheck, label: "Quality Guaranteed" },
  { icon: Headphones, label: "Real Advice, Real People" },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Hero content */}
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:py-32">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left column */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
              <span className="font-mono text-xs text-primary">Shipping from Sydney</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
              Quality components.{" "}
              <span className="text-primary">Real advice.</span>{" "}
              <span className="text-muted-foreground">Shipped from Sydney.</span>
            </h1>

            <p className="max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              {"Australia's independent supplier for Arduino, Raspberry Pi, sensors, and maker hardware. Hand-picked by a fellow hobbyist, delivered to your door."}
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 active:scale-[0.98]"
              >
                Browse Products
                <span aria-hidden="true">{"-->"}</span>
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-7 py-3.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                About Ryan
              </a>
            </div>
          </div>

          {/* Right column - hero image */}
          <div className="relative animate-fade-in-up stagger-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-lg">
              <Image
                src="/images/hero-electronics.jpg"
                alt="Electronics maker workbench with Arduino boards, Raspberry Pi, and components"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 rounded-xl border border-border bg-card px-4 py-3 shadow-lg sm:-bottom-6 sm:-left-6">
              <p className="font-mono text-xs text-muted-foreground">Dispatched from</p>
              <p className="text-sm font-semibold">Seven Hills, NSW</p>
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6 animate-fade-in-up stagger-3">
          {trustBadges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-4 rounded-xl border border-border bg-card/50 p-4 sm:p-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <badge.icon className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
