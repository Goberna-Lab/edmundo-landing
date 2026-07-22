import { Header } from '@goberna/landing-kit'
import { headerContent } from './header.content'
import './SiteHeader.css'

/**
 * El comportamiento (menú mobile, ARIA, scroll-spy) sale del kit.
 * Acá solo va lo propio de esta landing: la marca, el contenido y el CSS.
 */
export function SiteHeader() {
  return (
    <Header
      nav={headerContent.nav}
      brandHref="#hero"
      brandLabel={`${headerContent.marca.linea1} ${headerContent.marca.linea2}`}
      scrollSpy
      elevateOnScroll
      logo={
        // Marca tipográfica, no imagen: se ve nítida en cualquier pantalla y
        // usa la Open Sans que ya carga la página.
        <span className="marca">
          <span className="marca__linea1">{headerContent.marca.linea1}</span>
          <span className="marca__linea2">{headerContent.marca.linea2}</span>
        </span>
      }
    />
  )
}
