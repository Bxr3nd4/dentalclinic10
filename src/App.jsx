import { LanguageProvider } from "./context/LanguageContext"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Services from "./components/Services"
import About from "./components/About"
import Cases from "./components/Cases"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
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
