"use client"

import { useState } from "react"
import { useLanguage } from "../context/LanguageContext"

export default function Cases() {
  const [hoveredCase, setHoveredCase] = useState(null)
  const { t } = useLanguage()

  const cases = t("cases.items").map((item, index) => ({
    id: index + 1,
    title: item.title,
    description: item.description,
    before: [
      "/dental-before-implant.jpg",
      "/teeth-before-whitening.jpg",
      "/teeth-before-orthodontics.jpg",
      "/dental-before-restoration.jpg",
    ][index],
    after: [
      "/dental-after-implant.jpg",
      "/teeth-after-whitening.jpg",
      "/teeth-after-orthodontics.jpg",
      "/dental-after-restoration.jpg",
    ][index],
  }))

  return (
    <section id="cases" className="w-full py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{t("cases.title")}</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">{t("cases.description")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((caseItem) => (
            <div
              key={caseItem.id}
              className="group"
              onMouseEnter={() => setHoveredCase(caseItem.id)}
              onMouseLeave={() => setHoveredCase(null)}
            >
              <div className="relative rounded-lg overflow-hidden mb-4 h-64 bg-muted">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src={caseItem.before || "/placeholder.svg"}
                      alt="Before"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div
                    className={`absolute inset-0 overflow-hidden transition-all duration-500 ${
                      hoveredCase === caseItem.id ? "w-full" : "w-1/2"
                    }`}
                  >
                    <img
                      src={caseItem.after || "/placeholder.svg"}
                      alt="After"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div
                    className={`absolute top-0 bottom-0 w-1 bg-accent transition-all duration-500 ${
                      hoveredCase === caseItem.id ? "right-0" : "right-1/2"
                    }`}
                  />

                  <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {t("cases.before")}
                  </div>
                  <div
                    className={`absolute top-4 right-4 bg-accent text-foreground px-3 py-1 rounded-full text-sm font-semibold transition-opacity duration-500 ${
                      hoveredCase === caseItem.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {t("cases.after")}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-foreground mb-1">{caseItem.title}</h3>
                <p className="text-sm text-foreground/60">{caseItem.description}</p>
              </div>
            </div>
          ))}
        </div>

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
