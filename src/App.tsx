import { SiteHeader } from '@/components/SiteHeader/SiteHeader'
import { Footer } from '@/components/Footer/Footer'
import { Hero } from '@/sections/hero/Hero'
import { QuienEs } from '@/sections/quien-es/QuienEs'
import { Trayectoria } from '@/sections/trayectoria/Trayectoria'
import { LoQueMeMueve } from '@/sections/lo-que-me-mueve/LoQueMeMueve'
import { ModeloDeGestion } from '@/sections/modelo-de-gestion/ModeloDeGestion'
import { EjesParaLaMolina } from '@/sections/ejes-para-la-molina/EjesParaLaMolina'
import { EscucharParaDecidir } from '@/sections/escuchar-para-decidir/EscucharParaDecidir'
import { Articulos } from '@/sections/articulos/Articulos'
import { LaMolinaAdelante } from '@/sections/la-molina-adelante/LaMolinaAdelante'

/**
 * El orden de las secciones es el guion de la landing:
 * quién soy → de dónde vengo → por qué → cómo → qué → sumate.
 *
 * Agregar una sección = crear src/sections/<nombre>/ y sumarla acá.
 */
export default function App() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <QuienEs />
        <Trayectoria />
        <LoQueMeMueve />
        <ModeloDeGestion />
        <EjesParaLaMolina />
        <EscucharParaDecidir />
        <Articulos />
        <LaMolinaAdelante />
      </main>
      <Footer />
    </>
  )
}
