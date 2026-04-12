import { chromium } from 'playwright'
import { mkdirSync } from 'fs'

const BASE = 'http://localhost:2000'
const OUT = './screenshots'
mkdirSync(OUT, { recursive: true })

// Key checkpoint pages only
const routes = [
  { name: '01-home', path: '/' },
  { name: '04-services', path: '/services' },
  { name: '05-start-now', path: '/start-now' },
  { name: '06-performance', path: '/services/performance' },
]

// Mark intro as seen so pages render immediately visible
const initScript = () => {
  Object.defineProperty(window, 'localStorage', {
    value: {
      getItem: (key) => key === 'diq_intro_seen' ? '1' : null,
      setItem: () => {},
      removeItem: () => {},
    },
    writable: false,
  })
}

async function scrollAndSettle(page) {
  await page.evaluate(async () => {
    const pageHeight = document.documentElement.scrollHeight
    const step = 300
    for (let y = 0; y < pageHeight; y += step) {
      window.scrollTo(0, y)
      await new Promise(r => setTimeout(r, 180))
    }
    window.scrollTo(0, 0)
  })
  // Wait for all IntersectionObserver callbacks to fire and React to re-render
  await page.waitForTimeout(2500)
}

// Desktop screenshots
const browser = await chromium.launch({ headless: true })
const desktopCtx = await browser.newContext({ viewport: { width: 1440, height: 900 } })
await desktopCtx.addInitScript(initScript)
const desktopPage = await desktopCtx.newPage()

for (const route of routes) {
  console.log(`Desktop — ${route.path}`)
  await desktopPage.goto(`${BASE}${route.path}`, { waitUntil: 'networkidle' })
  await desktopPage.waitForTimeout(1500)
  await scrollAndSettle(desktopPage)

  await desktopPage.screenshot({ path: `${OUT}/${route.name}.png`, fullPage: true })
  await desktopPage.screenshot({ path: `${OUT}/${route.name}-fold.png`, fullPage: false })
  console.log(`  ✓ ${route.name}`)
}

await desktopCtx.close()

// Mobile screenshots (390px — iPhone 14 Pro width)
const mobileCtx = await browser.newContext({
  viewport: { width: 390, height: 844 },
  userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
})
await mobileCtx.addInitScript(initScript)
const mobilePage = await mobileCtx.newPage()

const mobileRoutes = [
  { name: 'mobile-home', path: '/' },
  { name: 'mobile-services', path: '/services' },
]

for (const route of mobileRoutes) {
  console.log(`Mobile — ${route.path}`)
  await mobilePage.goto(`${BASE}${route.path}`, { waitUntil: 'networkidle' })
  await mobilePage.waitForTimeout(1500)
  await scrollAndSettle(mobilePage)

  await mobilePage.screenshot({ path: `${OUT}/${route.name}-fold.png`, fullPage: false })
  console.log(`  ✓ ${route.name}`)
}

await mobileCtx.close()
await browser.close()
console.log('\nAll screenshots saved to ./screenshots/')
