"use client"

import { useLanguage } from "../context/LanguageContext"

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex gap-2">
      <button
        onClick={() => setLanguage("es")}
        className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
          language === "es" ? "bg-accent text-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"
        }`}
      >
        ES
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
          language === "en" ? "bg-accent text-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"
        }`}
      >
        EN
      </button>
    </div>
  )
}
