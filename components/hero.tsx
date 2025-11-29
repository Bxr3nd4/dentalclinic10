"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "../lib/language-context"

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="hero"
      className="w-full bg-linear-to-br from-primary to-primary/90 text-white py-20 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">
                {t("hero.badge")}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-balance">
              {t("hero.title")}
            </h1>

            <p className="text-lg text-white/80">{t("hero.description")}</p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://wa.me/3135970092"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
              >
                {t("hero.ctaContact")}
                <ArrowRight size={18} />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition-colors border border-white/20"
              >
                {t("hero.ctaServices")}
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden md:flex justify-center">
            <div className="relative w-full max-w-md aspect-square bg-white/10 rounded-2xl border-2 border-white/20 overflow-hidden">
              <Image
                src="/dental-office.jpeg"
                alt={t("hero.imageAlt")}
                fill
                className="object-cover rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}