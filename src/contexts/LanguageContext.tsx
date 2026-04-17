'use client'

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react'
import * as en from '@/lib/content'
import * as ar from '@/lib/content.ar'

type Lang = 'en' | 'ar'

interface LangCtx {
  lang: Lang
  toggle: () => void
  isAr: boolean
  t: typeof en
}

const defaultCtx: LangCtx = { lang: 'en', toggle: () => {}, isAr: false, t: en }
const Ctx = createContext<LangCtx>(defaultCtx)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')

  const apply = useCallback((l: Lang) => {
    setLang(l)
    localStorage.setItem('diq_lang', l)
    document.documentElement.lang = l
    document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr'
  }, [])

  useEffect(() => {
    const saved = localStorage.getItem('diq_lang') as Lang | null
    if (saved === 'ar') apply('ar')
  }, [apply])

  const toggle = useCallback(() => apply(lang === 'en' ? 'ar' : 'en'), [lang, apply])

  return (
    <Ctx.Provider value={{ lang, toggle, isAr: lang === 'ar', t: lang === 'ar' ? (ar as unknown as typeof en) : en }}>
      {children}
    </Ctx.Provider>
  )
}

export const useLanguage = () => useContext(Ctx)
