import { PrismaClient } from "@prisma/client";
import app from "./app";

const port = process.env.PORT || 5000;
const prisma = new PrismaClient();
async function main() {
  app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
  });
  // const getAllUsers = await prisma.user.findMany();
  // console.log(getAllUsers);

  // const postUser = await prisma.user.create({
  //   data: {
  //     name: "Noyon",
  //     email: "noyon@gmail.com",
  //     role: "user",
  //   },
  // });
  // console.log(postUser);
}

main();
