export interface Creencia {
  id: string
  fuerte: string
  resto: string
}

export const loQueMeMueveContent = {
  numero: '03',
  kicker: 'Lo que me mueve',

  /** Solo "orden" va en rojo; el resto del título es negro. */
  titulo: {
    antes: 'Devolverle a La Molina la tranquilidad, el',
    destacado: 'orden',
    despues: 'y la confianza en su gobierno local.',
  },

  /** El arranque de cada frase va en negrita y el resto en regular. */
  creencias: [
    {
      id: 'politica',
      fuerte: 'Creo en una política',
      resto: 'seria, cercana y con resultados.',
    },
    {
      id: 'municipalidad',
      fuerte: 'Creo en una municipalidad',
      resto: 'que escuche antes de decidir.',
    },
    {
      id: 'la-molina',
      fuerte: 'Creo en una La Molina',
      resto: 'que cuide a sus familias, sus parques, su seguridad y su valor residencial.',
    },
  ] satisfies Creencia[],

  pie: {
    lugar: 'Parque de La Molina — 06:42 am',
    coordenadas: 'Lat. 12°04’ S · Long. 76°57’ O',
  },

  altFoto: 'Vista aérea de La Molina con la laguna y los cerros al amanecer',
}
