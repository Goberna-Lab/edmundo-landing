import atardecer from './assets/atardecer-la-molina.webp'

/** Acá el gris aplica al renglón entero, no a palabras sueltas. */
export interface LineaTitulo {
  texto: string
  suave?: boolean
}

/*
 * Tres renglones: los dos primeros en blanco y el último en gris.
 * El corte es del diseño, no del ancho de la caja: en Figma el gris va en
 * UNA sola línea de 767px («La Molina adelante.»), no partido en dos.
 */
const titulo: LineaTitulo[] = [
  { texto: 'Construyamos' },
  { texto: 'Juntos' },
  { texto: 'La Molina adelante.', suave: true },
]

export const adelanteContent = {
  numero: '07',
  kicker: 'La Molina adelante.',
  titulo,

  ctaPrimario: { label: 'Déjame tu propuesta', href: '[[url-propuesta]]' },
  ctaSecundario: { label: 'Conoce mi plan', href: '#ejes-para-la-molina' },

  imagen: atardecer,
  altImagen: 'Atardecer sobre La Molina desde los cerros',
}
