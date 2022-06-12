import { transformDocument } from "@prisma/client/runtime";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { prisma } = require("./prisma/client");
const { decodedToken } = require("./decodedToken");

export const resolvers = {
  Query: {
    users: async (root: any, args: any, { req }: any, info: any) => {
      const decoded = decodedToken(req);
      return prisma.User.findMany();
    },
    pcs: () => {
      return prisma.PC.findMany({
        include: {
          network: true,
          house: {
            include: {
              rooms: true,
            },
          },
          room: {
            include: {
              house: true,
            },
          },
        },
      });
    },
    pc: (parent: any, { id, hostname, ip }: any) => {
      return prisma.PC.findUnique({
        where: {
          id: id,
          hostname: hostname,
          ip: ip,
        },
        include: {
          network: true,
          house: {
            include: {
              rooms: true,
            },
          },
          room: {
            include: {
              house: true,
            },
          },
        },
      });
    },
    houses: () => {
      return prisma.house.findMany({
        include: {
          pcs: {
            include: {
              network: true,
              room: true,
            },
          },
          rooms: {
            include: {
              pcs: {
                include: {
                  network: true,
                  room: true,
                },
              },
            },
          },
        },
      });
    },
    house: (parent: any, { id, number }: any) => {
      return prisma.house.findUnique({
        where: {
          id: id,
          number: number,
        },
        include: {
          pcs: {
            include: {
              network: true,
              room: true,
            },
          },
          rooms: {
            include: {
              pcs: {
                include: {
                  network: true,
                  room: true,
                },
              },
            },
          },
        },
      });
    },
    rooms: () => {
      return prisma.room.findMany({
        include: {
          pcs: {
            include: {
              network: true,
              house: true,
            },
          },
          house: {
            include: {
              pcs: {
                include: {
                  network: true,
                  house: true,
                },
              },
            },
          },
        },
      });
    },
    room: (parent: any, { id, name }: any) => {
      return prisma.room.findUnique({
        where: {
          id: id,
          name: name,
        },
        include: {
          pcs: {
            include: {
              network: true,
              house: true,
            },
          },
          house: {
            include: {
              pcs: {
                include: {
                  network: true,
                  house: true,
                },
              },
              rooms: true,
            },
          },
        },
      });
    },
    networks: () => {
      return prisma.network.findMany({
        include: {
          pcs: {
            include: {
              network: true,
              house: true,
              room: true,
            },
          },
        },
      });
    },
    network: (parent: any, { id, name }: any) => {
      return prisma.room.findUnique({
        where: {
          id: id,
          name: name,
        },
        include: {
          pcs: {
            include: {
              network: true,
              house: true,
              room: true,
            },
          },
        },
      });
    },
  },

  Mutation: {
    // Create Mutations
    addPc: async (
      _: any,
      { hostname, ip, network, networkId, house, houseId, room, roomId }: any
    ) => {
      const pc = await prisma.PC.create({
        data: {
          hostname: hostname,
          ip: ip,
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
    // Delete Mutations
    delPc: async (_: any, { id, hostname, ip }: any) => {
      const pc = await prisma.PC.delete({
        where: {
          id: id,
          hostname: hostname,
          ip: ip,
        },
      });
      if (pc) {
        return pc;
      }
    },
    delNetwork: async (_: any, { id, name }: any) => {
      const network = await prisma.Network.delete({
        where: {
          id: id,
          name: name,
        },
      });
      if (network) {
        return network;
      }
    },
    delHouse: async (_: any, { id, number }: any) => {
      const house = await prisma.PC.delete({
        where: {
          id: id,
          number: number,
        },
      });
      if (house) {
        return house;
      }
    },
    delRoom: async (_: any, { id, name }: any) => {
      const room = await prisma.PC.delete({
        where: {
          id: id,
          name: name,
        },
      });
      if (room) {
        return room;
      }
    },
    // Authentication
    signupUser: async (root: any, args: any) => {
      const {
        data: { email, name, password },
      } = args;
      const newUser = await prisma.User.create({
        data: {
          email: email,
          name: name,
          password: bcrypt.hashSync(password, 3),
        },
      });
      return { token: jwt.sign(newUser, "supersecret") };
    },
    loginUser: async (root: any, args: any) => {
      const {
        data: { email, password },
      } = args;
      const theUser = await prisma.User.findUnique({
        where: {
          email,
        },
      });
      if (!theUser) throw new Error("Unable to Login");
      const isMatch = bcrypt.compareSync(password, theUser.password);
      if (!isMatch) throw new Error("Unable to Login");
      return { token: jwt.sign(theUser, "supersecret") };
    },
  },
};
