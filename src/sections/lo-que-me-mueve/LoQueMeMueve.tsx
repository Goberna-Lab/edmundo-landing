import { loQueMeMueveContent } from './lo-que-me-mueve.content'
import panoramica from './assets/la-molina-panoramica.webp'
import './LoQueMeMueve.css'

const { titulo, creencias, pie } = loQueMeMueveContent

export function LoQueMeMueve() {
  return (
    <section className="mueve" id="lo-que-me-mueve">
      {/* Trama de puntos del ángulo superior derecho. */}
      <div className="mueve__puntos" aria-hidden="true" />

      <div className="mueve__inner">
        <p className="mueve__kicker">
          <span className="mueve__numero">{loQueMeMueveContent.numero}</span>
          <span className="mueve__raya" aria-hidden="true" />
          <span className="mueve__etiqueta">{loQueMeMueveContent.kicker}</span>
        </p>

        <div className="mueve__cabecera">
          <h2 className="mueve__titulo">
            {titulo.antes}{' '}
            <span className="mueve__titulo-destacado">{titulo.destacado}</span>{' '}
            {titulo.despues}
          </h2>

          <ul className="mueve__creencias">
            {creencias.map((creencia) => (
              <li className="creencia" key={creencia.id}>
                <strong className="creencia__fuerte">{creencia.fuerte}</strong>{' '}
                {creencia.resto}
              </li>
            ))}
          </ul>
        </div>

        <figure className="mueve__figura">
          <img
            src={panoramica}
            alt={loQueMeMueveContent.altFoto}
            width="1206"
            height="500"
            loading="lazy"
            decoding="async"
          />
          <figcaption className="mueve__pie">
            <span>{pie.lugar}</span>
            <span>{pie.coordenadas}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
