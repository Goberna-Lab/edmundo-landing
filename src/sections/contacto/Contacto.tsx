import { useState } from 'react'
import { contactoContent } from './contacto.content'
import './Contacto.css'

type Estado = 'idle' | 'enviando' | 'ok' | 'error'

export function Contacto() {
  const [estado, setEstado] = useState<Estado>('idle')

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setEstado('enviando')
    try {
      const respuesta = await fetch(contactoContent.endpoint, {
        method: 'POST',
        body: new FormData(event.currentTarget),
      })
      setEstado(respuesta.ok ? 'ok' : 'error')
    } catch {
      setEstado('error')
    }
  }

  const wsp = `https://wa.me/${contactoContent.whatsapp.numero}?text=${encodeURIComponent(
    contactoContent.whatsapp.mensaje,
  )}`

  return (
    <section className="section section--alt" id="contacto">
      <div className="container contacto">
        <div className="contacto__texto">
          <h2 className="section__title">{contactoContent.titulo}</h2>
          <p className="section__intro">{contactoContent.intro}</p>
          <a className="btn btn--fantasma" href={wsp} target="_blank" rel="noopener">
            Escribinos por WhatsApp
          </a>
        </div>

        <form className="contacto__form" onSubmit={onSubmit}>
          <label className="campo">
            <span className="campo__label">Nombre</span>
            <input className="campo__input" name="nombre" type="text" required />
          </label>

          <label className="campo">
            <span className="campo__label">Email</span>
            <input className="campo__input" name="email" type="email" required />
          </label>

          <label className="campo">
            <span className="campo__label">Mensaje</span>
            <textarea className="campo__input" name="mensaje" rows={4} />
          </label>

          <button className="btn btn--primario" type="submit" disabled={estado === 'enviando'}>
            {estado === 'enviando' ? 'Enviando…' : 'Quiero sumarme'}
          </button>

          {/* aria-live: el lector de pantalla anuncia el resultado sin mover el foco. */}
          <p className="contacto__estado" role="status" aria-live="polite">
            {estado === 'ok' && '¡Gracias! Te vamos a contactar.'}
            {estado === 'error' && 'No pudimos enviarlo. Probá por WhatsApp.'}
          </p>
        </form>
      </div>
    </section>
  )
}
