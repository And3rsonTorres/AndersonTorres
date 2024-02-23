import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.contact.create({
    data: {
      Name: 'Rich',
      Email: 'hello@prisma.com',
      Message: 'Hello from Prisma',
    },
  })

  const allUsers = await prisma.contact.findMany({
    
  })
  console.dir(allUsers, { depth: null })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })