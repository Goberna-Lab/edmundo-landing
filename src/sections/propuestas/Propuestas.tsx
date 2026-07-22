import { propuestasContent } from './propuestas.content'
import './Propuestas.css'

export function Propuestas() {
  return (
    <section className="section section--alt" id="propuestas">
      <div className="container">
        <h2 className="section__title">{propuestasContent.titulo}</h2>
        <p className="section__intro">{propuestasContent.intro}</p>

        <ul className="propuestas__grid">
          {propuestasContent.items.map((item) => (
            <li className="propuesta" key={item.id}>
              {item.icono ? (
                <svg className="propuesta__icono" role="presentation" aria-hidden="true">
                  <use href={`./icons.svg#${item.icono}`} />
                </svg>
              ) : null}
              <h3 className="propuesta__titulo">{item.titulo}</h3>
              <p className="propuesta__resumen">{item.resumen}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
