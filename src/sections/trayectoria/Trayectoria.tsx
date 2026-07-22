import { trayectoriaContent } from './trayectoria.content'
import './Trayectoria.css'

export function Trayectoria() {
  return (
    <section className="section" id="trayectoria">
      <div className="container">
        <h2 className="section__title">{trayectoriaContent.titulo}</h2>
        <p className="section__intro">{trayectoriaContent.intro}</p>

        <ol className="trayectoria">
          {trayectoriaContent.hitos.map((hito) => (
            <li className="hito" key={hito.anio + hito.titulo}>
              <span className="hito__anio">{hito.anio}</span>
              <div className="hito__cuerpo">
                <h3 className="hito__titulo">{hito.titulo}</h3>
                <p className="hito__detalle">{hito.detalle}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
