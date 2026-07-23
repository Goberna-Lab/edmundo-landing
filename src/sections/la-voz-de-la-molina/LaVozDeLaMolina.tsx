import { useCallback, useEffect, useRef, useState } from 'react'
import { laVozContent } from './la-voz.content'
import './LaVozDeLaMolina.css'

const { titulo, etiquetaCarrusel, anterior, siguiente, leerMas } = laVozContent

/**
 * "2026-07-20" → Date del 20 de julio EN HORA LOCAL.
 *
 * `new Date("2026-07-20")` no sirve: el string sin hora lo parsea como UTC
 * medianoche, y al leerlo en Lima (UTC-5) la fecha retrocede un día. Se veía
 * "19 JULIO 2026" para una nota fechada el 20.
 */
function parsearFecha(iso: string): Date | null {
  const partes = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso)
  if (!partes) return null
  const [, año, mes, dia] = partes
  return new Date(Number(año), Number(mes) - 1, Number(dia))
}

/** "2026-07-20" → "20 JULIO 2026". Si es un [[placeholder]], se muestra crudo. */
function formatearFecha(iso: string): string {
  const fecha = parsearFecha(iso)
  if (!fecha) return iso
  const mes = fecha.toLocaleDateString('es-PE', { month: 'long' }).toUpperCase()
  return `${fecha.getDate()} ${mes} ${fecha.getFullYear()}`
}

/** "2026-07-20" → "JUL", para el chip sobre la foto. */
function mesCorto(iso: string): string {
  const fecha = parsearFecha(iso)
  if (!fecha) return ''
  return fecha
    .toLocaleDateString('es-PE', { month: 'short' })
    .replace('.', '')
    .toUpperCase()
}

/**
 * Carrusel de scroll: el CSS hace el trabajo con scroll-snap y el JS solo
 * agrega los controles. Sin JS la pista se sigue scrolleando con el dedo, la
 * rueda o el teclado, así que ninguna nota queda inalcanzable.
 */
/** A dónde hay que scrollear para dejar la nota `i` pegada a la izquierda. */
function objetivoDe(pista: HTMLElement, i: number): number {
  const slides = pista.children as HTMLCollectionOf<HTMLElement>
  const base = slides[0]?.offsetLeft ?? 0
  const max = pista.scrollWidth - pista.clientWidth
  // Acotado: las últimas notas comparten posición porque el scroll se acaba.
  return Math.min((slides[i]?.offsetLeft ?? 0) - base, max)
}

function useCarrusel() {
  const pista = useRef<HTMLUListElement>(null)
  const [estado, setEstado] = useState({
    activo: 0,
    alInicio: true,
    alFinal: true,
    /*
     * A 1366 las tres notas entran justas y no hay nada para scrollear: poner
     * flechas y puntitos ahí sería decorado que no hace nada. Aparecen recién
     * cuando la pista desborda de verdad (mobile, o si suman más notas).
     */
    desborda: false,
  })

  useEffect(() => {
    const el = pista.current
    if (!el) return
    let cuadro = 0

    /*
     * El activo se saca de la POSICIÓN DE SCROLL, no de qué slide se ve.
     *
     * Con 2.3 notas a la vista hay tres notas pero solo dos posiciones de
     * scroll: las dos últimas terminan en el mismo lugar porque el recorrido
     * se acaba. Buscando "la primera nota visible" el índice se clavaba en 1,
     * el último puntito no se encendía nunca y la flecha no se deshabilitaba.
     * Comparando contra el objetivo acotado de cada nota, el empate lo gana la
     * de índice más alto y el final del carrusel queda bien marcado.
     */
    const medir = () => {
      cuadro = 0
      const max = el.scrollWidth - el.clientWidth
      let activo = 0
      let mejor = Infinity
      for (let i = 0; i < el.children.length; i++) {
        const distancia = Math.abs(objetivoDe(el, i) - el.scrollLeft)
        // Estricto: en empate gana el índice más bajo. Cuando quedan 2.x
        // notas a la vista las últimas comparten posición de scroll; con `<=`
        // el activo saltaba a la más alta y "adelante" salteaba un puntito.
        if (distancia < mejor) {
          mejor = distancia
          activo = i
        }
      }
      setEstado({
        activo,
        alInicio: el.scrollLeft <= 1,
        alFinal: el.scrollLeft >= max - 1,
        // 4px de margen: con las notas justas el redondeo sub-píxel deja
        // 1px de sobra y los controles aparecían para scrollear una nada.
        desborda: max > 4,
      })
    }

    const alScrollear = () => {
      if (!cuadro) cuadro = requestAnimationFrame(medir)
    }

    medir()
    el.addEventListener('scroll', alScrollear, { passive: true })
    const observadorTamaño = new ResizeObserver(medir)
    observadorTamaño.observe(el)

    return () => {
      el.removeEventListener('scroll', alScrollear)
      observadorTamaño.disconnect()
      if (cuadro) cancelAnimationFrame(cuadro)
    }
  }, [])

  const irA = useCallback((indice: number) => {
    const el = pista.current
    if (!el || !el.children[indice]) return
    const suave = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollTo({
      left: objetivoDe(el, indice),
      behavior: suave ? 'smooth' : 'auto',
    })
  }, [])

  const mover = useCallback(
    (direccion: 1 | -1) => {
      const el = pista.current
      if (!el) return
      const ultimo = el.children.length - 1
      irA(Math.min(Math.max(estado.activo + direccion, 0), ultimo))
    },
    [estado.activo, irA],
  )

  return { pista, ...estado, irA, mover }
}

