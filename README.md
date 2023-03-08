 ## Stack

Fullstack starter template for **Nuxt 3 (with Vitesse)**, **TRPC**, **Tanstack Vue Query**, **Prisma**, and **Postgres**. Quickstart db is sqlite. Supabase for something more permanent. Deploys on Netlify and Vercel (verified).

- **[Vitesse for Nuxt 3](https://github.com/antfu/vitesse-nuxt3)**
- **[tRPC-Nuxt](https://github.com/wobsoriano/trpc-nuxt)**
- **[TanStack Query](https://tanstack.com/query/v4)**
- **[Prisma](https://www.prisma.io/)**
- **[supabase](https://supabase.com/)**

## Get Started

1. Clone the project

```
npx degit kylegl/nuxt-trpc-tanstack-query-prisma my-nuxt3-app
cd my-nuxt3-app
pnpm i
```

2. Setup database
  - Create a .env file at the root of your project

  - SQLITE
    - In the server/db folder create a dev.db file.
    - add to .env
    ```
    # dev sqlite
    DATABASE_URL = "file:./server/db/dev.db"
    ```

- Supabase
  - To setup supabase follow this **[guide](https://supabase.com/docs/guides/integrations/prisma)**.
  - For more information about the postgres connection URL check out this **[guide](https://www.prisma.io/docs/concepts/database-connectors/postgresql)**
  - see .env.example for examples.

-  Docker
    ```
    cd server/db
    docker-compose up -d
    ```
    - add url to .env
    ```
    DATABASE_URL = "postgresql://postgres:postgres@DOCKER-HOST-IP/postgres?schema=public"
    ```

4. Sync the prisma schema with your db.
`pnpm prisma:push`


5. Start Nuxt dev server
`pnpm dev`


## Hosting on Netlify or Vercel

- Follow setup docs and link your repo with hosting service. I had issues building locally with Netlify CLI to deploy.

- Add the DATABASE_URL env var to your hosting service.
  - Serverless Supabase should use connection pooling. The url is different from your dev url. See .example.env for more info. 
