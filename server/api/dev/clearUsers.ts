import { Prisma } from "@prisma/client";
import { usePrisma } from "@sidebase/nuxt-prisma";
const config = useRuntimeConfig()

export default defineEventHandler(async (event) => {
  const prisma = usePrisma(event);

  const userRes = await fetch(config.originUrl + '/api/auth/user', {
    method: 'GET',
  });
  const userList = await userRes.json()
  const idList: any[] = []

  userList.forEach((element: { id: String; }) => {
    idList.push(element.id)
  });

  const test = await prisma.user.deleteMany({
    where: {
      id:{
        in: idList
      }
    }
  });

  return { test };
});
