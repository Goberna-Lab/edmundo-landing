import { footerContent } from './footer.content'
import type { Red } from './footer.content'
import './Footer.css'

const { marca, columnas, enlacesMobile, redes, imagenQr, altQr, subir } =
  footerContent

/** Los íconos van inline: el sprite de public/icons.svg es de temas, no de redes. */
const iconos: Record<Red, { nombre: string; path: string }> = {
  facebook: {
    nombre: 'Facebook',
    path: 'M9.2 16V9.3h2.3l.3-2.6H9.2V5c0-.8.2-1.3 1.3-1.3h1.4V1.4C11.6 1.4 10.8 1.3 9.9 1.3 8 1.3 6.7 2.5 6.7 4.7v2H4.4v2.6h2.3V16z',
  },
  instagram: {
    nombre: 'Instagram',
    path: 'M8 1.4c2.1 0 2.4 0 3.3.1.8 0 1.2.2 1.5.3.4.1.7.3 1 .6.3.3.4.6.6 1 .1.3.2.7.3 1.5 0 .9.1 1.1.1 3.3s0 2.4-.1 3.3c0 .8-.2 1.2-.3 1.5-.1.4-.3.7-.6 1-.3.3-.6.4-1 .6-.3.1-.7.2-1.5.3-.9 0-1.1.1-3.3.1s-2.4 0-3.3-.1c-.8 0-1.2-.2-1.5-.3-.4-.1-.7-.3-1-.6-.3-.3-.4-.6-.6-1-.1-.3-.2-.7-.3-1.5 0-.9-.1-1.1-.1-3.3s0-2.4.1-3.3c0-.8.2-1.2.3-1.5.1-.4.3-.7.6-1 .3-.3.6-.4 1-.6.3-.1.7-.2 1.5-.3.9 0 1.2-.1 3.3-.1M8 0C5.8 0 5.5 0 4.7.1c-.9 0-1.5.2-2 .4-.5.2-1 .5-1.4 1-.5.4-.8.9-1 1.4-.2.5-.4 1.1-.4 2C0 5.5 0 5.8 0 8s0 2.5.1 3.3c0 .9.2 1.5.4 2 .2.5.5 1 1 1.4.4.5.9.8 1.4 1 .5.2 1.1.4 2 .4.8.1 1.1.1 3.3.1s2.5 0 3.3-.1c.9 0 1.5-.2 2-.4.5-.2 1-.5 1.4-1 .5-.4.8-.9 1-1.4.2-.5.4-1.1.4-2 .1-.8.1-1.1.1-3.3s0-2.5-.1-3.3c0-.9-.2-1.5-.4-2-.2-.5-.5-1-1-1.4-.4-.5-.9-.8-1.4-1-.5-.2-1.1-.4-2-.4C10.5 0 10.2 0 8 0m0 3.9a4.1 4.1 0 1 0 0 8.2 4.1 4.1 0 0 0 0-8.2m0 6.8a2.7 2.7 0 1 1 0-5.4 2.7 2.7 0 0 1 0 5.4m5.2-7a1 1 0 1 1-1.9 0 1 1 0 0 1 1.9 0',
  },
  x: {
    nombre: 'X',
    path: 'M9.5 6.8 15.4 0h-1.4L8.9 5.9 4.8 0H0l6.2 9L0 16h1.4l5.4-6.3L11.2 16H16zM7.5 8.9l-.6-.9L1.9 1h2.2l4 5.7.6.9 5.2 7.4h-2.1z',
  },
  tiktok: {
    nombre: 'TikTok',
    path: 'M11.4 0h-2.6v10.6a2 2 0 1 1-1.5-2v-2.6a4.6 4.6 0 1 0 4.1 4.6V5.3A5.7 5.7 0 0 0 14.7 6V3.4a3.3 3.3 0 0 1-3.3-3.4',
  },
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__bloque-marca">
          <p className="footer__marca">
            <span className="footer__marca-linea1">{marca.linea1}</span>
            <span className="footer__marca-linea2">{marca.linea2}</span>
          </p>
        </div>

        {columnas.map((columna) => (
          <nav
            className="footer__columna"
            aria-label={columna.etiqueta}
            key={columna.etiqueta}
          >
            <h2 className="footer__columna-titulo">{columna.titulo}</h2>
            <ul>
              {columna.enlaces.map((enlace) => (
                <li key={enlace.href}>
                  <a href={enlace.href}>{enlace.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        {/*
          Mobile: una sola lista centrada de secciones, sin título. Reemplaza a
          las columnas de arriba (se ocultan por CSS bajo el breakpoint mobile).
        */}
        <nav className="footer__nav-mobile" aria-label="Secciones del sitio">
          <ul>
            {enlacesMobile.map((enlace) => (
              <li key={enlace.href}>
                <a href={enlace.href}>{enlace.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="footer__redes">
          {redes.map(({ red, handle, href }) => (
            <li key={red}>
              <a href={href} target="_blank" rel="noopener">
                <span className="footer__red-icono">
                  <svg viewBox="0 0 16 16" aria-hidden="true">
                    <path d={iconos[red].path} fill="currentColor" />
                  </svg>
                </span>
                <span className="footer__red-handle">
                  <span className="sr-only">{iconos[red].nombre}: </span>
                  {handle}
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/*
          Mientras sea un [[placeholder]] va un cuadro vacío y no un <img>:
          apuntar el src a "[[imagen-qr]]" pide una imagen que no existe y
          deja el ícono de rota. Vacío es justo lo que muestra el Figma.
        */}
        {imagenQr.startsWith('[[') ? (
          <div className="footer__qr" aria-hidden="true" />
        ) : (
          <img className="footer__qr" src={imagenQr} alt={altQr} loading="lazy" />
        )}

        <a className="footer__subir" href="#top">
          <span className="sr-only">{subir}</span>
          <svg viewBox="0 0 8 10" aria-hidden="true">
            <path
              d="M4 9.5V1M1 4l3-3 3 3"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

      </div>
    </footer>
  )
}
