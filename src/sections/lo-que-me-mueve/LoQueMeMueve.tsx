import { loQueMeMueveContent } from './lo-que-me-mueve.content'
import './LoQueMeMueve.css'

export function LoQueMeMueve() {
  return (
    <section className="section mueve" id="lo-que-me-mueve">
      <div className="container">
        <p className="kicker">{loQueMeMueveContent.kicker}</p>
        <h2 className="section__title">{loQueMeMueveContent.titulo}</h2>

        <blockquote className="mueve__cita">
          <p>{loQueMeMueveContent.cita}</p>
        </blockquote>

        <ul className="mueve__lista">
          {loQueMeMueveContent.motivos.map((motivo, indice) => (
            <li className="motivo" key={motivo.id}>
              {/* El número es decorativo: el orden ya lo da la lista. */}
              <span className="motivo__numero" aria-hidden="true">
                {String(indice + 1).padStart(2, '0')}
              </span>
              <h3 className="motivo__titulo">{motivo.titulo}</h3>
              <p className="motivo__texto">{motivo.texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
