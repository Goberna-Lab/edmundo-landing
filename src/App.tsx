import { SiteHeader } from '@/components/SiteHeader/SiteHeader'
import { Footer } from '@/components/Footer/Footer'
import { Hero } from '@/sections/hero/Hero'
import { Trayectoria } from '@/sections/trayectoria/Trayectoria'
import { Propuestas } from '@/sections/propuestas/Propuestas'
import { Contacto } from '@/sections/contacto/Contacto'

/**
 * El orden de las secciones es el guion de la landing.
 * Agregar una sección = crear src/sections/<nombre>/ y sumarla acá.
 */
export default function App() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Trayectoria />
        <Propuestas />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}
