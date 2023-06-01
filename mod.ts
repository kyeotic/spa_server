import { serve } from 'https://deno.land/std@0.190.0/http/server.ts'
import { serveDir } from 'https://deno.land/std@0.190.0/http/file_server.ts'

serve(async (req) => {
  let res = await serveDir(req)

  if (res.status == 404) {
    const index = new URL(req.url)
    index.pathname = 'index.html'
    res = await serveDir(new Request(index, req))
  }

  console.log('res', res)
  return res
})
