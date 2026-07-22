# landing-template

Template de landings de campaña para Goberna. Vite + React + TypeScript, con el
comportamiento compartido en [`@goberna/landing-kit`](https://github.com/Goberna-Lab/landing-kit).

## Landing nueva en 4 pasos

```bash
# 1. Clonar el template sin su historial de git
npx degit Goberna-Lab/landing-template mi-landing
cd mi-landing

# 2. Completar los datos del candidato
cp landing.example.json landing.json
$EDITOR landing.json
node setup.mjs landing.json

# 3. Instalar y levantar
npm install
npm run dev

# 4. Reemplazar los assets placeholder
#    src/assets/logo.svg, src/assets/hero.png, public/favicon.svg, public/og.jpg
```

Más rápido todavía: el skill `crear-landing` (en `ia-skills`) hace los pasos 1–3
a partir de un brief en lenguaje natural.

## Qué trae

| | |
|---|---|
| Header | Del kit: menú mobile accesible, scroll-spy, sombra al scrollear |
| Secciones | Hero, Trayectoria (timeline), Propuestas (cards), Contacto (form) |
| Footer | Marca, redes, pie legal |
| Tokens | Color, tipografía y ritmo centralizados en `src/styles/tokens.css` |
| Base | Reset, utilidades (`.container`, `.section`, `.btn`), foco visible |
| `setup.mjs` | Reemplaza los `[[placeholder]]` y verifica que no quede ninguno |

## Por qué está armado así

El diseño de cada candidato es distinto, así que **el CSS nunca se comparte**.
Lo que sí se repetía en cada landing —el estado del menú mobile, el ARIA del
botón hamburguesa, el scroll-spy— vive en el kit y se escribe una sola vez.

Las convenciones (`[[placeholder]]`, `AGENTS.md`, secciones en carpetas) son las
mismas que ya usás en `estructura-landing`, para no tener que aprender dos
sistemas distintos.

Ver [AGENTS.md](./AGENTS.md) para las reglas del proyecto.

## Deploy

Ver [DEPLOY.md](./DEPLOY.md).
