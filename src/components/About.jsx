"use client"

import { useLanguage } from "../context/LanguageContext"

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="w-full py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="hidden md:flex justify-center">
            <div className="w-full max-w-md aspect-square bg-primary/10 rounded-2xl flex items-center justify-center border-2 border-primary/20">
              <div className="text-center">
                <div className="text-6xl mb-4">👨‍⚕️</div>
                <p className="text-foreground/60 text-sm">{t("about.imageAlt")}</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">{t("about.title")}</h2>

            <p className="text-lg text-muted-foreground">{t("about.description")}</p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-md bg-accent text-foreground font-bold">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{t("about.experience")}</h3>
                  <p className="text-sm text-muted-foreground">{t("about.experienceDesc")}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-md bg-accent text-foreground font-bold">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{t("about.equipment")}</h3>
                  <p className="text-sm text-muted-foreground">{t("about.equipmentDesc")}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-md bg-accent text-foreground font-bold">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{t("about.care")}</h3>
                  <p className="text-sm text-muted-foreground">{t("about.careDesc")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
