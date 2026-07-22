import { quienEsContent } from './quien-es.content'
import retrato from './assets/edmundo-quien-es.webp'
import './QuienEs.css'

export function QuienEs() {
  return (
    <section className="quien-es" id="quien-es">
      {/* Trama de puntos decorativa del ángulo superior derecho. */}
      <div className="puntos" aria-hidden="true" />

      <div className="quien-es__inner">
        <figure className="quien-es__figura">
          <img
            src={retrato}
            alt={quienEsContent.altFoto}
            width="562"
            height="620"
            loading="lazy"
            decoding="async"
          />
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
