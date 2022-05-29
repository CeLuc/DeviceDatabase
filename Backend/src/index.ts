import { createServer } from "http";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";

const startServer = async () => {
  const app = express();
  const httpServer = createServer(app);

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({
    app,
    path: "/graphql",
  });

  httpServer.listen(
    {
      port: process.env.BACKEND_PORT || 4000,
      host: process.env.BACKEND_HOST || "localhost",
    },
    () =>
      console.log(
        `Server listening on ${process.env.BACKEND_HOST || "localhost"}:${
          process.env.BACKEND_PORT || 4000
        }${apolloServer.graphqlPath}`
      )
  );
};

startServer();
