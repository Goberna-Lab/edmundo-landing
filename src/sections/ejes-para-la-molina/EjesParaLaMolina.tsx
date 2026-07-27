import { useState } from 'react'
import { ejesContent } from './ejes.content'
import flechaAnterior from './assets/flecha-anterior.webp'
import flechaSiguiente from './assets/flecha-siguiente.webp'
import './EjesParaLaMolina.css'

const { titulo, ejes } = ejesContent

/** "3" → "03". */
function conCero(n: number) {
  return String(n).padStart(2, '0')
}

/** Las miniaturas muestran cinco a la vez; la elegida queda dentro de esa ventana. */
const VISIBLES = 5

export function EjesParaLaMolina() {
  const [activo, setActivo] = useState(0)
  const eje = ejes[activo]

  // Corre la ventana de miniaturas para que la elegida siempre se vea.
  const primeraVisible = Math.min(
    Math.max(0, activo - Math.floor(VISIBLES / 2)),
    ejes.length - VISIBLES,
  )
  const visibles = ejes.slice(primeraVisible, primeraVisible + VISIBLES)

  const ir = (paso: number) =>
    setActivo((actual) => (actual + paso + ejes.length) % ejes.length)

  return (
    <section className="ejes" id="ejes-para-la-molina">
      <div className="ejes__inner">
        <p className="ejes__kicker">
          <span>{ejesContent.numero}</span>
          <span className="ejes__raya" aria-hidden="true" />
          <span>{ejesContent.kicker}</span>
        </p>

        <h2 className="ejes__titulo">
          {titulo.map((linea, indice) => (
            <span className="ejes__titulo-linea" key={indice}>
              {linea.map((parte) =>
                parte.tono ? (
                  <span className={`ejes__titulo-${parte.tono}`} key={parte.texto}>
                    {parte.texto}
                  </span>
                ) : (
                  parte.texto
                ),
              )}
            </span>
          ))}
        </h2>

        <div className="ejes__intro">
          <p className="ejes__bajada">{ejesContent.bajada}</p>
        </div>

        {/* aria-live: al cambiar de eje, el lector anuncia la ficha nueva. */}
        <div className="ejes__ficha" aria-live="polite">
          <figure className="ejes__figura">
            <img
              src={eje.imagen}
              alt={eje.altImagen}
              width="832"
              height="607"
              loading="lazy"
              decoding="async"
            />
          </figure>

          <div className="ejes__detalle">
            {/*
              Cifra de marca de agua: decorativa, el dato real va en el
              contador de abajo. Es un SVG del diseño y no texto, así que no
              depende de que Montserrat haya cargado ni de emparejar el
              tracking a mano.
            */}
            <img
              className="ejes__marca"
              src={ejesContent.numeros[activo]}
              alt=""
              aria-hidden="true"
            />

            <h3 className="ejes__eje-titulo">{eje.titulo}</h3>
            <p className="ejes__eje-descripcion">{eje.descripcion}</p>

            <div className="ejes__pie">
              {/*
                El botón solo existe si el eje tiene su página interna. Todavía
                no hay ninguna: un <a> sin destino real no lleva a ningún lado y
                además se anuncia como enlace, así que hasta entonces no se
                dibuja. Cuando lleguen las URLs, vuelve solo.
              */}
              {eje.url && (
                <a className="ejes__mas" href={eje.url}>
                  {ejesContent.verMas}
                  <svg
                    className="ejes__mas-flecha"
                    viewBox="0 0 12.603 12.603"
                    aria-hidden="true"
                  >
                    <path
                      d="M68.6,56.7v9.1a.7.7,0,0,1-1.4,0V58.39L57.191,68.4a.7.7,0,0,1-.991-.991L66.208,57.4H58.8a.7.7,0,1,1,0-1.4h9.1A.7.7,0,0,1,68.6,56.7Z"
                      transform="translate(-55.996 -56)"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              )}

              <p className="ejes__contador">
                <span className="ejes__contador-actual">{conCero(activo + 1)}</span>
                <span aria-hidden="true"> / / </span>
                <span>{conCero(ejes.length)}</span>
              </p>
            </div>
          </div>
        </div>

        <ol className="ejes__miniaturas">
          {visibles.map((item, indice) => {
            const real = primeraVisible + indice
            return (
              <li key={item.id}>
                <button
                  type="button"
                  className={
                    real === activo ? 'mini mini--activa' : 'mini'
                  }
                  aria-current={real === activo ? 'true' : undefined}
                  onClick={() => setActivo(real)}
                >
                  <img
                    className="mini__imagen"
                    src={item.miniatura}
                    alt=""
                    width="260"
                    height="147"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="mini__nombre">
                    {real + 1}. {item.nombre}
                  </span>
                </button>
              </li>
            )
          })}
        </ol>

        <div className="ejes__navegacion">
          <button
            type="button"
            className="ejes__flecha"
            onClick={() => ir(-1)}
            aria-label="Eje anterior"
          >
            <img
              src={flechaAnterior}
              alt=""
              width="45"
              height="45"
              loading="lazy"
              decoding="async"
            />
          </button>
          <button
            type="button"
            className="ejes__flecha"
            onClick={() => ir(1)}
            aria-label="Eje siguiente"
          >
            <img
              src={flechaSiguiente}
              alt=""
              width="45"
              height="45"
              loading="lazy"
              decoding="async"
            />
          </button>
        </div>
      </div>
    </section>
  )
}
