Fullstack starter template for **Nuxt 3 (with Vitesse)**, **TRPC**, **Tanstack Vue Query**, **Prisma**, and **Postgres**. There is a docker-compose file for a postgres db for dev. I am using supabase for a cloud hosting option

- **[Vitesse for Nuxt 3](https://github.com/antfu/vitesse-nuxt3)**
- **[tRPC-Nuxt](https://github.com/wobsoriano/trpc-nuxt)**
- **[TanStack Query](https://tanstack.com/query/v4)**
- **[Prisma](https://www.prisma.io/)**
- **[supabase](https://supabase.com/)**

## Instructions

1. Clone the project

```
npx degit kylegl/nuxt-trpc my-nuxt3-trpc-app
cd my-nuxt3-trpc-app
pnpm i
```

2. create a .env file at the root of your project. If you are using supabase follow this **[guide](https://supabase.com/docs/guides/integrations/prisma)**

For more information about the postgres connection URL check out this **[guide](https://www.prisma.io/docs/concepts/database-connectors/postgresql)
```
DATABASE_URL = <your postgres connection url>
```

3. if using the docker-compose postgres db, start the container.
```
cd server/db
docker-compose up -d
```

4. Sync the prisma schema with postgres.
`pnpm prisma migrate dev --name init`

5. Start Nuxt dev server
`pnpm dev`
