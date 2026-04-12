import { createServer } from 'http'
import { parse } from 'url'
import next from 'next'

const PORT = 2000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    handle(req, res, parsedUrl)
  }).listen(PORT, (err) => {
    if (err) throw err
    console.log(`> DigitalIQ ready on http://localhost:${PORT}`)
  })
})
