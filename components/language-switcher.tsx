"use client"

import { useLanguage } from "../lib/language-context"
import { Globe } from "lucide-react"

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-2">
      <Globe size={18} className="text-accent" />
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as "es" | "en")}
        className="bg-transparent text-foreground text-sm font-medium border border-border rounded-md px-3 py-1 cursor-pointer hover:border-accent transition-colors"
      >
        <option value="es">Español</option>
        <option value="en">English</option>
      </select>
    </div>
  )
}
