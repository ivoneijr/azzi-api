import { Currency, ExpenseCategory, ExpenseStatus, PrismaClient, User, UserRole } from '@prisma/client'
import { CONSTANTS } from './constants'

const prisma = new PrismaClient()

const createCategories = async (user: User): Promise<ExpenseCategory[]> => {
  await prisma.expenseCategory.createMany({
    data: [
      { ...CONSTANTS.DUMMY.CATEGORIES.FIXED_COSTS, userId: user.id },
      { ...CONSTANTS.DUMMY.CATEGORIES.COMFORT, userId: user.id },
      { ...CONSTANTS.DUMMY.CATEGORIES.GOALS, userId: user.id },
      { ...CONSTANTS.DUMMY.CATEGORIES.PLEASURES, userId: user.id },
      { ...CONSTANTS.DUMMY.CATEGORIES.FINANCIAL_FREEDOM, userId: user.id },
      { ...CONSTANTS.DUMMY.CATEGORIES.KNOWLEDGE, userId: user.id },
    ],
  })

  const categories = await prisma.expenseCategory.findMany({
    where: { userId: user.id }
  })

  return categories
}

const createUser = async () => prisma.user.create({
  data: {
    email: 'ivoneijr@gmail.com',
    password: CONSTANTS.DUMMY.PASSWORD,
    role: UserRole.ADMIN,
    profile: {
      create: CONSTANTS.DUMMY.PROFILES.IVO
    }
  },
})

const createIncomes = async (user: User) => prisma.income.createMany({
  data: [
    { description: 'Salário', amount: 40000, userId: user.id, year: 2024, month: CONSTANTS.MONTHS.OCTOBER },
  ],
})

const createExpenses = async (user: User, categories: ExpenseCategory[]) => prisma.expense.createMany({
  data: [
    {
      ...CONSTANTS.DUMMY.EXPENSES.RENT,
      status: ExpenseStatus.PAID,
      userId: user.id,
      categoryId: categories[0].id
    },
    {
      ...CONSTANTS.DUMMY.EXPENSES.CONDOMINIUM,
      userId: user.id,
      categoryId: categories[0].id
    },
  ],
})

async function main() {
  // const user = await createUser()
  // const categories = await createCategories(user)
  // await createIncomes(user)
  // await createExpenses(user, categories)
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
