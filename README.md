 ## Stack

Fullstack starter template for **Nuxt 3 (with Vitesse)**, **TRPC**, **Tanstack Vue Query**, **Prisma**, and **Postgres**. There is a docker-compose file for a postgres db for dev. I am using supabase for a cloud hosting option. Tested on Netlify and Vercel.

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

2. create a .env file at the root of your project. If you are using supabase follow this **[guide](https://supabase.com/docs/guides/integrations/prisma)**.
  For more information about the postgres connection URL check out this **[guide](https://www.prisma.io/docs/concepts/database-connectors/postgresql)**
```
DATABASE_URL = <your postgres connection url>
```

3. if using the docker-compose postgres db, start the container.
```
cd server/db
docker-compose up -d
```

4. Sync the prisma schema with postgres.
`pnpm prisma db pull`

`pnpm prisma generate`

`pnpm prisma migrate dev --name init`

5. Start Nuxt dev server
`pnpm dev`


## Hosting on Netlify or Vercel

Follow setup docs and link your repo with hosting service. The only way I got it to work was building the project on Netlify or Vercel. I couldn't build locally with Netlify CLI and deploy. For example, this **DID NOT WORK** `pnpm netlify deploy --build`

Make sure to add the DATABASE_URL env var to the ui of your hosting service. This is how the env var is made available to your serverless functions.

The URL is different from the dev url, see the example env file for more info.
