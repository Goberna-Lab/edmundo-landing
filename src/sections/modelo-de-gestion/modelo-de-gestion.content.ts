export interface Paso {
  id: string
  titulo: string
  texto: string
}

export const modeloContent = {
  kicker: 'Modelo de gestión',
  titulo: 'Cómo vamos a trabajar',
  intro: '[[modelo-intro]]',
  /** El método, paso a paso. El orden importa: se muestra numerado. */
  pasos: [
    { id: 'escuchar', titulo: '[[modelo-1-titulo]]', texto: '[[modelo-1-texto]]' },
    { id: 'priorizar', titulo: '[[modelo-2-titulo]]', texto: '[[modelo-2-texto]]' },
    { id: 'ejecutar', titulo: '[[modelo-3-titulo]]', texto: '[[modelo-3-texto]]' },
    { id: 'rendir', titulo: '[[modelo-4-titulo]]', texto: '[[modelo-4-texto]]' },
  ] satisfies Paso[],
}
