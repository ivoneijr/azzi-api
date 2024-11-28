import { PackageType, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function seed() {
  // Create users
  const user1 = await prisma.user.create({
    data: {
      email: 'admin@example.com',
      password: 'securepassword', // Ensure to hash passwords in a real application
      role: 'ADMIN',
      profile: {
        create: {
          name: 'Admin User',
          avatarUrl: 'https://example.com/avatar1.png',
        },
      },
    },
  });

  const user2 = await prisma.user.create({
    data: {
      email: 'user@example.com',
      password: 'securepassword',
      role: 'USER',
      profile: {
        create: {
          name: 'Regular User',
          avatarUrl: 'https://example.com/avatar2.png',
        },
      },
    },
  });

  // Create service providers
  const serviceProvider = await prisma.serviceProvider.create({
    data: {
      slug: 'provider-1',
      location: '-73.935242,40.730610',
      isActive: true,
      user: {
        connect: { id: user1.id },
      },
      packages: {
        create: [
          {
            title: 'Azzi - SemiPro',
            price: 100.0,
            quantity: 10,
            type: PackageType.SEMI_PROFESSIONAL,
          },
          {
            title: 'Azzi - Pro',
            price: 200.0,
            quantity: 5,
            type: PackageType.PROFESSIONAL,
          },
        ],
      },
    },
  });

  // Create photo sessions
  await prisma.photoSession.create({
    data: {
      serviceProvider: {
        connect: { id: serviceProvider.id },
      },
      client: {
        connect: { id: user2.id },
      },
      files: {
        create: [
          {
            url: 'https://example.com/photo1.png',
          },
          {
            url: 'https://example.com/photo2.png',
          },
        ],
      },
    },
  });

  // Create portfolio
  await prisma.portfolio.create({
    data: {
      serviceProvider: {
        connect: { id: serviceProvider.id },
      },
      files: {
        create: [
          {
            url: 'https://example.com/portfolio1.png',
          },
          {
            url: 'https://example.com/portfolio2.png',
          },
        ],
      },
    },
  });
}

seed()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
