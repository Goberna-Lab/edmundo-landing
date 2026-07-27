import { escucharContent } from './escuchar.content'
// Recorte del nodo 90:39 del Figma, solo para la mesa de 1920: NO es el de
// 1366 más grande, es otra proporción (588×867 contra 474×681).
import central1920 from './assets/central-monitoreo-1920.webp'
import './EscucharParaDecidir.css'

const { titulo, bajada, pasos, compromiso, plazo } = escucharContent

/** De acá para arriba manda el diseño de 1920. Ver EscucharParaDecidir.css. */
const DESKTOP_1920 = '(min-width: 1600px)'

export function EscucharParaDecidir() {
  return (
    <section className="escuchar" id="escuchar-para-decidir">
      <div className="escuchar__inner">
        <figure className="escuchar__figura">
          <picture>
            <source media={DESKTOP_1920} srcSet={central1920} />
            <img
              src={escucharContent.imagen}
              alt={escucharContent.altImagen}
              width="474"
              height="681"
              loading="lazy"
              decoding="async"
            />
          </picture>
        </figure>

        <div className="escuchar__texto">
          <p className="escuchar__kicker">
            <span>{escucharContent.numero}</span>
            <span className="escuchar__raya" aria-hidden="true" />
            <span>{escucharContent.kicker}</span>
          </p>

          <h2 className="escuchar__titulo">
            {titulo.antes}{' '}
            <span className="escuchar__titulo-destacado">
              {titulo.destacado}
            </span>
          </h2>

          <p className="escuchar__bajada">
            {bajada.map((linea) => (
              <span className="escuchar__bajada-linea" key={linea}>
                {linea}
              </span>
            ))}
          </p>

          {/* Los tres pasos. El primero es el estado actual del vecino. */}
          <ol className="escuchar__pasos">
            {pasos.map((paso, indice) => (
              <li
                className={indice === 0 ? 'paso paso--activo' : 'paso'}
                key={paso.numero}
              >
                <span className="paso__circulo">{paso.numero}</span>
                <span className="paso__texto">{paso.texto}</span>
              </li>
            ))}
          </ol>

          <div className="escuchar__tarjetas">
            <div className="compromiso">
              <p className="compromiso__titulo">{compromiso.titulo}</p>
              <ul className="compromiso__lista">
                {compromiso.puntos.map((punto) => (
                  <li className="compromiso__punto" key={punto}>
                    <svg
                      className="compromiso__tilde"
                      viewBox="0 0 14 14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M2 7.5 5.5 11 12 3.5" />
                    </svg>
                    {punto}
                  </li>
                ))}
              </ul>
            </div>

            <div className="plazo">
              <p className="plazo__numero">{plazo.numero}</p>
              <p className="plazo__etiqueta">
                {plazo.etiqueta.map((linea) => (
                  <span key={linea}>{linea}</span>
                ))}
              </p>
            </div>
          </div>

          <div className="escuchar__acciones">
            <a
              className="escuchar__cta escuchar__cta--primario"
              href={escucharContent.ctaPrimario.href}
            >
              <svg
                className="escuchar__cta-icono"
                viewBox="0 0 26 26"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <circle cx="13" cy="13" r="11.6" />
                <path
                  d="M7.6 11.3c0-.9.7-1.6 1.6-1.6h7.6c.9 0 1.6.7 1.6 1.6v3c0 .9-.7 1.6-1.6 1.6h-4.5l-3.1 2.2v-2.2c-.9 0-1.6-.7-1.6-1.6z"
                  strokeLinejoin="round"
                />
                <g fill="currentColor" stroke="none">
                  <circle cx="10.5" cy="12.8" r=".95" />
                  <circle cx="13" cy="12.8" r=".95" />
                  <circle cx="15.5" cy="12.8" r=".95" />
                </g>
              </svg>
              {escucharContent.ctaPrimario.label}
            </a>

            <a
              className="escuchar__cta escuchar__cta--secundario"
              href={escucharContent.ctaSecundario.href}
            >
              {escucharContent.ctaSecundario.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
