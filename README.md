# spa_server

Deno std library has a handy [file_server](https://deno.land/std@0.190.0/http/file_server.ts) that can be used by Deno Deploy for Static Sites *very easily*

```
deployctl deploy --prod --project=$PROJECT_NAME https://deno.land/std@0.171.0/http/file_server.ts
```

This fails if you are using deep links for dynamic pages. There is no file backing `http://example.com/users/whoever`; the SPA is expected to handle rendering.
This project is a tiny wrapper that falls back to the index in cases where the file is not found.
