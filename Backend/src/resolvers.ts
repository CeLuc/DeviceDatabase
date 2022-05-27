const { prisma } = require("./prisma/client");

export const resolvers = {
  Query: {
    pcs: () => {
      return prisma.PC.findMany({
        include: {
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
          pcs: true,
        },
      });
    },
  },
};
