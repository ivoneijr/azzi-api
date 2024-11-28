import { Currency } from "@prisma/client"

const COLORS = {
  RED: '#FF0000',
  BLUE: '#0000FF',
  GREEN: '#008000',
  YELLOW: '#FFFF00',
  PURPLE: '#800080',
  ORANGE: '#FFA500',
}

const MONTHS = {
  JANUARY: 0,
  FEBRUARY: 1,
  MARCH: 2,
  APRIL: 3,
  MAY: 4,
  JUNE: 5,
  JULY: 6,
  AUGUST: 7,
  SEPTEMBER: 8,
  OCTOBER: 9,
  NOVEMBER: 10,
  DECEMBER: 11,
}

const EXPENSES = {
  RENT: {
    description: 'Aluguel',
    amount: 6500,
    year: 2024,
    month: MONTHS.OCTOBER,
    userId: null,
    categoryId: null
  },
  CONDOMINIUM: {
    description: 'Condomínio',
    amount: 2500,
    year: 2024,
    month: MONTHS.OCTOBER,
    userId: null,
    categoryId: null
  }
}

const CATEGORIES = {
  FIXED_COSTS: {
    title: 'Custos Fixos',
    description: 'Custos - Description....',
    percentage: 30,
    icon: 'house',
    color: COLORS.RED,
    userId: null
  },
  COMFORT: {
    title: 'Conforto',
    description: 'Conforto - Description....',
    percentage: 10,
    icon: 'car',
    color: COLORS.BLUE,
    userId: null
  },
  GOALS: {
    title: 'Metas',
    description: 'Metas - Description....',
    percentage: 20,
    icon: 'target',
    color: COLORS.GREEN,
    userId: null
  },
  PLEASURES: {
    title: 'Pleasures',
    description: 'Pleasures - Description....',
    percentage: 10,
    icon: 'drink',
    color: COLORS.YELLOW,
    userId: null
  },
  FINANCIAL_FREEDOM: {
    title: 'Liberdade Financeira',
    description: 'Liberdade - Description....',
    percentage: 25,
    icon: 'medal',
    color: COLORS.PURPLE,
    userId: null
  },
  KNOWLEDGE: {
    title: 'Conhecimento',
    description: 'Conhecimento - Description....',
    percentage: 25, icon:
      'graduation-cap',
    color: COLORS.ORANGE,
    userId: null
  },
}

const PROFILES = {
  IVO: {
    name: 'Ivo',
    avatarUrl: 'https://lh3.googleusercontent.com/ogw/AF2bZyja8N3Hq9uOo-gcCgQhqtLNvqwXhO1gkzyE109OlDkbR2Y=s64-c-mo',
    currency: Currency.BRL
  }
}

const DUMMY = {
  PASSWORD: '$2a$12$s95/GuEw7sUCgFfxbBnZLu0pGYcyExLuVYsv2hQJ.83RtMifGeLKK', // 123456,
  PROFILES,
  COLORS,
  EXPENSES,
  CATEGORIES,
}

export const CONSTANTS = {
  DUMMY,
  MONTHS,
}
