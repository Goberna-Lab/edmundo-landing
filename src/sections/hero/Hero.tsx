import { heroContent } from './hero.content'
// WebP: pesan 133 KB entre las dos contra 1.6 MB de los PNG originales, que
// quedan en la carpeta como fuente (al no importarse, no entran al bundle).
import fondo from './assets/fondo-la-molina.webp'
import fondo1920 from './assets/fondo-la-molina-1920.webp'
import edmundo from './assets/edmundo.webp'
// Retrato específico de 1920: recorte más alto (torso completo) que el plano
// corto de escritorio. Solo se usa de 1600px para arriba. Ver Hero.css.
import edmundo1920 from './assets/edmundo-1920.webp'
// Mismo recorte a 1x. El de arriba es el 2x: el navegador baja UNO de los
// dos según la densidad de la pantalla, así que un monitor 1x se ahorra
// 99 KB y uno retina sigue viendo el grande. Ver el srcSet de abajo.
import edmundo1920x1 from './assets/edmundo-1920-1x.webp'
/*
 * Recortes propios del mobile, no versiones chicas de los de desktop: el
 * diseño mobile es a sangre y vertical, así que necesita OTRA porción de la
 * misma foto (una franja alta, no la panorámica) y el retrato entero con
 * torso, no el plano corto que usa desktop.
 *
 * Salieron de los mismos originales que Figma tiene cargados; si hay que
 * rehacerlos, los `imageRef` del archivo llNqGN7b3MNXaCpCWX40s3 son
 * e49777b4f373067603f6b519c2dd5c3da6354c5a (fondo, 1717×916) y
 * 9d0f01372ddf8e3b544f6500046b996af964b8de (retrato, 1197×1770). El fondo es
 * el recorte x=773..1196 de ese original, que es la ventana que el diseño deja
 * a la vista. No se versionan los PNG: pesan 4.7 MB entre los dos y el
 * `imageRef` es mejor procedencia que un binario en el repo.
 */
import fondoMobile from './assets/fondo-la-molina-mobile.webp'
import edmundoMobile from './assets/edmundo-mobile.webp'
import './Hero.css'

/** Arriba de acá manda el diseño desktop; abajo, el de 430. */
const MOBILE = '(max-width: 760px)'
/** De acá para arriba manda el diseño de 1920 (mesa aparte). Ver Hero.css. */
const DESKTOP_1920 = '(min-width: 1600px)'

/*
 * Iconos inline y no desde el sprite: con <use href="archivo.svg#id"> el
 * currentColor no se hereda entre documentos, así que el icono no toma el
 * color del botón. Van a trazo, como en el diseño.
 */

/** Globo de chat dentro de un círculo. 26×26 en el diseño. */
function IconoPropuesta() {
  return (
    <svg
      className="hero__cta-icono"
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
  )
}

/** Anotador con anillas y renglones. 21×26 en el diseño. */
function IconoPlan() {
  return (
    <svg
      className="hero__cta-icono"
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
  )
}

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
        {/* De 1600px para arriba, el fondo de 1920 (foto cruda que llena el
            cuadro; el degradado blanco lo pone el .hero__velo en CSS). */}
        <source media={DESKTOP_1920} srcSet={fondo1920} />
        {/* El <source> mobile va PRIMERO: gana el primero que matchea. */}
        <source media={MOBILE} srcSet={fondoMobile} />
        <img
          className="hero__fondo-img"
          src={fondo}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
        />
      </picture>

      {/* En mobile el velo es una capa aparte; en desktop la foto ya lo trae
          integrado, así que este div queda sin pintar. Ver Hero.css. */}
      <div className="hero__velo" aria-hidden="true" />

      <picture className="hero__retrato">
        <source
          media={DESKTOP_1920}
          srcSet={`${edmundo1920x1} 1x, ${edmundo1920} 2x`}
        />
        <source media={MOBILE} srcSet={edmundoMobile} />
        <img
          className="hero__retrato-img"
          src={edmundo}
          alt={heroContent.altFoto}
          fetchPriority="high"
          decoding="async"
        />
      </picture>

      {/* Sin .container a propósito: el hero se despega de la columna
          centrada y usa un margen proporcional. Ver Hero.css. */}
      <div className="hero__inner">
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
              <IconoPropuesta />
              {heroContent.ctaPrimario.label}
            </a>

            <a
              className="hero__cta hero__cta--secundario"
              href={heroContent.ctaSecundario.href}
            >
              <IconoPlan />
              {heroContent.ctaSecundario.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
