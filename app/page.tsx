"use client"

import { LanguageProvider } from "../lib/language-context"
import Header from "../components/header"
import Hero from "../components/hero"
import Services from "../components/services"
import About from "../components/about"
import Cases from "../components/cases"
import Contact from "../components/contact"
import Footer from "../components/footer"

export default function Home() {
  return (
    <LanguageProvider>
      <main className="w-full">
        <Header />
        <Hero />
        <Services />
        <About />
        <Cases />
        <Contact />
        <Footer />
      </main>
    </LanguageProvider>
  )
}
