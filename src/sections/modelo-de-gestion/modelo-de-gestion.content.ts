import seguridad from './assets/seguridad.webp'

export interface Punto {
  id: string
  texto: string
  /**
   * Foto que se muestra al elegir el punto.
   * [[POR-LANDING]] Por ahora las nueve apuntan a la misma: solo llegó la de
   * seguridad. Cuando estén las otras ocho, se cambia acá y nada más.
   */
  imagen: string
  altImagen: string
}

export const modeloContent = {
  numero: '04',
  kicker: 'Modelo de gestión',

  /** "gestión" va en gris; el resto en negro. */
  titulo: [
    [{ texto: 'Nuestro modelo' }],
    [{ texto: 'de ' }, { texto: 'gestión', suave: true }],
  ] satisfies { texto: string; suave?: boolean }[][],

  puntos: [
    { id: 'seguridad', texto: 'Mejorar la seguridad.' },
    { id: 'transito', texto: 'Ordenar el tránsito.' },
    { id: 'parques', texto: 'Cuidar los parques y espacios públicos.' },
    { id: 'residencial', texto: 'Proteger el carácter residencial.' },
    { id: 'adulto-mayor', texto: 'Acompañar al adulto mayor y a la familia.' },
    { id: 'educacion', texto: 'Impulsar educación, innovación y emprendimiento.' },
    { id: 'ambiente', texto: 'Defender el medio ambiente.' },
    { id: 'animal', texto: 'Promover bienestar animal.' },
    { id: 'municipalidad', texto: 'Modernizar la municipalidad.' },
  ].map((punto) => ({
    ...punto,
    imagen: seguridad,
    altImagen: 'Serenazgo de La Molina en la central de seguridad integral',
  })) satisfies Punto[],
}
