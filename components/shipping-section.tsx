import { Truck, Clock, RotateCcw, MapPin } from "lucide-react"

const shippingFeatures = [
  {
    icon: Truck,
    title: "Australia Post",
    description: "All orders shipped via Australia Post with tracking provided.",
  },
  {
    icon: Clock,
    title: "1-2 Business Days",
    description: "Orders placed before 2pm AEST are dispatched same day. Otherwise, next business day.",
  },
  {
    icon: MapPin,
    title: "Shipped from Sydney",
    description: "All stock ships from our warehouse in Seven Hills, NSW 2147.",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "Faulty item? We'll replace it or refund you. No hassle, no runaround.",
  },
]

export function ShippingSection() {
  return (
    <section id="shipping" className="border-t border-border/30 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 space-y-2 sm:mb-14 animate-fade-in-up">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Delivery</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Shipping & Returns</h2>
          <p className="max-w-lg text-muted-foreground">
            Fast, reliable delivery across Australia. Every order is packed with care and dispatched from Sydney.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 animate-fade-in-up stagger-2">
          {shippingFeatures.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-border bg-card/50 p-5 sm:p-6 transition-colors hover:bg-card hover:border-primary/30"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-1.5 text-sm font-semibold">{feature.title}</h3>
              <p className="text-xs leading-relaxed text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
