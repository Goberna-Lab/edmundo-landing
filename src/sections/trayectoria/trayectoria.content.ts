import iconoMba from './assets/icono-mba.png'
import iconoProfesor from './assets/icono-profesor.png'
import iconoCongresista from './assets/icono-congresista.png'
import iconoGestion from './assets/icono-gestion.png'
import iconoEducacion from './assets/icono-educacion.png'
import iconoVecino from './assets/icono-vecino.png'

export interface Hito {
  id: string
  icono: string
  /** Arranca en negrita; el resto va en regular. */
  fuerte: string
  resto: string
}

export const trayectoriaContent = {
  numero: '02',
  kicker: 'Trayectoria',
  titulo: 'Mi trayectoria',
  bajada: 'Economista formado en la Universidad de Lima.',

  hitos: [
    {
      id: 'mba',
      icono: iconoMba,
      fuerte: 'MBA en Southern New',
      resto: 'Hampshire University',
    },
    {
      id: 'profesor',
      icono: iconoProfesor,
      fuerte: 'Profesor universitario',
      resto: 'por más de dos décadas.',
    },
    {
      id: 'congresista',
      icono: iconoCongresista,
      fuerte: 'Excongresista',
      resto: 'de la República por Lima.',
    },
    {
      id: 'gestion',
      icono: iconoGestion,
      fuerte: 'Experiencia en gestión pública',
      resto: 'y defensa del consumidor desde INDECOPI.',
    },
    {
      id: 'educacion',
      icono: iconoEducacion,
      fuerte: 'Experiencia en educación,',
      resto: 'gestión institucional y análisis político.',
    },
    {
      id: 'vecino',
      icono: iconoVecino,
      fuerte: 'Vecino comprometido',
      resto: 'con el futuro de La Molina.',
    },
  ] satisfies Hito[],

  altFoto: 'Edmundo del Águila de saco, sosteniendo una tablet',
}
