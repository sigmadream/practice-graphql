import "reflect-metadata";
import express from "express";
import http from "http";
import cors from "cors";

import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";

import { buildSchema } from "type-graphql";
import { FilmResolver } from "./resolvers/Film";
import { CutResolver } from "./resolvers/Cut";

async function main() {
  const app = express();
  const httpServer = http.createServer(app);
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [FilmResolver, CutResolver],
    }),
    plugins: [ApolloServerPluginLandingPageLocalDefault()],
  });
  await apolloServer.start();
  app.use(
    "/graphql",
    cors<cors.CorsRequest>(),
    express.json(),
    expressMiddleware(apolloServer)
  );

  httpServer.listen(process.env.PORT || 4000, () => {
    if (process.env.NODE_ENV !== "production") {
      console.log(`
        server started on => http://localhost:4000
        graphql playground => http://localhost:4000/graphql
      `);
    } else {
      console.log(`
        Production server Started...
      `);
    }
  });
}

main().catch((err) => console.error(err));
