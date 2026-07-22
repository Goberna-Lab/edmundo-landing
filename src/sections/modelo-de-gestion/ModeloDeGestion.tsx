import { useState } from 'react'
import { modeloContent } from './modelo-de-gestion.content'
import './ModeloDeGestion.css'

const { titulo, puntos } = modeloContent

/** "3" → "03": los números del diseño van con cero adelante. */
function conCero(n: number) {
  return String(n).padStart(2, '0')
}

export function ModeloDeGestion() {
  const [activo, setActivo] = useState(0)
  const punto = puntos[activo]

  return (
    <section className="modelo" id="modelo-de-gestion">
      {/* Trama de puntos del ángulo superior derecho. */}
      <div className="puntos" aria-hidden="true" />

      <div className="modelo__inner">
        <p className="modelo__kicker">
          <span className="modelo__numero">{modeloContent.numero}</span>
          <span className="modelo__raya" aria-hidden="true" />
          <span className="modelo__etiqueta">{modeloContent.kicker}</span>
        </p>

        <div className="modelo__cabecera">
          <h2 className="modelo__titulo">
            {titulo.map((linea, indice) => (
              <span className="modelo__titulo-linea" key={indice}>
                {linea.map((parte) =>
                  parte.suave ? (
                    <span className="modelo__titulo-suave" key={parte.texto}>
                      {parte.texto}
                    </span>
                  ) : (
                    parte.texto
                  ),
                )}
              </span>
            ))}
          </h2>

          {/* Contador del punto elegido. */}
          <p className="modelo__contador" aria-live="polite">
            <span className="modelo__contador-actual">{conCero(activo + 1)}</span>
            <span aria-hidden="true"> / / </span>
            <span className="modelo__contador-total">{conCero(puntos.length)}</span>
          </p>
        </div>

        <div className="modelo__cuerpo">
          <ol className="modelo__lista">
            {puntos.map((item, indice) => (
              <li key={item.id}>
                <button
                  type="button"
                  className={
                    indice === activo ? 'punto punto--activo' : 'punto'
                  }
                  aria-current={indice === activo ? 'true' : undefined}
                  onClick={() => setActivo(indice)}
                >
                  <span className="punto__numero">{conCero(indice + 1)}</span>
                  <span className="punto__texto">{item.texto}</span>
                  {/*
                    Flecha del diseño (Trazado 40721). Va inline y con
                    currentColor en vez del #C51F25 fijo del archivo, así
                    acompaña el color del punto en hover y cuando está activo.
                  */}
                  <svg
                    className="punto__flecha"
                    viewBox="0 0 12.603 12.603"
                    aria-hidden="true"
                  >
                    <path
                      d="M68.6,56.7v9.1a.7.7,0,0,1-1.4,0V58.39L57.191,68.4a.7.7,0,0,1-.991-.991L66.208,57.4H58.8a.7.7,0,1,1,0-1.4h9.1A.7.7,0,0,1,68.6,56.7Z"
                      transform="translate(-55.996 -56)"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </li>
            ))}
          </ol>

          <figure className="modelo__figura">
            <img
              src={punto.imagen}
              alt={punto.altImagen}
              width="698"
              height="509"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </div>
    </section>
  )
}
