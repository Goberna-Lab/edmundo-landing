import { modeloContent } from './modelo-de-gestion.content'
import './ModeloDeGestion.css'

export function ModeloDeGestion() {
  return (
    <section className="section section--alt" id="modelo-de-gestion">
      <div className="container">
        <p className="kicker">{modeloContent.kicker}</p>
        <h2 className="section__title">{modeloContent.titulo}</h2>
        <p className="section__intro">{modeloContent.intro}</p>

        <ol className="modelo">
          {modeloContent.pasos.map((paso, indice) => (
            <li className="paso" key={paso.id}>
              <span className="paso__numero" aria-hidden="true">
                {indice + 1}
              </span>
              <div className="paso__cuerpo">
                <h3 className="paso__titulo">{paso.titulo}</h3>
                <p className="paso__texto">{paso.texto}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
