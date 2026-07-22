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
      <div className="modelo__puntos" aria-hidden="true" />

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
                  <svg
                    className="punto__flecha"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="M4 12 12 4M5.5 4H12v6.5" />
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
