# Deploy — grupogoberna.com

Igual que las landings HTML, esta se sirve **folder-shadow** en un subdirectorio:

```
https://grupogoberna.com/<slug>/
```

Por eso `vite.config.ts` tiene `base: './'`: todos los assets salen con rutas
relativas y la landing funciona dentro de la carpeta.

## 1. Verificar que no queden placeholders

```bash
node setup.mjs --check
```

Si falla, **no publiques**. El `[[slug]]` aparece como URL **absoluta** en la
`canonical` y en las `og:` de `index.html`. Con un slug mal puesto la página
igual renderiza (el resto de rutas son relativas), pero:

- la **OG queda en 404** → WhatsApp y Facebook no muestran la imagen al compartir
- la **canonical apunta a una URL que no existe** → problema de SEO

El slug del `landing.json` tiene que ser **exacto** al nombre de la carpeta.

## 2. Assets reales

Los que vienen en el template son placeholders. Reemplazar antes de publicar:

| Archivo | Qué es |
|---|---|
| `src/assets/logo.svg` | Logo del candidato (header) |
| `src/assets/hero.png` | Foto principal. Es la imagen LCP: exportar comprimida |
| `public/favicon.svg` | Favicon |
| `public/og.jpg` | Imagen al compartir. **1200×630** |
| `public/icons.svg` | Sprite de iconos de las propuestas |

`public/og.jpg` no viene en el template y **hay que crearlo**: sin él la OG
queda en 404 aunque el slug esté bien.

## 3. Build

```bash
npm run build      # corre tsc -b y después vite build
```

Sale todo en `dist/`. Revisar local antes de subir:

```bash
npm run preview
```

## 4. Subir

```bash
cd dist && zip -r ../<slug>.zip . && cd ..
```

Subir el zip y descomprimir en la carpeta `<slug>/` del hosting.

## 5. Verificación post-deploy

- [ ] `https://grupogoberna.com/<slug>/` carga con estilos e imágenes
- [ ] Compartir el link por WhatsApp y confirmar que aparece la imagen OG
- [ ] Menú mobile: abre, cierra con Escape, el fondo no scrollea
- [ ] Enviar el formulario y confirmar que el lead llega al CRM
- [ ] Sin scroll horizontal en 320px
