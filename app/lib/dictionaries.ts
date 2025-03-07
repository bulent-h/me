import 'server-only'
import type { Locale } from '@/i18n.config'

const dictionaries = {
  en: () => import('@/app/dictionaries/en.json').then(module => module.default),
  tr: () => import('@/app/dictionaries/tr.json').then(module => module.default),
  ar: () => import('@/app/dictionaries/ar.json').then(module => module.default)
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()