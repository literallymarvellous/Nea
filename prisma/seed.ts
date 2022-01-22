import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    name: "Alice",
    email: "alice@prisma.io",
  },
];

const main = async () => {
  console.log(`Start seeding ...`);
  userData.map(async (data) => {
    const user = await prisma.user.create({
      data,
    });

    console.log(`Created user with id: ${user.id}`);
  });

  console.log(`Seeding finished.`);
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
