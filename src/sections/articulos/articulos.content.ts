import articulo1 from './assets/articulo-1.webp'
import articulo2 from './assets/articulo-2.webp'
import articulo3 from './assets/articulo-3.webp'

export interface Articulo {
  id: string
  titulo: string
  bajada: string
  /** ISO (YYYY-MM-DD): alimenta el <time datetime> y se formatea al mostrar. */
  fecha: string
  categoria: string
  imagen: string
  /** A dónde lleva. Por ahora externo; si algún día hay blog propio, será una ruta. */
  url: string
}

export const articulosContent = {
  kicker: 'Artículos',
  titulo: 'Lo que pienso, por escrito',
  intro: '[[articulos-intro]]',
  verTodos: { label: 'Ver todos los artículos', url: '[[articulos-url-todos]]' },
  articulos: [
    {
      id: 'articulo-1',
      titulo: '[[articulo-1-titulo]]',
      bajada: '[[articulo-1-bajada]]',
      fecha: '[[articulo-1-fecha]]',
      categoria: '[[articulo-1-categoria]]',
      imagen: articulo1,
      url: '[[articulo-1-url]]',
    },
    {
      id: 'articulo-2',
      titulo: '[[articulo-2-titulo]]',
      bajada: '[[articulo-2-bajada]]',
      fecha: '[[articulo-2-fecha]]',
      categoria: '[[articulo-2-categoria]]',
      imagen: articulo2,
      url: '[[articulo-2-url]]',
    },
    {
      id: 'articulo-3',
      titulo: '[[articulo-3-titulo]]',
      bajada: '[[articulo-3-bajada]]',
      fecha: '[[articulo-3-fecha]]',
      categoria: '[[articulo-3-categoria]]',
      imagen: articulo3,
      url: '[[articulo-3-url]]',
    },
  ] satisfies Articulo[],
}
