# Guía del proyecto (para Claude / agentes)

Landing de campaña sobre **Vite + React + TypeScript**, generada desde
`landing-template`. El comportamiento compartido viene de `@goberna/landing-kit`.

## Reglas que no se rompen

1. **El CSS es local, el comportamiento es del kit.**
   No copies el `Header` del kit a esta landing para tunearlo. Si te falta algo,
   o lo resolvés con una prop (`classNames`, `renderLink`, `cta`) o lo agregás
   al kit y subís un tag. Duplicarlo nos devuelve al problema original.

2. **Nada de valores sueltos: todo sale de `tokens.css`.**
   Si estás por escribir un `#1d4ed8` o un `24px` dentro de una sección, casi
   seguro falta un token. Re-skinear para otro candidato debería ser editar
   `src/styles/tokens.css` y poco más.

3. **El contenido va en `*.content.ts`, nunca hardcodeado en el JSX.**
   Cada sección tiene su archivo de contenido al lado. El `.tsx` es estructura,
   el `.content.ts` es texto. Así se puede reescribir la campaña sin tocar código.

4. **`[[placeholder]]` = falta completar.** Antes de publicar corré
   `node setup.mjs --check`. Si devuelve error, la landing no se publica:
   un `[[slug]]` sin reemplazar rompe la OG y la canonical.
   `[[POR-LANDING]]` en mayúsculas es distinto: es un marcador de "revisá esto
   a mano", no un valor.

## Estructura

```
src/
  styles/tokens.css       ← el 80% del re-skin vive acá
  styles/base.css         ← reset + utilidades (.container .section .btn)
  components/
    SiteHeader/           ← envuelve el <Header> del kit + CSS propio
    Footer/
  sections/
    <seccion>/
      Seccion.tsx         ← estructura
      Seccion.css         ← diseño
      seccion.content.ts  ← texto
  App.tsx                 ← el orden de las secciones = el guion de la landing
```

## Agregar una sección

1. `src/sections/<nombre>/` con los tres archivos (`.tsx`, `.css`, `.content.ts`).
2. Importarla y ubicarla en `App.tsx` en el orden del guion.
3. Si va en el nav, sumarla a `src/components/SiteHeader/header.content.ts`.
   El `id` del `<section>` tiene que coincidir con el `href` del nav para que
   el scroll-spy la marque.

## Comandos

```bash
npm run dev              # servidor local
npm run build            # typecheck + build de producción
npm run lint             # oxlint
node setup.mjs --list    # placeholders pendientes
node setup.mjs --check   # falla si queda alguno (correr antes de publicar)
```

## Accesibilidad y responsive

Antes de dar por cerrada una landing:

- Probar el menú mobile: abre, cierra con Escape, y el fondo no scrollea.
- Sin scroll horizontal en 320px de ancho.
- Los inputs con `font-size` ≥ 16px (si no, iOS hace zoom al enfocar).
- Contraste del color primario sobre blanco ≥ 4.5:1.

Para una pasada más a fondo hay un skill dedicado en `ia-skills/responsive-robustness`.
