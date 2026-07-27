export interface Creencia {
  id: string
  fuerte: string
  resto: string
}

export interface ParteTitulo {
  texto: string
  /**
   * El diseño usa tres tonos, no dos: el grueso del título en casi-negro
   * (#171717), "tranquilidad," y "confianza" un escalón más claro (#404040),
   * y solo "orden" en rojo. El tono base no lleva marca.
   */
  tono?: 'medio' | 'primario'
}

export const loQueMeMueveContent = {
  numero: '03',
  kicker: 'Lo que me mueve',

  /**
   * El título va por líneas y no como un párrafo suelto: en la mesa de 1366
   * el corte en cuatro renglones es parte del diseño (son cuatro nodos de
   * texto separados en Figma) y si lo decide el ancho de la caja cae distinto
   * según cómo mida la fuente en cada equipo.
   *
   * OJO con los espacios del final de cada renglón: en la mesa de 1920 el
   * título es UN solo bloque que fluye y corta en otros lugares, así que ahí
   * los renglones se empalman con `display: inline`. Sin ese espacio quedarían
   * pegadas "la" y "tranquilidad,". En bloque el espacio sobrante se descarta,
   * así que no molesta en 1366 ni en mobile.
   */
  titulo: [
    [{ texto: 'Devolverle a La Molina la ' }],
    [
      { texto: 'tranquilidad,', tono: 'medio' },
      { texto: ' el ' },
      { texto: 'orden', tono: 'primario' },
      { texto: ' y la ' },
    ],
    [{ texto: 'confianza', tono: 'medio' }, { texto: ' en su gobierno ' }],
    [{ texto: 'local.' }],
  ] satisfies ParteTitulo[][],

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
    /* Con el signo de minuto (′, U+2032) como el diseño, no la comilla (’). */
    coordenadas: 'Lat. 12°04′ S · Long. 76°57′ O',
  },

  altFoto: 'Vista aérea de La Molina con la laguna y los cerros al amanecer',
}
