"use client"

import { Phone, MapPin, Mail, Clock } from "lucide-react"
import { useLanguage } from "../lib/language-context"

export default function Contact() {
  const { t } = useLanguage()

  const contactInfo = [
    {
      icon: Phone,
      title: t("contact.phone"),
      value: "+573135970092",
      href: "tel:+573135970092",
    },
    {
      icon: Mail,
      title: t("contact.email"),
      value: "dc10odontologia@gmail.com",
      href: "mailto:dc10odontologia@gmail.com",
    },
    {
      icon: MapPin,
      title: t("contact.location"),
      value: "Calle 10 # 42-45 Consultorio 429",
      href: "https://maps.app.goo.gl/BYum6SDmrGbAJCE39",
    },
    {
      icon: Clock,
      title: t("contact.hours"),
      value: "Lun-Vie 9:00 - 18:00. Sab 9:00 - 14:00",
      href: "#",

    },
  ]

  return (
    <section id="contact" className="w-full py-20 md:py-32 bg-gradient-to-br from-primary to-primary/90 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{t("contact.title")}</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">{t("contact.description")}</p>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((item) => {
            const Icon = item.icon
            return (
              <a
                key={item.title}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 text-center"
              >
                <div className="inline-block bg-accent/20 p-3 rounded-lg mb-4">
                  <Icon className="text-accent" size={24} />
                </div>
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-white/70 break-words">{item.value}</p>
              </a>
            )
          })}
        </div>

        {/* WhatsApp CTA */}
        <div className="text-center">
          <a
            href="https://wa.me/573135970092"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            {t("contact.whatsappCta")}
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.869 1.23l-.545.327v.46l.33 4.692c.036.469-.122.951-.425 1.466l-.62 1.023-.96-2.59a2.365 2.365 0 01-.213-1.82l.658-3.498a9.884 9.884 0 014.684-1.29z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
