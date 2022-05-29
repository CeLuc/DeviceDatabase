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
    addPc: async (_: any, args: any) => {
      const pc = await prisma.PC.create({
        data: {
          hostname: args.hostname,
          staticip: args.staticip,
          network: {
            connect: { id: args.network },
          },
          house: { connect: { id: args.house } },
          room: { connect: { id: args.room } },
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
  },
};
