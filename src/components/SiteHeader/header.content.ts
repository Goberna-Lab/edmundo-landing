export const headerContent = {
  /** El logo va en dos líneas, como en el diseño. */
  marca: { linea1: 'Edmundo', linea2: 'Del Aguila' },

  /**
   * Los labels salen del diseño; el href tiene que coincidir con el id del
   * <section>, si no el scroll-spy no marca la sección activa.
   */
  nav: [
    { label: 'Sobre mí', href: '#quien-es' },
    { label: 'Trayectoria', href: '#trayectoria' },
    { label: 'Modelo de gestión', href: '#modelo-de-gestion' },
    { label: 'Ejes', href: '#ejes-para-la-molina' },
    // "Propuestas" en el diseño: la sección donde el vecino deja la suya.
    { label: 'Propuestas', href: '#la-molina-adelante' },

    // FALTA: el diseño tiene "ARTÍCULOS" pero no existe una sección de
    // artículos/blog. Queda afuera a propósito: un link del nav que no lleva
    // a ningún lado es un bug. Descomentar cuando exista la sección.
    // { label: 'Artículos', href: '#articulos' },
  ],
}
