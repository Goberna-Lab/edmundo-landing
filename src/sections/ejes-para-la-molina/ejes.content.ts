export interface Eje {
  id: string
  titulo: string
  resumen: string
  /** Id de un símbolo de public/icons.svg. */
  icono: string
}

export const ejesContent = {
  kicker: 'Ejes para La Molina',
  titulo: 'El plan, en seis frentes',
  intro: '[[ejes-intro]]',
  ejes: [
    { id: 'seguridad', titulo: '[[eje-1-titulo]]', resumen: '[[eje-1-resumen]]', icono: 'icon-seguridad' },
    { id: 'transito', titulo: '[[eje-2-titulo]]', resumen: '[[eje-2-resumen]]', icono: 'icon-transito' },
    { id: 'parques', titulo: '[[eje-3-titulo]]', resumen: '[[eje-3-resumen]]', icono: 'icon-parques' },
    { id: 'servicios', titulo: '[[eje-4-titulo]]', resumen: '[[eje-4-resumen]]', icono: 'icon-servicios' },
    { id: 'vecinos', titulo: '[[eje-5-titulo]]', resumen: '[[eje-5-resumen]]', icono: 'icon-vecinos' },
    { id: 'transparencia', titulo: '[[eje-6-titulo]]', resumen: '[[eje-6-resumen]]', icono: 'icon-transparencia' },
  ] satisfies Eje[],
}
