import { articulosContent } from './articulos.content'
import './Articulos.css'

/**
 * "2026-03-14" → "14 de marzo de 2026".
 * Mientras la fecha sea un [[placeholder]] no parsea, así que se muestra
 * tal cual en vez de un "Invalid Date".
 */
function formatearFecha(iso: string): string {
  const fecha = new Date(iso)
  if (Number.isNaN(fecha.getTime())) return iso
  return fecha.toLocaleDateString('es-PE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export function Articulos() {
  return (
    <section className="section section--alt" id="articulos">
      <div className="container">
        <p className="kicker">{articulosContent.kicker}</p>
        <h2 className="section__title">{articulosContent.titulo}</h2>
        <p className="section__intro">{articulosContent.intro}</p>

        <ul className="articulos__grid">
          {articulosContent.articulos.map((articulo) => (
            <li key={articulo.id}>
              <article className="articulo">
                <a className="articulo__link" href={articulo.url}>
                  <div className="articulo__figura">
                    <img
                      src={articulo.imagen}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      width="800"
                      height="500"
                    />
                  </div>

                  <div className="articulo__cuerpo">
                    <p className="articulo__meta">
                      <span className="articulo__categoria">{articulo.categoria}</span>
                      <time dateTime={articulo.fecha}>
                        {formatearFecha(articulo.fecha)}
                      </time>
                    </p>

                    <h3 className="articulo__titulo">{articulo.titulo}</h3>
                    <p className="articulo__bajada">{articulo.bajada}</p>

                    <span className="articulo__mas" aria-hidden="true">
                      Leer más
                    </span>
                  </div>
                </a>
              </article>
            </li>
          ))}
        </ul>

        <a className="articulos__todos" href={articulosContent.verTodos.url}>
          {articulosContent.verTodos.label}
        </a>
      </div>
    </section>
  )
}
