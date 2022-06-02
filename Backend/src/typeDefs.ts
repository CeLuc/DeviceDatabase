import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    pcs: [PC]!
    pc(id: ID, hostname: String): PC
    houses: [House]!
    house(id: ID, number: Int): House
    rooms: [Room]!
    room(id: ID, name: String): Room
    networks: [Network]!
    network(id: ID, name: String): Network
  }

  type Mutation {
    addPc(
      hostname: String!
      staticip: Boolean!
      network: ID!
      house: ID!
      room: ID!
    ): PC
    addHouse(number: Int!): House
    addRoom(name: String!, house: ID!): Room
    addNetwork(name: String!): Network
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
