import { footerContent } from './footer.content'
import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__marca">{footerContent.candidato}</p>

        <nav className="footer__redes" aria-label="Redes sociales">
          {footerContent.redes.map((red) => (
            <a key={red.label} href={red.href} target="_blank" rel="noopener">
              {red.label}
            </a>
          ))}
        </nav>

        <p className="footer__legal">{footerContent.legal}</p>
      </div>
    </footer>
  )
}
