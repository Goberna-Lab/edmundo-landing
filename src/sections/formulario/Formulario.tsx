import { useEffect, useState } from 'react'
import { formularioContent } from './formulario.content'
import type { Campo } from './formulario.content'
import './Formulario.css'

const { tituloAccesible, accion, enviar, campos, ordenMobile, imagenes } =
  formularioContent

/*
 * En mobile el diseño quita un campo (el select 'Motivo'), no solo lo esconde.
 * Un `display:none` sobre un <select required> vacío rompe el submit nativo
 * ("no es enfocable"), así que hay que sacarlo del DOM, no ocultarlo. De ahí
 * este hook: elegimos la lista de campos según el viewport.
 */
function useMobile(query = '(max-width: 760px)') {
  const [esMobile, setEsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches,
  )

  useEffect(() => {
    const mql = window.matchMedia(query)
    const actualizar = () => setEsMobile(mql.matches)
    actualizar()
    mql.addEventListener('change', actualizar)
    return () => mql.removeEventListener('change', actualizar)
  }, [query])

  return esMobile
}

function CampoDelFormulario({ campo }: { campo: Campo }) {
  const id = `formulario-${campo.id}`
  const clase =
    campo.tipo === 'select' || campo.tipo === 'textarea'
      ? 'formulario__campo formulario__campo--ancho'
      : 'formulario__campo'

  return (
    <p className={clase}>
      <label className="formulario__label" htmlFor={id}>
        {campo.label}
      </label>

      {campo.tipo === 'select' ? (
        <select
          className="formulario__control"
          id={id}
          name={campo.id}
          required={campo.requerido}
          defaultValue=""
        >
          <option value="" disabled>
            {campo.placeholder}
          </option>
          {campo.opciones?.map((opcion) => (
            <option key={opcion} value={opcion}>
              {opcion}
            </option>
          ))}
        </select>
      ) : campo.tipo === 'textarea' ? (
        <textarea
          className="formulario__control formulario__control--area"
          id={id}
          name={campo.id}
          placeholder={campo.placeholder}
          required={campo.requerido}
          rows={3}
        />
      ) : (
        <input
          className="formulario__control"
          id={id}
          name={campo.id}
          type={campo.tipo}
          placeholder={campo.placeholder}
          required={campo.requerido}
          autoComplete={
            campo.id === 'nombres'
              ? 'given-name'
              : campo.id === 'apellidos'
                ? 'family-name'
                : campo.id === 'correo'
                  ? 'email'
                  : campo.id === 'telefono'
                    ? 'tel'
                    : undefined
          }
        />
      )}
    </p>
  )
}

export function Formulario() {
  const esMobile = useMobile()

  // En mobile: solo los campos de `ordenMobile`, en ese orden. En desktop, todos.
  const porId = new Map<string, Campo>(campos.map((campo) => [campo.id, campo]))
  const camposVisibles: Campo[] = esMobile
    ? ordenMobile.flatMap((id) => {
        const campo = porId.get(id)
        return campo ? [campo] : []
      })
    : campos

  return (
    <section className="formulario" id="sumate">
      <h2 className="sr-only">{tituloAccesible}</h2>

      {/*
        Fondo: ciudad velada a la izquierda, franja roja a la derecha.

        Las dos van `lazy`. Son decorativas y esta es la ÚLTIMA sección de la
        página, pero sin el atributo el navegador se las baja junto con el hero:
        409 KB (274 + 135) de la carga inicial para algo que recién se ve
        después de scrollear diez pantallas.
      */}
      <div className="formulario__fondo" aria-hidden="true">
        <img
          className="formulario__ciudad"
          src={imagenes.ciudad}
          alt=""
          loading="lazy"
          decoding="async"
        />
        <div className="formulario__velo" />
        <div className="formulario__franja">
          <img src={imagenes.franja} alt="" loading="lazy" decoding="async" />
        </div>
      </div>

      <div className="formulario__inner">
        {/*
          El candidato va primero en el DOM: en mobile el diseño lo muestra
          arriba de la tarjeta. En desktop, `order: -1` sobre la tarjeta lo
          mantiene a la izquierda del layout Flex.
        */}
        <div className="formulario__candidato">
          {/*
            Foto distinta por viewport (art direction): en mobile el diseño usa
            un recorte propio, ya cortado y sin fondo. `<picture>` la cambia sin
            JS; el <img> conserva su clase de posicionamiento.
          */}
          <picture>
            <source
              media="(max-width: 760px)"
              srcSet={imagenes.candidatoMobile}
            />
            <img
              className="formulario__candidato-foto"
              src={imagenes.candidato}
              alt={imagenes.altCandidato}
              loading="lazy"
              decoding="async"
            />
          </picture>
        </div>

        <form className="formulario__tarjeta" action={accion} method="post">
          <div className="formulario__campos">
            {camposVisibles.map((campo) => (
              <CampoDelFormulario campo={campo} key={campo.id} />
            ))}
          </div>

          <button className="formulario__enviar" type="submit">
            {enviar}
            <svg viewBox="0 0 13 11" aria-hidden="true">
              <path
                d="M0 5.5h11M7.5 1 12 5.5 7.5 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </form>
      </div>
    </section>
  )
}
