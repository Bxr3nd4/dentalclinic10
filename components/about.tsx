"use client"

import { useLanguage } from "../lib/language-context"
import Image from "next/image"

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="w-full py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Grid responsive */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image - visible in all breakpoints */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md aspect-square bg-primary/10 rounded-2xl border-2 border-primary/20 overflow-hidden">
              <Image
                src="/profesional2.jpg"
                alt={t("about.imageAlt")}
                fill
                className="object-cover object-[50%_10%]"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
              {t("about.title")}
            </h2>

            <p className="text-lg text-muted-foreground">
              {t("about.description")}
            </p>

            <div className="space-y-4">

              <Feature
                title={t("about.experience")}
                desc={t("about.experienceDesc")}
              />

              <Feature
                title={t("about.equipment")}
                desc={t("about.equipmentDesc")}
              />

              <Feature
                title={t("about.care")}
                desc={t("about.careDesc")}
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

// Reusable component for features
function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-8 w-8 rounded-md bg-accent text-white font-semibold">
          ✓
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </div>
    </div>
  )
}
