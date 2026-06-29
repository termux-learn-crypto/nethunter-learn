import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

const jsdom = await import('jsdom')
const { JSDOM } = jsdom
const dom = new JSDOM('<!DOCTYPE html><html lang="hi"><body><div id="root"></div></body></html>', {
  url: 'https://nethunter-learn.vercel.app',
  pretendToBeVisual: true,
  storageQuota: 10000000,
})

global.window = dom.window
global.document = dom.window.document
Object.defineProperty(global, 'navigator', { value: dom.window.navigator, writable: true, configurable: true })
global.self = dom.window
global.HTMLElement = dom.window.HTMLElement
global.localStorage = dom.window.localStorage
global.MutationObserver = dom.window.MutationObserver
global.getComputedStyle = dom.window.getComputedStyle

const { createServer } = await import('vite')

const vite = await createServer({
  root,
  logLevel: 'warn',
  server: { middlewareMode: true },
  appType: 'spa',
})

// Init loads all pages eagerly for SSR render
const entry = await vite.ssrLoadModule('/src/entry-server.jsx')
await entry.init()

const htmlTemplate = readFileSync(resolve(root, 'dist/index.html'), 'utf8')

const tools = (await vite.ssrLoadModule('/src/data/tools.js')).default
const routes = [
  '/', '/installation', '/wifi', '/bluetooth', '/payloads', '/tools',
  '/about', '/privacy-policy', '/terms', '/disclaimer', '/dmca',
  '/contact', '/blog', '/learning-paths', '/compare', '/glossary',
  '/cheatsheets', '/news', '/community', '/sitemap',
  ...tools.map(t => t.route),
]

console.log(`Prerendering ${routes.length} routes...`)

for (const route of routes) {
  if (route.includes(':slug')) continue

  const routeDir = route === '/' ? '' : route.slice(1)
  const outDir = resolve(root, 'dist', routeDir)
  const outFile = resolve(outDir, 'index.html')

  try {
    const appHtml = entry.render(route)
    const fullHtml = htmlTemplate.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    )

    mkdirSync(outDir, { recursive: true })
    writeFileSync(outFile, fullHtml)
    console.log(`  ✓ ${route}`)
  } catch (err) {
    console.error(`  ✗ ${route}: ${err.message}`)
  }
}

await vite.close()
console.log('\nPrerendering complete!')
