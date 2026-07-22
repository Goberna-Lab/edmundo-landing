import { heroContent } from './hero.content'
import heroImg from './assets/hero-edmundo.png'
import './Hero.css'

export function Hero() {
  return (
    <section className="hero" id="hero">
      {/* La foto es el fondo: va detrás y se funde con el blanco hacia la izquierda. */}
      <div className="hero__fondo">
        <img
          className="hero__img"
          src={heroImg}
          alt={heroContent.altFoto}
          fetchPriority="high"
          decoding="async"
        />
        <div className="hero__velo" aria-hidden="true" />
      </div>

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
