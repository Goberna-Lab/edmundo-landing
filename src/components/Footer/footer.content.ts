export type Red = 'facebook' | 'instagram' | 'x' | 'tiktok'

export interface Enlace {
  label: string
  href: string
}

export const footerContent = {
  marca: { linea1: 'Edmundo', linea2: 'Del Aguila' },

  /*
   * Dos columnas, como el diseño. Los dos títulos dicen "Enlaces" igual que
   * en Figma; se distinguen por el aria-label, que es lo que oye un lector
   * de pantalla.
   */
  columnas: [
    {
      titulo: 'Enlaces',
      etiqueta: 'Sobre el candidato',
      enlaces: [
        { label: 'Sobre mí', href: '#quien-es' },
        { label: 'Legado', href: '#lo-que-me-mueve' },
        { label: 'Trayectoria', href: '#trayectoria' },
      ] satisfies Enlace[],
    },
    {
      titulo: 'Enlaces',
      etiqueta: 'Propuestas y artículos',
      enlaces: [
        { label: 'Propuestas', href: '#la-molina-adelante' },
        { label: 'Artículos', href: '#la-voz-de-la-molina' },
      ] satisfies Enlace[],
    },
  ],

  redes: [
    { red: 'facebook' as Red, handle: 'eddelaguila', href: '[[facebook]]' },
    { red: 'instagram' as Red, handle: 'eddelaguila', href: '[[instagram]]' },
    { red: 'x' as Red, handle: 'eddelaguila', href: '[[x]]' },
    { red: 'tiktok' as Red, handle: 'eddelaguila', href: '[[tiktok]]' },
  ],

  /** El cuadro de 108×108 del diseño: en Figma quedó vacío, sin imagen. */
  imagenQr: '[[imagen-qr]]',
  altQr: 'Código QR de la campaña',

  subir: 'Volver arriba',
  legal: '[[pie-legal]]',
}
