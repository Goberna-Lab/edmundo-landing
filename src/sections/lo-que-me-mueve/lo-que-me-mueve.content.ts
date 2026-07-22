export interface Creencia {
  id: string
  fuerte: string
  resto: string
}

export const loQueMeMueveContent = {
  numero: '03',
  kicker: 'Lo que me mueve',

  /**
   * El título va por líneas y no como un párrafo suelto: el corte en cuatro
   * renglones es parte del diseño, y si lo decide el ancho de la caja cae
   * distinto según cómo mida la fuente en cada equipo.
   * Solo "orden" va en rojo.
   */
  titulo: [
    [{ texto: 'Devolverle a La Molina la' }],
    [
      { texto: 'tranquilidad, el ' },
      { texto: 'orden', destacado: true },
      { texto: ' y la' },
    ],
    [{ texto: 'confianza en su gobierno' }],
    [{ texto: 'local.' }],
  ] satisfies { texto: string; destacado?: boolean }[][],

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