export function LaVozDeLaMolina() {
  const { pista, activo, alInicio, alFinal, desborda, irA, mover } =
    useCarrusel()
  const { notas } = laVozContent

  return (
    <section className="voz" id="la-voz-de-la-molina">
      <div className="voz__inner">
        <h2 className="voz__titulo">{titulo}</h2>

        <div className="voz__carrusel">
          {desborda && (
            <button
              className="voz__flecha voz__flecha--atras"
              type="button"
              onClick={() => mover(-1)}
              disabled={alInicio}
            >
              <span className="sr-only">{anterior}</span>
              <svg viewBox="0 0 16 13" aria-hidden="true">
                <path
                  d="M15 6.5H1M6.5 1 1 6.5 6.5 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}

          <ul className="voz__pista" ref={pista} aria-label={etiquetaCarrusel}>
            {notas.map((nota) => (
              <li className="voz__slide" key={nota.id}>
                <article className="nota">
                  <a className="nota__link" href={nota.url}>
                    <div className="nota__figura">
                      {/* La foto va en su propia caja con recorte, para que
                          el zoom del hover no desborde ni tape la placa. */}
                      <span className="nota__foto">
                        <img
                          src={nota.imagen}
                          alt={nota.altImagen}
                          loading="lazy"
                          decoding="async"
                          width="686"
                          height="530"
                        />
                      </span>
                      <span className="nota__mes" aria-hidden="true">
                        {mesCorto(nota.fecha)}
                      </span>
                      {/* Placa blanca montada sobre el pie de la foto. */}
                      <h3 className="nota__titulo">{nota.titulo}</h3>
                    </div>

                    <p className="nota__fecha">
                      <time dateTime={nota.fecha}>
                        {formatearFecha(nota.fecha)}
                      </time>
                    </p>

                    <p className="nota__bajada">{nota.bajada}</p>

                    <span className="nota__mas">
                      {leerMas}
                      <svg viewBox="0 0 14 10" aria-hidden="true">
                        <path
                          d="M0 5h12M8.5 1 13 5l-4.5 4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </a>
                </article>
              </li>
            ))}
          </ul>

          {desborda && (
            <button
              className="voz__flecha voz__flecha--adelante"
              type="button"
              onClick={() => mover(1)}
              disabled={alFinal}
            >
              <span className="sr-only">{siguiente}</span>
              <svg viewBox="0 0 16 13" aria-hidden="true">
                <path
                  d="M1 6.5h14M9.5 1 15 6.5 9.5 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
        </div>

        {desborda && (
          <ol className="voz__puntos">
            {notas.map((nota, i) => (
              <li key={nota.id}>
                <button
                  className={
                    i === activo ? 'voz__punto voz__punto--activo' : 'voz__punto'
                  }
                  type="button"
                  onClick={() => irA(i)}
                  aria-current={i === activo}
                >
                  <span className="sr-only">Ir a la nota {i + 1}</span>
                </button>
              </li>
            ))}
          </ol>
        )}
      </div>
    </section>
  )
}
