"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useLanguage } from "../lib/language-context"
import LanguageSwitcher from "../components/language-switcher"
import Image from "next/image"

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
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center">
          <div className="relative w-24 h-24">
            <Image
              src="/LogoDentalClinic.jpg"
              alt="Logo Dental Clinic"
              fill
              className="object-contain rounded-md"
              priority
            />
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-foreground hover:text-accent transition-colors text-sm font-medium"
            >
              {item.label}
            </Link>
          ))}
          <LanguageSwitcher />
          <a
            href="https://wa.me/3135970092"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-accent-foreground px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            {t("header.whatsapp")}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-border md:hidden">
            <div className="flex flex-col p-4 gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-accent transition-colors text-sm font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <LanguageSwitcher />
              <a
                href="https://wa.me/573135970092"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-accent-foreground px-5 py-2 rounded-full text-sm font-semibold text-center"
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
