import { useState } from 'react'
import { adelanteContent } from './la-molina-adelante.content'
import './LaMolinaAdelante.css'

type Estado = 'idle' | 'enviando' | 'ok' | 'error'

export function LaMolinaAdelante() {
  const [estado, setEstado] = useState<Estado>('idle')

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setEstado('enviando')
    try {
      const respuesta = await fetch(adelanteContent.endpoint, {
        method: 'POST',
        body: new FormData(event.currentTarget),
      })
      setEstado(respuesta.ok ? 'ok' : 'error')
    } catch {
      setEstado('error')
    }
  }

  const wsp = `https://wa.me/${adelanteContent.whatsapp.numero}?text=${encodeURIComponent(
    adelanteContent.whatsapp.mensaje,
  )}`

  return (
    <section className="section adelante" id="la-molina-adelante">
      <div className="container adelante__inner">
        <div className="adelante__texto">
          <p className="kicker kicker--claro">{adelanteContent.kicker}</p>
          <h2 className="adelante__titulo">{adelanteContent.titulo}</h2>
          <p className="adelante__intro">{adelanteContent.intro}</p>

          <a className="adelante__wsp" href={wsp} target="_blank" rel="noopener">
            O escríbeme por WhatsApp
          </a>
        </div>

        <form className="adelante__form" onSubmit={onSubmit}>
          <label className="campo">
            <span className="campo__label">Nombre</span>
            <input className="campo__input" name="nombre" type="text" required />
          </label>

          <label className="campo">
            <span className="campo__label">Correo</span>
            <input className="campo__input" name="email" type="email" required />
          </label>

          <label className="campo">
            <span className="campo__label">Tu propuesta para La Molina</span>
            <textarea className="campo__input" name="propuesta" rows={4} required />
          </label>

          <button
            className="adelante__enviar"
            type="submit"
            disabled={estado === 'enviando'}
          >
            {estado === 'enviando' ? 'Enviando…' : 'Enviar propuesta'}
          </button>

          {/* aria-live: el lector anuncia el resultado sin mover el foco. */}
          <p className="adelante__estado" role="status" aria-live="polite">
            {estado === 'ok' && '¡Gracias! Tu propuesta llegó.'}
            {estado === 'error' && 'No pudimos enviarla. Probá por WhatsApp.'}
          </p>
        </form>
      </div>
    </section>
  )
}
