import { Package, Zap, Phone } from "lucide-react"

const highlights = [
  {
    icon: Package,
    title: "Hand-Picked Stock",
    description: "Every component in the catalogue has been tested and vetted. No mystery clones or dead-on-arrival parts.",
  },
  {
    icon: Zap,
    title: "Fast Dispatch",
    description: "Orders are dispatched within 1-2 business days from our warehouse in Seven Hills, NSW.",
  },
  {
    icon: Phone,
    title: "Real Support",
    description: "Got questions before you buy? Call or email. Ryan personally answers every enquiry.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="border-t border-border/30 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left - Story */}
          <div className="space-y-6 animate-fade-in-up">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">About</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
              Started by a maker, for makers
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                {"Ryan Sharma is a Sydney-based electronics enthusiast who started this store out of frustration with slow international shipping and low-quality clones. After one too many dead sensors and month-long waits, he decided to stock the gear locally and do it properly."}
              </p>
              <p>
                {"Every product in the catalogue is something Ryan has used himself or would happily recommend to a mate. Whether you're building your first LED circuit or wiring up a smart home, you'll find honest descriptions and fair prices."}
              </p>
              <p>
                {"Need help choosing a board or sensor for your project? Give Ryan a call — he's always happy to chat through your build before you buy."}
              </p>
            </div>
          </div>

          {/* Right - Highlights */}
          <div className="space-y-5 animate-fade-in-up stagger-2">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="flex gap-5 rounded-xl border border-border bg-card/50 p-5 sm:p-6 transition-colors hover:bg-card"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-sm font-semibold">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
