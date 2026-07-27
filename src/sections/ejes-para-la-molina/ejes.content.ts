import ejeSeguridad from './assets/eje-1-seguridad.webp'
import ejeFluye from './assets/eje-2-fluye.webp'
import ejeOrdenada from './assets/eje-3-ordenada.webp'
import ejeAcompana from './assets/eje-4-acompana.webp'
import ejeParques from './assets/eje-5-parques.webp'
import ejeConocimiento from './assets/eje-6-conocimiento.webp'
import ejeVerde from './assets/eje-7-verde.webp'
import ejeResponsable from './assets/eje-8-responsable.webp'
import ejeModerna from './assets/eje-9-moderna.webp'
import mini1 from './assets/mini-1.webp'
import mini2 from './assets/mini-2.webp'
import mini3 from './assets/mini-3.webp'
import mini4 from './assets/mini-4.webp'
import mini5 from './assets/mini-5.webp'
import mini6 from './assets/mini-6.webp'
import mini7 from './assets/mini-7.webp'
import mini8 from './assets/mini-8.webp'
import mini9 from './assets/mini-9.webp'
import num01 from './assets/num-01.svg'
import num02 from './assets/num-02.svg'
import num03 from './assets/num-03.svg'
import num04 from './assets/num-04.svg'
import num05 from './assets/num-05.svg'
import num06 from './assets/num-06.svg'
import num07 from './assets/num-07.svg'
import num08 from './assets/num-08.svg'
import num09 from './assets/num-09.svg'

export interface ParteTitulo {
  texto: string
  /** Los tonos del título: base #171717, medio #404040 y el rojo de marca. */
  tono?: 'medio' | 'primario'
}

export interface Eje {
  id: string
  /**
   * Título de la ficha grande. Hoy coincide con `nombre` en los nueve, así que
   * NO se escribe dos veces: sale de `nombre` salvo que el eje traiga el suyo.
   * El campo existe porque el diseño admite un título corto distinto del
   * nombre del programa (el eje 1 llegó a tener «Seguridad ciudadana»).
   */
  titulo: string
  /** Nombre del programa, el que va bajo la miniatura, numerado. */
  nombre: string
  descripcion: string
  imagen: string
  miniatura: string
  altImagen: string
  /**
   * Página interna del eje. Mientras no exista, se deja SIN definir y el botón
   * «Conoce más» no se dibuja: es preferible a un enlace roto o a un
   * `[[placeholder]]` que además hace fallar `node setup.mjs --check`.
   */
  url?: string
}

/** Lo que se escribe a mano: `titulo` es opcional porque se deriva de `nombre`. */
type EjeBase = Omit<Eje, 'titulo'> & { titulo?: string }

/*
 * Los nueve ejes, con el texto y las fotos de campaña.
 *
 * Cada uno trae la suya. La ficha y la miniatura NO son la misma
 * imagen escalada: el diseño las pide en proporciones distintas (832×607 y
 * 260×147), así que cada una se recorta por separado desde la fuente, que
 * queda guardada al lado como `eje-N-<slug>-fuente.*`.
 *
 * Los `alt` describen LO QUE SE VE en cada foto, no el título del eje: quien
 * usa lector de pantalla necesita saber qué hay en la imagen.
 *
 * Ninguno tiene `url` todavía, así que el botón «Conoce más» no se dibuja.
 */
