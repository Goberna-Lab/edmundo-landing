export interface Propuesta {
  id: string
  titulo: string
  resumen: string
  /** Id de un símbolo en public/icons.svg, ej: 'icon-educacion'. */
  icono?: string
}

export const propuestasContent = {
  titulo: 'Propuestas',
  intro: '[[intro-propuestas]]',
  items: [
    {
      id: 'educacion',
      titulo: '[[propuesta-1-titulo]]',
      resumen: '[[propuesta-1-resumen]]',
      icono: 'icon-educacion',
    },
    {
      id: 'seguridad',
      titulo: '[[propuesta-2-titulo]]',
      resumen: '[[propuesta-2-resumen]]',
      icono: 'icon-seguridad',
    },
    {
      id: 'trabajo',
      titulo: '[[propuesta-3-titulo]]',
      resumen: '[[propuesta-3-resumen]]',
      icono: 'icon-trabajo',
    },
  ] satisfies Propuesta[],
}
