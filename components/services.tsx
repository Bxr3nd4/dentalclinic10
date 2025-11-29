"use client"

import { Smile, Sparkles, Shield, Heart } from "lucide-react"
import { useLanguage } from "../lib/language-context"

export default function Services() {
  const { t } = useLanguage()

  const services = t("services.items").map((item: any, index: number) => ({
    id: index + 1,
    title: item.title,
    description: item.description,
    icon: [Sparkles, Smile, Heart, Shield][index],
  }))

  return (
    <section id="services" className="w-full py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">{t("services.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("services.description")}</p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service: any) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className="bg-white rounded-lg p-6 shadow-sm border border-border hover:shadow-md hover:border-accent transition-all duration-300"
              >
                <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-accent" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
