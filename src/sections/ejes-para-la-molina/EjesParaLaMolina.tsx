import { ejesContent } from './ejes.content'
import './EjesParaLaMolina.css'

export function EjesParaLaMolina() {
  return (
    <section className="section ejes" id="ejes-para-la-molina">
      <div className="container">
        <p className="kicker">{ejesContent.kicker}</p>
        <h2 className="section__title">{ejesContent.titulo}</h2>
        <p className="section__intro">{ejesContent.intro}</p>

        <ul className="ejes__grid">
          {ejesContent.ejes.map((eje) => (
            <li className="eje" key={eje.id}>
              <svg className="eje__icono" role="presentation" aria-hidden="true">
                <use href={`./icons.svg#${eje.icono}`} />
              </svg>
              <h3 className="eje__titulo">{eje.titulo}</h3>
              <p className="eje__resumen">{eje.resumen}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
