import { loQueMeMueveContent } from './lo-que-me-mueve.content'
import panoramica from './assets/la-molina-panoramica.webp'
import './LoQueMeMueve.css'

export function LoQueMeMueve() {
  return (
    <section className="mueve" id="lo-que-me-mueve">
      <div className="mueve__inner">
        <p className="mueve__kicker">
          <span className="mueve__numero">{loQueMeMueveContent.numero}</span>
          <span className="mueve__raya" aria-hidden="true" />
          <span className="mueve__etiqueta">{loQueMeMueveContent.kicker}</span>
        </p>

        <h2 className="mueve__titulo">
          {loQueMeMueveContent.titulo}{' '}
          <span className="mueve__titulo-destacado">
            {loQueMeMueveContent.tituloDestacado}
          </span>
        </h2>

        <figure className="mueve__figura">
          <img
            src={panoramica}
            alt={loQueMeMueveContent.altFoto}
            width="1206"
            height="500"
            loading="lazy"
            decoding="async"
          />
        </figure>
      </div>
    </section>
  )
}
