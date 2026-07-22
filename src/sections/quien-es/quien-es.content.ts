import iconoExperiencia from './assets/icono-experiencia.png'
import iconoServicio from './assets/icono-servicio.png'
import iconoCompromiso from './assets/icono-compromiso.png'

export interface Dato {
  id: string
  icono: string
  etiqueta: string
  valor: string
}

export const quienEsContent = {
  numero: '01',
  kicker: '¿Quién es?',
  nombre: 'Edmundo',
  /** En esta sección el "del" va en minúscula, a diferencia del hero. */
  apellido: 'del Águila',

  /** El remate va en rojo; por eso viaja aparte del resto de la frase. */
  lead: 'Soy economista, profesor y hombre de',
  leadDestacado: 'Acción Popular.',

  parrafo:
    'He dedicado mi vida profesional a la educación, la gestión pública, el análisis económico y el servicio político.',

  datos: [
    {
      id: 'experiencia',
      icono: iconoExperiencia,
      etiqueta: 'Experiencia',
      // El diseño trae "XX + AÑOS": es un placeholder del propio mockup.
      valor: '[[quien-es-anios]] + años',
    },
    {
      id: 'servicio',
      icono: iconoServicio,
      etiqueta: 'Servicio',
      valor: 'Público y Docente',
    },
    {
      id: 'compromiso',
      icono: iconoCompromiso,
      etiqueta: 'Compromiso',
      valor: 'Con La Molina',
    },
  ] satisfies Dato[],

  altFoto: 'Edmundo del Águila señalando, con camisa celeste',
}
