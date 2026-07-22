import { heroContent } from './hero.content'
// WebP: pesan 133 KB entre las dos contra 1.6 MB de los PNG originales, que
// quedan en la carpeta como fuente (al no importarse, no entran al bundle).
import fondo from './assets/fondo-la-molina.webp'
// import fondo1920 from './assets/fondo-la-molina-1920.webp'
import edmundo from './assets/edmundo.webp'
import './Hero.css'

export function Hero() {
  return (
    <section className="hero" id="hero">
      {/*
        Dos capas: el fondo de La Molina (que ya trae el degradado blanco
        integrado, por eso no le encimamos ningún velo) y el recorte del
        candidato encima, a la derecha.
      */}
      {/*
        PARA ACTIVAR EL FONDO DE 1920 (3 pasos):
          1. Dejar el archivo en ./assets/fondo-la-molina-1920.webp (1920×1008)
          2. Descomentar el import de arriba y el <source> de acá abajo
          3. En Hero.css, descomentar el bloque `@media (min-width: 1600px)`
        El navegador elige solo: a partir de 1600px de ancho usa el grande,
        abajo sigue con el de 1366. Sin JS.
      */}
      <picture className="hero__fondo">
        {/* <source media="(min-width: 1600px)" srcSet={fondo1920} /> */}
        <img
          className="hero__fondo-img"
          src={fondo}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
        />
      </picture>

      <img
        className="hero__retrato"
        src={edmundo}
        alt={heroContent.altFoto}
        fetchPriority="high"
        decoding="async"
      />

      <div className="hero__inner container">
        <div className="hero__texto">
          <h1 className="hero__nombre">
            <span className="hero__nombre-pila">{heroContent.nombre}</span>
            <span className="hero__nombre-apellido">{heroContent.apellido}</span>
          </h1>

          <p className="hero__cargo">
            {heroContent.cargo}{' '}
            <span className="hero__distrito">{heroContent.distrito}</span>
          </p>

          <p className="hero__bajada">{heroContent.bajada}</p>

          <div className="hero__acciones">
            <a
              className="hero__cta hero__cta--primario"
              href={heroContent.ctaPrimario.href}
            >
              <svg className="hero__cta-icono" aria-hidden="true" viewBox="0 0 24 24">
                <use href="./icons.svg#icon-propuesta" />
              </svg>
              {heroContent.ctaPrimario.label}
            </a>

            <a
              className="hero__cta hero__cta--secundario"
              href={heroContent.ctaSecundario.href}
            >
              <svg className="hero__cta-icono" aria-hidden="true" viewBox="0 0 24 24">
                <use href="./icons.svg#icon-plan" />
              </svg>
              {heroContent.ctaSecundario.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
