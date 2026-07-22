import central from './assets/central-monitoreo.webp'

export interface Paso {
  numero: string
  texto: string
}

export const escucharContent = {
  numero: '06',
  kicker: 'Escuchar para decidir',

  /** "entra al plan" va en negro; "Tu propuesta" en un gris más claro. */
  titulo: {
    antes: 'Tu propuesta',
    destacado: 'entra al plan',
  },

  /** Dos renglones, como el diseño. */
  bajada: [
    'La Molina no se gobierna desde un escritorio.',
    'Se gobierna escuchando a sus vecinos.',
  ],

  pasos: [
    { numero: '01', texto: 'Deja tu respuesta' },
    { numero: '02', texto: 'La revisamos' },
    { numero: '03', texto: 'Recibes respuesta' },
  ] satisfies Paso[],

  compromiso: {
    titulo: 'Nuestro compromiso',
    puntos: [
      'Todas las propuestas son revisadas',
      'Respuesta en menos de 7 días',
      // [[POR-LANDING]] En el diseño figura "Seguimiento del estado e líne":
      // parece un texto cortado. Se asume "en línea".
      'Seguimiento del estado en línea',
    ],
  },

  plazo: {
    numero: '7',
    /** Dos renglones en el diseño. */
    etiqueta: ['Días máx.', 'de respuesta'],
  },

  ctaPrimario: { label: 'Dejar mi propuesta', href: '#la-molina-adelante' },
  ctaSecundario: { label: 'Ver los 9 ejes', href: '#ejes-para-la-molina' },

  imagen: central,
  altImagen: 'Operadores en la central de monitoreo de La Molina',
}
