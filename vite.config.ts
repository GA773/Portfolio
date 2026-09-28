import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react(),
      {
        name: 'api-contact-middleware',
        configureServer(server) {
          server.middlewares.use('/api/contact', async (req, res) => {
            if (req.method !== 'POST') {
              res.statusCode = 405
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ error: 'Method not allowed' }))
              return
            }

            let raw = ''
            req.on('data', (chunk) => {
              raw += chunk
            })
            req.on('end', async () => {
              try {
                const { createContactHandler } = await import('./server/contact.js')
                const handler = createContactHandler({ env })
                const fakeReq = {
                  method: req.method,
                  headers: req.headers,
                  body: raw,
                  socket: req.socket,
                }
                const fakeRes = {
                  statusCode: 200,
                  setHeader(k: string, v: string) {
                    res.setHeader(k, v)
                  },
                  status(code: number) {
                    this.statusCode = code
                    res.statusCode = code
                    return this
                  },
                  json(data: unknown) {
                    res.setHeader('Content-Type', 'application/json')
                    res.end(JSON.stringify(data))
                    return this
                  },
                }
                await handler(fakeReq as any, fakeRes as any)
              } catch (err: any) {
                res.statusCode = 500
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({ error: err.message }))
              }
            })
          })
        },
      },
    ],
    server: {
      port: 3000,
      open: true,
    },
  }
})
