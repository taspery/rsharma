import { Phone, Mail, MapPin } from "lucide-react"
import { LogoFull } from "./logo"

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border/30 bg-secondary/30 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 sm:gap-16 lg:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <LogoFull height={36} />
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              {"Australia's independent supplier for quality electronic components and maker hardware. Shipped from Sydney with care."}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <nav className="flex flex-col gap-2.5">
              {[
                { label: "Products", href: "#products" },
                { label: "About Ryan", href: "#about" },
                { label: "Shipping & Returns", href: "#shipping" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Get in Touch</h3>
            <div className="space-y-3">
              <a
                href="tel:0400213791"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Phone className="h-4 w-4 text-primary" />
                0400 213 791
              </a>
              <a
                href="mailto:ryan@rsmakes.com"
                className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4 text-primary" />
                ryan@rsmakes.com
              </a>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                <span>Seven Hills, NSW 2147<br />Australia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/30 pt-8 sm:flex-row">
          <p className="font-mono text-xs text-muted-foreground">
            {"(c)"} {new Date().getFullYear()} Ryan Sharma. ABN 66 541 514 017.
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            All prices in AUD. Shipping Australia-wide.
          </p>
        </div>
      </div>
    </footer>
  )
}
