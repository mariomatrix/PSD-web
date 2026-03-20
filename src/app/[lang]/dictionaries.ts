import 'server-only'

const dictionaries = {
  hr: () => import('./dictionaries/hr.json').then((module) => module.default),
  en: () => import('./dictionaries/en.json').then((module) => module.default),
}

export type Locale = keyof typeof dictionaries

export const locales: Locale[] = ['hr', 'en']
export const defaultLocale: Locale = 'hr'

export const hasLocale = (locale: string): locale is Locale =>
  locale in dictionaries

export const getDictionary = async (locale: Locale) => dictionaries[locale]()
