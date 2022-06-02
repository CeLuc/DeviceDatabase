import { PrismaClient } from "@prisma/client";
const { prisma } = require("./client");

async function main() {
  const h1 = await prisma.House.upsert({
    where: { number: 1 },
    update: {},
    create: {
      number: 1,
    },
  });

  const r1 = await prisma.Room.upsert({
    where: { name: "RoomtEst1" },
    update: {},
    create: {
      name: "RoomtEst1",
      house: {
        connect: {
          number: 1,
        },
      },
    },
    include: {
      house: true,
    },
  });

  const fse = await prisma.Network.upsert({
    where: { name: "FSE" },
    update: {},
    create: {
      name: "FSE",
    },
  });

  const p0094 = await prisma.PC.upsert({
    where: { hostname: "A-BJE-P0094" },
    update: {},
    create: {
      hostname: "A-BJE-P0094",
      staticip: false,
      network: {
        connect: {
          name: "FSE",
        },
      },
      house: {
        connect: {
          number: 1,
        },
      },
      room: {
        connect: {
          name: "RoomtEst1",
        },
      },
    },
    include: {
      network: true,
      house: true,
      room: true,
    },
  });
  const p0105 = await prisma.PC.upsert({
    where: { hostname: "A-BJE-P0105" },
    update: {},
    create: {
      hostname: "A-BJE-P0105",
      staticip: false,
      network: {
        connect: {
          name: "FSE",
        },
      },
      house: {
        connect: {
          number: 1,
        },
      },
      room: {
        connect: {
          name: "RoomtEst1",
        },
      },
    },
    include: {
      network: true,
      house: true,
      room: true,
    },
  });
  console.log({ h1, r1, fse, p0094, p0105 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