const ejes: EjeBase[] = [
  {
    id: 'seguridad',
    nombre: 'Cooperación Popular para la seguridad',
    descripcion:
      'Seguridad con vecinos organizados, serenazgo moderno, tecnología útil y coordinación real con la Policía Nacional.',
    imagen: ejeSeguridad,
    miniatura: mini1,
    altImagen: 'Central de monitoreo de seguridad de La Molina',
  },
  {
    id: 'fluye',
    nombre: 'La Molina fluye',
    descripcion:
      'Movilidad más ordenada, puntos críticos atendidos, cultura vial y soluciones inteligentes para reducir el caos diario.',
    imagen: ejeFluye,
    miniatura: mini2,
    altImagen: 'Vista aérea de una avenida de La Molina con el tránsito congestionado',
  },
  {
    id: 'ordenada',
    nombre: 'La Molina ordenada',
    descripcion:
      'Defensa del carácter residencial, comercio formal acompañado, fiscalización inteligente y recuperación del espacio público.',
    imagen: ejeOrdenada,
    miniatura: mini3,
    altImagen: 'Personal municipal frente a un local clausurado en La Molina',
  },
  {
    id: 'acompana',
    nombre: 'La Molina acompaña',
    descripcion:
      'Servicios cercanos para adultos mayores, salud preventiva, integración familiar y una municipalidad más humana.',
    imagen: ejeAcompana,
    miniatura: mini4,
    altImagen: 'Adultos mayores en una actividad cultural de la municipalidad',
  },
  {
    id: 'parques',
    nombre: 'Parques para la familia',
    descripcion:
      'Parques seguros, iluminados, activos y adaptados a cada barrio, como espacios de encuentro y convivencia.',
    imagen: ejeParques,
    miniatura: mini5,
    altImagen: 'Render de un parque en ladera con juegos infantiles y terrazas',
  },
  {
    id: 'conocimiento',
    nombre: 'La Molina, ciudad del conocimiento',
    descripcion:
      'Educación, universidades, innovación, emprendimiento y juventud como ventaja competitiva del distrito.',
    imagen: ejeConocimiento,
    miniatura: mini6,
    altImagen: 'Escolares trabajando en el aula de un colegio de La Molina',
  },
  {
    id: 'verde',
    nombre: 'La Molina verde',
    descripcion:
      'Cuidado de áreas verdes, agua, reciclaje, educación ambiental y sostenibilidad urbana.',
    imagen: ejeVerde,
    miniatura: mini7,
    altImagen: 'Vista aérea de un área verde de La Molina con la ciudad al fondo',
  },
  {
    id: 'responsable',
    nombre: 'La Molina responsable',
    descripcion:
      'Bienestar animal, tenencia responsable, campañas de esterilización, salud pública y convivencia entre vecinos y mascotas.',
    imagen: ejeResponsable,
    miniatura: mini8,
    altImagen: 'Vecina sentada en el pasto de un parque junto a su perro',
  },
  {
    id: 'moderna',
    nombre: 'Municipalidad moderna',
    descripcion:
      'Menos trámites, más atención digital, inteligencia artificial, transparencia e indicadores para medir resultados.',
    imagen: ejeModerna,
    miniatura: mini9,
    altImagen:
      'Operadores en la Central de Gestión de Seguridad de La Molina',
  },
]

export const ejesContent = {
  numero: '05',
  kicker: 'Ejes para La Molina',

  /**
   * Tres tonos, como el título de "Lo que me mueve": el primer renglón en
   * casi-negro (#171717), "Ejes concretos." un escalón más claro (#404040) y
   * solo "Metas claras" en rojo. El tono base no lleva marca.
   */
  titulo: [
    [{ texto: 'Ejes para La Molina' }],
    [
      { texto: 'Ejes concretos.', tono: 'medio' },
      { texto: ' ' },
      { texto: 'Metas claras', tono: 'primario' },
    ],
  ] satisfies ParteTitulo[][],

  bajada:
    'Cada eje tendrá acciones, responsables, indicadores y seguimiento público. En esta portada mostramos la visión general. El detalle completo irá en páginas internas.',

  verMas: 'Conoce más',

  /*
   * Las cifras de marca de agua, vectorizadas (vienen del diseño, no de una
   * fuente: son contornos, así que no dependen de que Montserrat cargue).
   *
   * Van por POSICIÓN, no por eje: `numeros[i]` es la cifra del eje i+1. Si se
   * reordenan los ejes, la numeración sigue siendo correcta sola.
   *
   * Todas miden 111 de alto en el original y anchos distintos según los
   * dígitos (el «1» es angosto: el 01 mide 137 y el 04 llega a 202), así que
   * en CSS se les fija el ALTO y el ancho va libre.
   */
  numeros: [num01, num02, num03, num04, num05, num06, num07, num08, num09],

  ejes: ejes.map((eje) => ({
    ...eje,
    titulo: eje.titulo ?? eje.nombre,
  })) satisfies Eje[],
}
