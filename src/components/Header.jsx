"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { useLanguage } from "../context/LanguageContext"
import LanguageSwitcher from "./LanguageSwitcher"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  const toggleMenu = () => setIsOpen(!isOpen)

  const navItems = [
    { label: t("header.home"), href: "#hero" },
    { label: t("header.services"), href: "#services" },
    { label: t("header.about"), href: "#about" },
    { label: t("header.contact"), href: "#contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white text-xl font-bold">
            D
          </div>
          <div>
            <h1 className="text-primary font-bold text-lg">Dental</h1>
            <p className="text-xs text-muted-foreground">Clinic</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-foreground hover:text-accent transition-colors text-sm font-medium"
            >
              {item.label}
            </a>
          ))}
          <LanguageSwitcher />
          <a
            href="https://wa.me/34123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-foreground px-6 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            {t("header.whatsapp")}
          </a>
        </div>

        <button className="md:hidden p-2" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-border md:hidden">
            <div className="flex flex-col p-4 gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-accent transition-colors text-sm font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <LanguageSwitcher />
              <a
                href="https://wa.me/34123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-foreground px-6 py-2 rounded-full text-sm font-semibold text-center"
              >
                {t("header.whatsapp")}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
