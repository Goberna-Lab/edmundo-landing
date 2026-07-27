import seguridad from './assets/seguridad.webp'
import transito from './assets/transito.webp'
import parques from './assets/parques.webp'
import residencial from './assets/residencial.webp'
import adultoMayor from './assets/adulto-mayor.webp'
import educacion from './assets/educacion.webp'
import ambiente from './assets/ambiente.webp'
import animal from './assets/animal.webp'
import municipalidad from './assets/municipalidad.webp'

export interface Punto {
  id: string
  texto: string
  /** Foto que se muestra al elegir el punto. */
  imagen: string
  altImagen: string
}

/**
 * Cada punto trae su propia foto. Los nueve ya la tienen; el `?? seguridad` de
 * abajo queda como red de seguridad y es lo que usa el propio punto de
 * seguridad, que no declara `imagen`.
 */
type PuntoBase = { id: string; texto: string; imagen?: string; altImagen?: string }

export const modeloContent = {
  numero: '04',
  kicker: 'Modelo de gestión',

  /** "gestión" va en gris; el resto en negro. */
  titulo: [
    [{ texto: 'Nuestro modelo' }],
    [{ texto: 'de ' }, { texto: 'gestión', suave: true }],
  ] satisfies { texto: string; suave?: boolean }[][],

  puntos: ([
    { id: 'seguridad', texto: 'Mejorar la seguridad.' },
    {
      id: 'transito',
      texto: 'Ordenar el tránsito.',
      imagen: transito,
      altImagen: 'Vista aérea del intercambio vial de La Molina con el tránsito ordenado',
    },
    {
      id: 'parques',
      texto: 'Cuidar los parques y espacios públicos.',
      imagen: parques,
      altImagen: 'Plaza arbolada de La Molina con bancas y caminos cuidados',
    },
    {
      id: 'residencial',
      texto: 'Proteger el carácter residencial.',
      imagen: residencial,
      altImagen: 'Vista aérea de un barrio residencial de La Molina con casas de baja altura',
    },
    {
      id: 'adulto-mayor',
      texto: 'Acompañar al adulto mayor y a la familia.',
      imagen: adultoMayor,
      altImagen: 'Grupo de adultos mayores compartiendo una actividad musical al aire libre',
    },
    {
      id: 'educacion',
      texto: 'Impulsar educación, innovación y emprendimiento.',
      imagen: educacion,
      altImagen: 'Feria de emprendedores locales en un stand de la Municipalidad de La Molina',
    },
    {
      id: 'ambiente',
      texto: 'Defender el medio ambiente.',
      imagen: ambiente,
      altImagen: 'Laguna de La Molina rodeada de vegetación y cerros',
    },
    {
      id: 'animal',
      texto: 'Promover bienestar animal.',
      imagen: animal,
      altImagen: 'Vecinos paseando a sus perros en un parque de La Molina',
    },
    {
      id: 'municipalidad',
      texto: 'Modernizar la municipalidad.',
      imagen: municipalidad,
      altImagen: 'Fachada moderna del edificio de la Municipalidad de La Molina',
    },
  ] satisfies PuntoBase[]).map((punto) => ({
    ...punto,
    imagen: punto.imagen ?? seguridad,
    altImagen:
      punto.altImagen ?? 'Serenazgo de La Molina en la central de seguridad integral',
  })) satisfies Punto[],
}
