import { createServer } from "http";
import express from "express";
import { ApolloServer, gql } from "apollo-server-express";

const startServer = async () => { 

  const app = express()
  const httpServer = createServer(app)

  const typeDefs = gql`
    type Query {
      hello: String
    }
  `;

  const resolvers = {
    Query: {
      hello: () => 'Hello world!',
    },
  };

  // 5
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  })

  await apolloServer.start()

  apolloServer.applyMiddleware({
      app,
      path: '/api'
  })

  httpServer.listen({ port: 4000 }, () =>
    console.log(`Server listening on localhost:4000${apolloServer.graphqlPath}`)
  )
}

startServer()
