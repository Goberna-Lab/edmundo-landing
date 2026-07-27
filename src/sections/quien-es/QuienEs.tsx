import { quienEsContent } from './quien-es.content'
import retrato from './assets/edmundo-quien-es.webp'
// Recorte 2x del nodo 65:1114 del Figma, solo para la mesa de 1920: a 787px
// de ancho el asset de 562 se veía borroso. Ver QuienEs.css bloque 1920.
import retrato1920 from './assets/edmundo-quien-es-1920.webp'
import './QuienEs.css'

/** De acá para arriba manda el diseño de 1920 (mesa aparte). Ver QuienEs.css. */
const DESKTOP_1920 = '(min-width: 1600px)'

export function QuienEs() {
  return (
    <section className="quien-es" id="quien-es">
      {/* Trama de puntos decorativa del ángulo superior derecho. */}
      <div className="puntos" aria-hidden="true" />

      <div className="quien-es__inner">
        <figure className="quien-es__figura">
          <picture>
            <source media={DESKTOP_1920} srcSet={retrato1920} />
            <img
              src={retrato}
              alt={quienEsContent.altFoto}
              width="562"
              height="620"
              loading="lazy"
              decoding="async"
            />
          </picture>
        </figure>

        <div className="quien-es__texto">
          <p className="quien-es__kicker">
            <span className="quien-es__numero">{quienEsContent.numero}</span>
            <span className="quien-es__raya" aria-hidden="true" />
            <span className="quien-es__etiqueta">{quienEsContent.kicker}</span>
          </p>

          <h2 className="quien-es__nombre">
            <span className="quien-es__nombre-pila">{quienEsContent.nombre}</span>
            <span className="quien-es__nombre-apellido">
              {quienEsContent.apellido}
            </span>
          </h2>

          <p className="quien-es__lead">
            {quienEsContent.lead}{' '}
            <span className="quien-es__lead-destacado">
              {quienEsContent.leadDestacado}
            </span>
          </p>

          <p className="quien-es__parrafo">{quienEsContent.parrafo}</p>

          <dl className="quien-es__datos">
            {quienEsContent.datos.map((dato) => (
              <div className="dato" key={dato.id}>
                <img className="dato__icono" src={dato.icono} alt="" aria-hidden="true" />
                <dt className="dato__etiqueta">{dato.etiqueta}</dt>
                <dd className="dato__valor">{dato.valor}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
