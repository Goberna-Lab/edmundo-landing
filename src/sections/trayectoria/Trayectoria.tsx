import { trayectoriaContent } from './trayectoria.content'
import retrato from './assets/edmundo-trayectoria.webp'
import formaRoja from './assets/forma-roja.webp'
import './Trayectoria.css'

export function Trayectoria() {
  return (
    <section className="trayectoria" id="trayectoria">
      {/* Trama de puntos del ángulo superior derecho. */}
      <div className="trayectoria__puntos" aria-hidden="true" />

      <div className="trayectoria__inner">
        <div className="trayectoria__texto">
          <p className="trayectoria__kicker">
            <span className="trayectoria__numero">{trayectoriaContent.numero}</span>
            <span className="trayectoria__raya" aria-hidden="true" />
            <span className="trayectoria__etiqueta">{trayectoriaContent.kicker}</span>
          </p>

          <h2 className="trayectoria__titulo">{trayectoriaContent.titulo}</h2>
          <p className="trayectoria__bajada">{trayectoriaContent.bajada}</p>

          <ul className="trayectoria__hitos">
            {trayectoriaContent.hitos.map((hito) => (
              <li className="hito" key={hito.id}>
                <img
                  className="hito__icono"
                  src={hito.icono}
                  alt=""
                  aria-hidden="true"
                  width={hito.ancho}
                  height={hito.alto}
                />
                <p className="hito__texto">
                  {/* Dos renglones fijos: el título arriba y el detalle
                      abajo. Sin el salto, según el ancho se juntaban en una
                      sola línea o cortaban donde no va. */}
                  <strong className="hito__fuerte">{hito.fuerte}</strong>
                  <span className="hito__resto">{hito.resto}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="trayectoria__figura">
          {/* La forma roja va detrás del retrato, apoyada en el ángulo. */}
          <img className="trayectoria__forma" src={formaRoja} alt="" aria-hidden="true" />
          <img
            className="trayectoria__retrato"
            src={retrato}
            alt={trayectoriaContent.altFoto}
            width="554"
            height="595"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  )
}
