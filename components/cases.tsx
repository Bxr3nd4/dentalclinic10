"use client"

import Image from "next/image"
import { useState } from "react"
import { useLanguage } from "../lib/language-context"

export default function Cases() {
  const [hoveredCase, setHoveredCase] = useState<number | null>(null)
  const { t } = useLanguage()

  const cases = t("cases.items").map((item: any, index: number) => ({
    id: index + 1,
    title: item.title,
    description: item.description,
    before: [
      "/before-dental-implant.jpg",
      "/before-teeth-whitening.jpg",
      "/before-orthodontics.jpg",
      "/before-dental-restoration.jpg",
    ][index],
    after: [
      "/after-dental-implant.jpg",
      "/after-teeth-whitening.jpg",
      "/after-orthodontics.jpg",
      "/after-dental-restoration.jpg",
    ][index],
  }))

  return (
    <section id="cases" className="w-full py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{t("cases.title")}</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">{t("cases.description")}</p>
        </div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((caseItem: any) => (
            <div
              key={caseItem.id}
              className="group"
              onMouseEnter={() => setHoveredCase(caseItem.id)}
              onMouseLeave={() => setHoveredCase(null)}
            >
              {/* Before/After Container */}
              <div className="relative rounded-lg overflow-hidden mb-4 h-64 bg-muted">
                <div className="relative w-full h-full">
                  {/* Before Image */}
                  <div className="absolute inset-0 overflow-hidden">
                    <Image src={caseItem.before || "/placeholder.svg"} alt="Antes" fill className="object-cover" />
                  </div>

                  {/* After Image Overlay */}
                  <div
                    className={`absolute inset-0 overflow-hidden transition-all duration-500 ${
                      hoveredCase === caseItem.id ? "w-full" : "w-1/2"
                    }`}
                  >
                    <Image src={caseItem.after || "/placeholder.svg"} alt="Después" fill className="object-cover" />
                  </div>

                  {/* Divider Line */}
                  <div
                    className={`absolute top-0 bottom-0 w-1 bg-accent transition-all duration-500 ${
                      hoveredCase === caseItem.id ? "right-0" : "right-1/2"
                    }`}
                  />

                  {/* Labels */}
                  <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {t("cases.before")}
                  </div>
                  <div
                    className={`absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold transition-opacity duration-500 ${
                      hoveredCase === caseItem.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {t("cases.after")}
                  </div>
                </div>
              </div>

              {/* Case Info */}
              <div>
                <h3 className="font-semibold text-lg text-foreground mb-1">{caseItem.title}</h3>
                <p className="text-sm text-foreground/60">{caseItem.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-foreground/70 mb-6">{t("cases.question")}</p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary/90 transition-colors"
          >
            {t("cases.cta")}
          </a>
        </div>
      </div>
    </section>
  )
}
