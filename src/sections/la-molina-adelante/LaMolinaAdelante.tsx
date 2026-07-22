import { adelanteContent } from './la-molina-adelante.content'
import './LaMolinaAdelante.css'

const { titulo, ctaPrimario, ctaSecundario } = adelanteContent

export function LaMolinaAdelante() {
  return (
    <section className="adelante" id="la-molina-adelante">
      {/* Fondo con parallax. Va más alto que la sección para tener recorrido. */}
      <img
        className="adelante__fondo"
        src={adelanteContent.imagen}
        alt={adelanteContent.altImagen}
        loading="lazy"
        decoding="async"
      />
      {/* Vela que oscurece la foto para que el texto blanco se lea. */}
      <div className="adelante__velo" aria-hidden="true" />

      <div className="adelante__inner">
        <p className="adelante__kicker">
          <span>{adelanteContent.numero}</span>
          <span className="adelante__raya" aria-hidden="true" />
          <span>{adelanteContent.kicker}</span>
        </p>

        <h2 className="adelante__titulo">
          {titulo.map((linea) => (
            <span
              className={
                linea.suave
                  ? 'adelante__titulo-linea adelante__titulo-linea--suave'
                  : 'adelante__titulo-linea'
              }
              key={linea.texto}
            >
              {linea.texto}
            </span>
          ))}
        </h2>

        <div className="adelante__acciones">
          <a className="adelante__cta" href={ctaPrimario.href}>
            <svg
              className="adelante__cta-icono"
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
            {ctaPrimario.label}
          </a>

          <a className="adelante__cta" href={ctaSecundario.href}>
            <svg
              className="adelante__cta-icono adelante__cta-icono--plan"
              viewBox="0 0 21 26"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <rect x="1.4" y="4.6" width="18.2" height="19.8" rx="2.4" />
              <path d="M6.4 1.6v5.2M14.6 1.6v5.2" />
              <path d="M5.9 12.4h9.2M5.9 16.2h9.2M5.9 20h6.1" />
            </svg>
            {ctaSecundario.label}
          </a>
        </div>
      </div>
    </section>
  )
}
