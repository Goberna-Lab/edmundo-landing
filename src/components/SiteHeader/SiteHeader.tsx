import { Header } from '@goberna/landing-kit'
import { headerContent } from './header.content'
import logo from '@/assets/logo.svg'
import './SiteHeader.css'

/**
 * El comportamiento (menú mobile, ARIA, scroll-spy) sale del kit.
 * Acá solo va lo propio de esta landing: el logo, el contenido y el CSS.
 */
export function SiteHeader() {
  return (
    <Header
      nav={headerContent.nav}
      logo={<img className="header__logo" src={logo} alt="" width="180" height="40" />}
      brandLabel={headerContent.candidato}
      scrollSpy
      elevateOnScroll
      cta={
        <a className="btn btn--primario" href={headerContent.cta.href}>
          {headerContent.cta.label}
        </a>
      }
    />
  )
}
