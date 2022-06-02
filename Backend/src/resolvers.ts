const { prisma } = require("./prisma/client");

export const resolvers = {
  Query: {
    pcs: () => {
      return prisma.PC.findMany({
        include: {
          network: true,
          house: true,
          room: true,
        },
      });
    },
    pc: (parent: any, args: any) => {
      return prisma.PC.findUnique({
        where: {
          id: args.id,
          hostname: args.hostname,
        },
        include: {
          network: true,
          house: true,
          room: true,
        },
      });
    },
    houses: () => {
      return prisma.house.findMany({
        include: {
          pcs: true,
          rooms: true,
        },
      });
    },
    rooms: () => {
      return prisma.room.findMany({
        include: {
          house: true,
          pcs: {
            include: {
              network: true,
            },
          },
        },
      });
    },
    networks: () => {
      return prisma.network.findMany({
        include: {
          pcs: true,
        },
      });
    },
  },

  Mutation: {
    addPc: async (
      _: any,
      {
        hostname,
        staticip,
        network,
        networkId,
        house,
        houseId,
        room,
        roomId,
      }: any
    ) => {
      const pc = await prisma.PC.create({
        data: {
          hostname: hostname,
          staticip: staticip,
          network: {
            connect: { id: networkId, name: network },
          },
          house: { connect: { id: houseId, number: house } },
          room: { connect: { id: roomId, name: room } },
        },
        include: {
          network: true,
          house: true,
          room: true,
        },
      });
      if (pc) {
        return pc;
      }
    },
    addNetwork: async (_: any, { name }: any) => {
      const network = await prisma.Network.create({
        data: {
          name: name,
        },
      });
      if (network) {
        return network;
      }
    },
    addHouse: async (_: any, { number }: any) => {
      const house = await prisma.House.create({
        data: {
          number: number,
        },
      });
      if (house) {
        return house;
      }
    },
    addRoom: async (_: any, { name, house, houseId }: any) => {
      const room = await prisma.Room.create({
        data: {
          name: name,
          house: { connect: { id: houseId, number: house } },
        },
        include: {
          house: true,
        },
      });
      if (room) {
        return room;
      }
    },
  },
};
