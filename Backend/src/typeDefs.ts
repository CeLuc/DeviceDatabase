import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    pcs: [PC]!
    houses: [House]!
    rooms: [Room]!
    networks: [Network]!
  }

  type PC {
    id: ID!
    hostname: String!
    staticip: Boolean!
    network: Network
    house: House
    room: Room
  }

  type House {
    id: ID
    number: Int!
    rooms: [Room]
    pcs: [PC]
  }

  type Room {
    id: ID!
    name: String!
    house: House!
    pcs: [PC]
  }

  type Network {
    id: ID!
    name: String!
  }
`;
