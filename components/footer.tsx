"use client"

import { Facebook, Instagram } from "lucide-react"
import { useLanguage } from "../lib/language-context"

export default function Footer() {
  const { t } = useLanguage()

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/share/1FjNhcbVJt/?mibextid=wwXIfr", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/dentalclinic.10/", label: "Instagram" }
  ]

  return (
    <footer className="w-full bg-foreground text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <h3 className="font-bold text-lg">Dental Clinic10</h3>
            </div>
            <p className="text-sm text-white/60">{t("footer.tagline")}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.links")}</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  {t("header.services")}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-accent transition-colors">
                  {t("header.about")}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">
                  {t("header.contact")}
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.services")}</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  {t("footer.cleaningDental")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  {t("footer.implants")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  {t("footer.orthodontics")}
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.follow")}</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="bg-white/10 p-2 rounded-lg hover:bg-accent hover:text-foreground transition-all duration-300"
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>{t("footer.copyright")}</p>
            <div className="flex gap-6">
              <a href="./privacidad" className="hover:text-accent transition-colors">
                {t("footer.privacy")}
              </a>
              <a href="./terminos" className="hover:text-accent transition-colors">
                {t("footer.terms")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
