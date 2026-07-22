import { useEffect, useRef } from 'react'
import { adelanteContent } from './la-molina-adelante.content'
import './LaMolinaAdelante.css'

const { titulo, ctaPrimario, ctaSecundario } = adelanteContent

/**
 * Mueve la foto de fondo mientras la sección pasa por pantalla.
 *
 * Anda en todos los navegadores: no depende de `animation-timeline: view()`,
 * que Firefox parsea pero no implementa.
 *
 * @param desplazamiento Porcentaje que se mueve la foto en cada extremo.
 */
function useParallax(desplazamiento = 8) {
  const ref = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const foto = ref.current
    // La sección es la que se mide; ver el comentario de `pintar`.
    const seccion = foto?.parentElement
    if (!foto || !seccion) return

    // El parallax es de los efectos que marean a quien pide menos movimiento.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let cuadro = 0
    let visible = false

    const pintar = () => {
      cuadro = 0
      /*
       * Se mide la SECCIÓN, no la foto: getBoundingClientRect devuelve la
       * caja YA transformada, así que medir la foto que estamos moviendo
       * realimenta el cálculo y el movimiento sale amortiguado.
       */
      const caja = seccion.getBoundingClientRect()
      const alto = window.innerHeight
      // 0 cuando la sección asoma por abajo, 1 cuando termina de salir arriba.
      const avance = (alto - caja.top) / (alto + caja.height)
      const acotado = Math.min(Math.max(avance, 0), 1)
      const y = (acotado - 0.5) * 2 * desplazamiento
      foto.style.transform = `translateY(${y.toFixed(2)}%)`
    }

    // rAF: agrupa los eventos de scroll en un repintado por cuadro.
    const alScrollear = () => {
      if (!visible || cuadro) return
      cuadro = requestAnimationFrame(pintar)
    }

    // Solo escucha el scroll mientras la sección está en pantalla.
    const observador = new IntersectionObserver(
      ([entrada]) => {
        visible = entrada.isIntersecting
        if (visible) pintar()
      },
      { rootMargin: '100px' },
    )
    observador.observe(seccion)

    // Primera pasada: si al cargar la sección ya está en pantalla, la foto
    // tiene que arrancar en su posición, no en el centro.
    pintar()

    window.addEventListener('scroll', alScrollear, { passive: true })
    window.addEventListener('resize', alScrollear, { passive: true })

    return () => {
      observador.disconnect()
      window.removeEventListener('scroll', alScrollear)
      window.removeEventListener('resize', alScrollear)
      if (cuadro) cancelAnimationFrame(cuadro)
    }
  }, [desplazamiento])

  return ref
}

export function LaMolinaAdelante() {
  const fondo = useParallax()

  return (
    <section className="adelante" id="la-molina-adelante">
      {/* Fondo con parallax. Va más alto que la sección para tener recorrido. */}
      <img
        ref={fondo}
        className="adelante__fondo"
        src={adelanteContent.imagen}
        alt={adelanteContent.altImagen}
        loading="lazy"
        decoding="async"
      />
      {/* Vela que oscurece la foto para que el texto blanco se lea. */}
      <div className="adelante__velo" aria-hidden="true" />

      <div className="adelante__inner">
        <p className="adelante__kicker">
          <span>{adelanteContent.numero}</span>
          <span className="adelante__raya" aria-hidden="true" />
          <span>{adelanteContent.kicker}</span>
        </p>

        <h2 className="adelante__titulo">
          {titulo.map((linea) => (
            <span
              className={
                linea.suave
                  ? 'adelante__titulo-linea adelante__titulo-linea--suave'
                  : 'adelante__titulo-linea'
              }
              key={linea.texto}
            >
              {linea.texto}
            </span>
          ))}
        </h2>

        <div className="adelante__acciones">
          <a className="adelante__cta" href={ctaPrimario.href}>
            <svg
              className="adelante__cta-icono"
              viewBox="0 0 26 26"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <circle cx="13" cy="13" r="11.6" />
              <path
                d="M7.6 11.3c0-.9.7-1.6 1.6-1.6h7.6c.9 0 1.6.7 1.6 1.6v3c0 .9-.7 1.6-1.6 1.6h-4.5l-3.1 2.2v-2.2c-.9 0-1.6-.7-1.6-1.6z"
                strokeLinejoin="round"
              />
              <g fill="currentColor" stroke="none">
                <circle cx="10.5" cy="12.8" r=".95" />
                <circle cx="13" cy="12.8" r=".95" />
                <circle cx="15.5" cy="12.8" r=".95" />
              </g>
            </svg>
            {ctaPrimario.label}
          </a>

          <a className="adelante__cta" href={ctaSecundario.href}>
            <svg
              className="adelante__cta-icono adelante__cta-icono--plan"
              viewBox="0 0 21 26"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <rect x="1.4" y="4.6" width="18.2" height="19.8" rx="2.4" />
              <path d="M6.4 1.6v5.2M14.6 1.6v5.2" />
              <path d="M5.9 12.4h9.2M5.9 16.2h9.2M5.9 20h6.1" />
            </svg>
            {ctaSecundario.label}
          </a>
        </div>
      </div>
    </section>
  )
}
