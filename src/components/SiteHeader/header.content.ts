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
    // "Propuestas" es la sección donde el vecino deja la suya.
    // Ojo: en la página va DESPUÉS de Artículos (cierra la landing con el
    // formulario), pero en el nav va antes, como pide el diseño.
    { label: 'Propuestas', href: '#la-molina-adelante' },
    { label: 'Artículos', href: '#articulos' },
  ],
}
