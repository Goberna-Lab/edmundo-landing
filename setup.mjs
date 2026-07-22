#!/usr/bin/env node
/**
 * setup.mjs — convierte el template en una landing concreta.
 *
 * Reemplaza los placeholders [[...]] en todo el proyecto. Sin dependencias.
 *
 *   node setup.mjs --list             lista los placeholders que faltan completar
 *   node setup.mjs landing.json       aplica los valores del JSON
 *   node setup.mjs --check            sale con código 1 si queda algún [[...]]
 *
 * El --check es la red de seguridad antes de publicar: en el mundo HTML el
 * riesgo era publicar con un [[slug-del-curso]] sin reemplazar y romper la OG.
 */
import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { dirname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(fileURLToPath(import.meta.url))
const IGNORAR = new Set(['node_modules', 'dist', '.git', '.claude'])
/*
 * Los .md quedan afuera a propósito: README y AGENTS *documentan* la
 * convención [[placeholder]], no son contenido de la landing. Si se
 * escanearan, sus ejemplos se contarían como pendientes.
 */
const EXTENSIONES = /\.(tsx?|jsx?|css|html|json|svg|mjs)$/

/**
 * Solo minúsculas a propósito. Así se distinguen dos cosas distintas:
 *   [[candidato]]     valor a reemplazar por setup.mjs
 *   [[POR-LANDING]]   marcador de "revisá esto a mano" (no es un valor)
 */
const PLACEHOLDER = /\[\[([a-z0-9-]+)\]\]/g

/** Todos los archivos de texto del proyecto, recursivo. */
function archivos(dir = root) {
  const salida = []
  for (const entrada of readdirSync(dir)) {
    if (IGNORAR.has(entrada)) continue
    const ruta = join(dir, entrada)
    if (statSync(ruta).isDirectory()) salida.push(...archivos(ruta))
    else if (EXTENSIONES.test(entrada) && entrada !== 'setup.mjs') salida.push(ruta)
  }
  return salida
}

/** Map de placeholder → archivos donde aparece. */
function encontrarPlaceholders() {
  const encontrados = new Map()
  for (const ruta of archivos()) {
    const texto = readFileSync(ruta, 'utf8')
    for (const [, nombre] of texto.matchAll(PLACEHOLDER)) {
      if (!encontrados.has(nombre)) encontrados.set(nombre, new Set())
      encontrados.get(nombre).add(relative(root, ruta))
    }
  }
  return encontrados
}

const arg = process.argv[2]

if (!arg || arg === '--list') {
  const encontrados = encontrarPlaceholders()
  if (encontrados.size === 0) {
    console.log('No quedan placeholders. La landing ya está configurada.')
    process.exit(0)
  }
  console.log(`${encontrados.size} placeholders por completar:\n`)
  for (const [nombre, archivosDelPlaceholder] of [...encontrados].sort()) {
    console.log(`  [[${nombre}]]`)
    for (const f of archivosDelPlaceholder) console.log(`      ${f}`)
  }
  console.log('\nCompletá un JSON con esas claves y corré: node setup.mjs landing.json')
  process.exit(0)
}

if (arg === '--check') {
  const encontrados = encontrarPlaceholders()
  if (encontrados.size > 0) {
    console.error(`Faltan ${encontrados.size} placeholders sin reemplazar:`)
    for (const [nombre] of [...encontrados].sort()) console.error(`  [[${nombre}]]`)
    console.error('\nNo publiques así: la OG y la canonical quedarían rotas.')
    process.exit(1)
  }
  console.log('OK — no quedan placeholders.')
  process.exit(0)
}

// ---- Aplicar un JSON de configuración ----
let config
try {
  config = JSON.parse(readFileSync(join(root, arg), 'utf8'))
} catch (error) {
  console.error(`No pude leer "${arg}": ${error.message}`)
  process.exit(1)
}

const pendientes = encontrarPlaceholders()
const sinValor = [...pendientes.keys()].filter((nombre) => !(nombre in config))
// Las claves con _ adelante son comentarios del JSON, no valores.
const sinUsar = Object.keys(config).filter(
  (clave) => !clave.startsWith('_') && !pendientes.has(clave),
)

let archivosTocados = 0
let reemplazos = 0

for (const ruta of archivos()) {
  const original = readFileSync(ruta, 'utf8')
  const nuevo = original.replace(PLACEHOLDER, (match, nombre) => {
    if (!(nombre in config)) return match
    reemplazos++
    return String(config[nombre])
  })
  if (nuevo !== original) {
    writeFileSync(ruta, nuevo)
    archivosTocados++
  }
}

console.log(`${reemplazos} reemplazos en ${archivosTocados} archivos.`)

if (sinUsar.length > 0) {
  console.warn(`\nClaves del JSON que no se usaron: ${sinUsar.join(', ')}`)
}

if (sinValor.length > 0) {
  console.warn(`\nQuedan ${sinValor.length} placeholders sin valor en el JSON:`)
  for (const nombre of sinValor) console.warn(`  [[${nombre}]]`)
  console.warn('\nCorré "node setup.mjs --check" antes de publicar.')
  process.exit(1)
}

console.log('\nListo. Siguiente: npm install && npm run dev')
