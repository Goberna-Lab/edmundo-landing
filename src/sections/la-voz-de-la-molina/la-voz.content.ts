import nota1 from './assets/nota-1.webp'
import nota2 from './assets/nota-2.webp'
import nota3 from './assets/nota-3.webp'

export interface Nota {
  id: string
  titulo: string
  bajada: string
  /** ISO (YYYY-MM-DD): alimenta el <time datetime>, el chip del mes y la fecha. */
  fecha: string
  imagen: string
  altImagen: string
  /** A dónde lleva. Por ahora externo; si algún día hay blog propio, será una ruta. */
  url: string
}

/**
 * Destino de la nota destacada. El botón "Ver todo" y la propia nota-1
 * comparten este link: mientras no haya un listado aparte, el botón abre la
 * nota destacada, y cuando llegue la URL real se cambia acá una sola vez.
 */
const nota1Url = '[[nota-1-url]]'

export const laVozContent = {
  titulo: 'La Voz de La Molina',
  /** Solo lo oyen los lectores de pantalla: el diseño no muestra este rótulo. */
  etiquetaCarrusel: 'Notas de La Voz de La Molina',
  anterior: 'Ver notas anteriores',
  siguiente: 'Ver notas siguientes',
  leerMas: 'Leer nota completa',
  /* Botón del diseño mobile. Comparte destino con la nota-1 (ver nota1Url). */
  verTodo: { label: 'Ver todo', url: nota1Url },

  notas: [
    {
      id: 'nota-1',
      titulo: 'La Molina, un distrito para disfrutar en familia.',
      bajada:
        'Cada día, miles de vecinos de La Molina pasan demasiado tiempo atrapados en el tránsito. Salir de casa para trabajar, estudiar, llevar a los niños al colegio.',
      fecha: '2026-07-20',
      imagen: nota1,
      altImagen: 'Una familia sentada en el pasto de un parque de La Molina',
      url: nota1Url,
    },
    {
      id: 'nota-2',
      titulo: 'El deporte como punto de encuentro para nuestros vecinos',
      bajada:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since 1966, when designers',
      fecha: '2026-07-20',
      imagen: nota2,
      altImagen: 'Chicos jugando fútbol en una losa deportiva del distrito',
      url: '[[nota-2-url]]',
    },
    {
      id: 'nota-3',
      titulo: 'Nuestros parques, el mejor lugar para volver a encontrarnos',
      bajada:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since 1966, when designers',
      fecha: '2026-07-20',
      imagen: nota3,
      altImagen: 'Alameda arbolada de La Molina con vecinos caminando',
      url: '[[nota-3-url]]',
    },
  ] satisfies Nota[],
}
