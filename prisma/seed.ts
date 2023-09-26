import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function run() {
    const user = await prisma.user.upsert({
        where: { id: 1 },
        update: {},
        create: {
            name: "jdog",
            email: "jdog@example.com"
        }
    });

    const task = await prisma.task.upsert({
        where: { id: 1 },
        update: {},
        create: {
            title: "Hello",
            description: "World",
            authorId: user.id
        }
    });

    console.log({task});
}

run()
    .catch((e) => {
        console.log(e);
    })
    .finally(async () => {
        await prisma.$disconnect();
    })
