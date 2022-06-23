import { PrismaClient } from "@prisma/client";
const { prisma } = require("./client");
const bcrypt = require("bcrypt");

async function main() {
  const gruberl = await prisma.User.upsert({
    where: { username: "gruberl" },
    updated: {},
    create: {
      username: "gruberl",
      name: "Gruber Lucas",
      password: bcrypt.hashSync("asdf", 3),
    },
  });
  const hertelj = await prisma.User.upsert({
    where: { username: "hertelj" },
    updated: {},
    create: {
      username: "hertelj",
      name: "Hertel Jan-Oliver",
      password: bcrypt.hashSync("asdf", 3),
    },
  });
  const karlc = await prisma.User.upsert({
    where: { username: "karlc" },
    updated: {},
    create: {
      username: "karlc",
      name: "Karl Cevin",
      password: bcrypt.hashSync("asdf", 3),
    },
  });

  const h1 = await prisma.House.upsert({
    where: { number: 1 },
    update: {},
    create: {
      number: 1,
    },
  });
  const h8 = await prisma.House.upsert({
    where: { number: 8 },
    update: {},
    create: {
      number: 8,
    },
  });

  const r1 = await prisma.Room.upsert({
    where: { name: "testRoom1" },
    update: {},
    create: {
      name: "testRoom1",
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
  const sr3 = await prisma.Room.upsert({
    where: { name: "Schulungsraum 3" },
    update: {},
    create: {
      name: "Schulungsraum 3",
      house: {
        connect: {
          number: 8,
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
  const s03 = await prisma.Network.upsert({
    where: { name: "Schul03" },
    update: {},
    create: {
      name: "Schul03",
    },
  });

  const p0094 = await prisma.PC.upsert({
    where: { hostname: "A-BJE-P0094" },
    update: {},
    create: {
      hostname: "A-BJE-P0094",
      ip: "172.21.2.94",
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
          name: "testRoom1",
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
      ip: "172.21.2.105",
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
          name: "testRoom1",
        },
      },
    },
    include: {
      network: true,
      house: true,
      room: true,
    },
  });
  const ps03r301 = await prisma.PC.upsert({
    where: { hostname: "A-BJE-PS03R3-1" },
    update: {},
    create: {
      hostname: "A-BJE-PS03R3-1",
      ip: "dhcp",
      network: {
        connect: {
          name: "FSE",
        },
      },
      house: {
        connect: {
          number: 8,
        },
      },
      room: {
        connect: {
          name: "Schulungsraum 3",
        },
      },
    },
    include: {
      network: true,
      house: true,
      room: true,
    },
  });
  const ps03r302 = await prisma.PC.upsert({
    where: { hostname: "A-BJE-PS03R3-2" },
    update: {},
    create: {
      hostname: "A-BJE-PS03R3-2",
      ip: "dhcp",
      network: {
        connect: {
          name: "Schul03",
        },
      },
      house: {
        connect: {
          number: 8,
        },
      },
      room: {
        connect: {
          name: "Schulungsraum 3",
        },
      },
    },
    include: {
      network: true,
      house: true,
      room: true,
    },
  });
  console.log({
    h1,
    h8,
    r1,
    sr3,
    fse,
    s03,
    p0094,
    p0105,
    ps03r301,
    ps03r302,
    gruberl,
    hertelj,
    karlc,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
