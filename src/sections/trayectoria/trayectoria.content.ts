export interface Hito {
  anio: string
  titulo: string
  detalle: string
}

export const trayectoriaContent = {
  titulo: 'Trayectoria',
  intro: '[[intro-trayectoria]]',
  hitos: [
    { anio: '[[hito-1-anio]]', titulo: '[[hito-1-titulo]]', detalle: '[[hito-1-detalle]]' },
    { anio: '[[hito-2-anio]]', titulo: '[[hito-2-titulo]]', detalle: '[[hito-2-detalle]]' },
    { anio: '[[hito-3-anio]]', titulo: '[[hito-3-titulo]]', detalle: '[[hito-3-detalle]]' },
  ] satisfies Hito[],
}
