import { formularioContent } from './formulario.content'
import type { Campo } from './formulario.content'
import './Formulario.css'

const { tituloAccesible, accion, enviar, campos, imagenes } = formularioContent

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
  return (
    <section className="formulario" id="sumate">
      <h2 className="sr-only">{tituloAccesible}</h2>

      {/* Fondo: ciudad velada a la izquierda, franja roja a la derecha. */}
      <div className="formulario__fondo" aria-hidden="true">
        <img className="formulario__ciudad" src={imagenes.ciudad} alt="" />
        <div className="formulario__velo" />
        <div className="formulario__franja">
          <img src={imagenes.franja} alt="" />
        </div>
      </div>

      <div className="formulario__inner">
        {/*
          El candidato va enmascarado, no suelto: en Figma la foto está más
          ampliada que su ventana y sangra ~249px por debajo de la sección. El
          marco recorta al pie y a los costados; la foto adentro reproduce el
          encuadre exacto del diseño.
        */}
        <div className="formulario__candidato">
          <img
            className="formulario__candidato-foto"
            src={imagenes.candidato}
            alt={imagenes.altCandidato}
            loading="lazy"
            decoding="async"
          />
        </div>

        <form className="formulario__tarjeta" action={accion} method="post">
          <div className="formulario__campos">
            {campos.map((campo) => (
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
