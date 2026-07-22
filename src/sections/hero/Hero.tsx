import { heroContent } from './hero.content'
import retrato from '@/assets/hero.png'
import './Hero.css'

export function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__inner container">
        <div className="hero__texto">
          <p className="hero__kicker">{heroContent.kicker}</p>
          <h1 className="hero__titulo">
            {heroContent.titulo}
            <span className="hero__tagline">{heroContent.tagline}</span>
          </h1>
          <p className="hero__bajada">{heroContent.bajada}</p>
          <div className="hero__acciones">
            <a className="btn btn--primario" href={heroContent.ctaPrimario.href}>
              {heroContent.ctaPrimario.label}
            </a>
            <a className="btn btn--fantasma" href={heroContent.ctaSecundario.href}>
              {heroContent.ctaSecundario.label}
            </a>
          </div>
        </div>

        <div className="hero__figura">
          {/* Es la imagen LCP: sin lazy y con fetchPriority alta. */}
          <img
            src={retrato}
            alt={heroContent.titulo}
            width="720"
            height="900"
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </div>
    </section>
  )
}
