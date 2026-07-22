import { quienEsContent } from './quien-es.content'
import retrato from './assets/quien-es.png'
import './QuienEs.css'

export function QuienEs() {
  return (
    <section className="section quien-es" id="quien-es">
      <div className="container quien-es__inner">
        <figure className="quien-es__figura">
          <img src={retrato} alt={quienEsContent.altFoto} loading="lazy" decoding="async" />
        </figure>

        <div className="quien-es__texto">
          <p className="kicker">{quienEsContent.kicker}</p>
          <h2 className="section__title">{quienEsContent.titulo}</h2>

          {quienEsContent.parrafos.map((parrafo) => (
            <p className="quien-es__parrafo" key={parrafo}>
              {parrafo}
            </p>
          ))}

          <dl className="quien-es__datos">
            {quienEsContent.datos.map((dato) => (
              <div className="dato" key={dato.etiqueta}>
                <dt className="dato__valor">{dato.valor}</dt>
                <dd className="dato__etiqueta">{dato.etiqueta}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
