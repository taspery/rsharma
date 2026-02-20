"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { products, categories, type Category } from "@/lib/products"
import { Check } from "lucide-react"

export function ProductsGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>("All Products")

  const filteredProducts =
    activeCategory === "All Products" ? products : products.filter((p) => p.category === activeCategory)

  return (
    <section id="products" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-10 flex flex-col gap-6 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2 animate-fade-in-up">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">Catalogue</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Products</h2>
            <p className="max-w-md text-muted-foreground">
              Hand-picked components for hobbyists, students, and makers. Every item tested and trusted.
            </p>
          </div>
        </div>

        {/* Category filters */}
        <div className="mb-8 flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:overflow-visible scrollbar-hide animate-fade-in-up stagger-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "shrink-0 rounded-lg border px-4 py-2.5 text-xs font-medium transition-all active:scale-[0.98]",
                activeCategory === cat
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground hover:bg-secondary/50",
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product, index) => (
            <article
              key={product.id}
              className={cn(
                "group relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/40 hover-lift animate-fade-in-up",
              )}
              style={{ animationDelay: `${(index % 8) * 80 + 100}ms` }}
            >
              {/* Product image */}
              <div className="relative aspect-square overflow-hidden bg-secondary/30">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {product.featured && (
                  <div className="absolute left-3 top-3 rounded-md bg-accent px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-accent-foreground">
                    Popular
                  </div>
                )}
              </div>

              {/* Product details */}
              <div className="p-4 sm:p-5">
                <p className="mb-1.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  {product.category}
                </p>
                <h3 className="mb-2 text-sm font-semibold leading-snug tracking-tight sm:text-base">
                  {product.name}
                </h3>
                <p className="mb-4 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold tracking-tight">
                    ${product.price.toFixed(2)}
                    <span className="ml-1 text-xs font-normal text-muted-foreground">AUD</span>
                  </span>
                  <span className="flex items-center gap-1 text-xs text-success">
                    <Check className="h-3.5 w-3.5" />
                    In Stock
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-muted-foreground">No products in this category yet. Check back soon!</p>
          </div>
        )}
      </div>
    </section>
  )
}
