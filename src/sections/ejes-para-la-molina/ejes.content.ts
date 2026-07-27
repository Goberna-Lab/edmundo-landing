import ejeSeguridad from './assets/eje-1-seguridad.webp'
import mini1 from './assets/mini-1.webp'
import mini2 from './assets/mini-2.webp'
import mini3 from './assets/mini-3.webp'
import mini4 from './assets/mini-4.webp'
import mini5 from './assets/mini-5.webp'

export interface ParteTitulo {
  texto: string
  /** Los tonos del título: base #171717, medio #404040 y el rojo de marca. */
  tono?: 'medio' | 'primario'
}

export interface Eje {
  id: string
  /** Título de la ficha grande. */
  titulo: string
  /** Nombre del programa, el que va bajo la miniatura. */
  nombre: string
  descripcion: string
  imagen: string
  miniatura: string
  altImagen: string
  url: string
}

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
   * Nueve ejes. Solo llegó el detalle del primero y las miniaturas de los
   * cinco primeros; el resto queda en [[placeholder]] y reusa la imagen
   * grande del uno hasta que estén las suyas.
   */
  ejes: [
    {
      id: 'seguridad',
      titulo: 'Seguridad ciudadana',
      nombre: 'Cooperación Popular para la seguridad',
      descripcion:
        'Seguridad con vecinos organizados, serenazgo moderno, tecnología útil y coordinación real con la Policía Nacional.',
      imagen: ejeSeguridad,
      miniatura: mini1,
      altImagen: 'Central de monitoreo de seguridad de La Molina',
      url: '[[eje-1-url]]',
    },
    {
      id: 'transito',
      titulo: '[[eje-2-titulo]]',
      nombre: 'La Molina fluye',
      descripcion: '[[eje-2-descripcion]]',
      imagen: ejeSeguridad,
      miniatura: mini2,
      altImagen: 'Vista aérea del tránsito en La Molina',
      url: '[[eje-2-url]]',
    },
    {
      id: 'ordenada',
      titulo: '[[eje-3-titulo]]',
      nombre: 'La Molina ordenada',
      descripcion: '[[eje-3-descripcion]]',
      imagen: ejeSeguridad,
      miniatura: mini3,
      altImagen: 'Personal municipal de La Molina',
      url: '[[eje-3-url]]',
    },
    {
      id: 'acompana',
      titulo: '[[eje-4-titulo]]',
      nombre: 'La Molina acompaña',
      descripcion: '[[eje-4-descripcion]]',
      imagen: ejeSeguridad,
      miniatura: mini4,
      altImagen: 'Vecinos de La Molina reunidos',
      url: '[[eje-4-url]]',
    },
    {
      id: 'parques',
      titulo: '[[eje-5-titulo]]',
      nombre: 'Parques para la familia',
      descripcion: '[[eje-5-descripcion]]',
      imagen: ejeSeguridad,
      miniatura: mini5,
      altImagen: 'Parque de La Molina desde el aire',
      url: '[[eje-5-url]]',
    },
    {
      id: 'eje-6',
      titulo: '[[eje-6-titulo]]',
      nombre: '[[eje-6-nombre]]',
      descripcion: '[[eje-6-descripcion]]',
      imagen: ejeSeguridad,
      miniatura: mini1,
      altImagen: '',
      url: '[[eje-6-url]]',
    },
    {
      id: 'eje-7',
      titulo: '[[eje-7-titulo]]',
      nombre: '[[eje-7-nombre]]',
      descripcion: '[[eje-7-descripcion]]',
      imagen: ejeSeguridad,
      miniatura: mini2,
      altImagen: '',
      url: '[[eje-7-url]]',
    },
    {
      id: 'eje-8',
      titulo: '[[eje-8-titulo]]',
      nombre: '[[eje-8-nombre]]',
      descripcion: '[[eje-8-descripcion]]',
      imagen: ejeSeguridad,
      miniatura: mini3,
      altImagen: '',
      url: '[[eje-8-url]]',
    },
    {
      id: 'eje-9',
      titulo: '[[eje-9-titulo]]',
      nombre: '[[eje-9-nombre]]',
      descripcion: '[[eje-9-descripcion]]',
      imagen: ejeSeguridad,
      miniatura: mini4,
      altImagen: '',
      url: '[[eje-9-url]]',
    },
  ] satisfies Eje[],
}
