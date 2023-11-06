import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const getAllUser = await prisma.user.findMany();
  console.log(getAllUser);

  const postUser = await prisma.user.create({
    data: {
      email: "noyon@gmail.com",
      name: "sojon",
      role: "author",
    },
  });
  console.log(postUser);
}

main();
