'use client'

import { createContext, useContext, useCallback, useEffect, type ReactNode } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import * as en from '@/lib/content'
import * as ar from '@/lib/content.ar'

type Lang = 'en' | 'ar'

interface LangCtx {
  lang: Lang
  toggle: () => void
  isAr: boolean
  t: typeof en
  href: (path: string) => string
}

const Ctx = createContext<LangCtx>({
  lang: 'en',
  toggle: () => {},
  isAr: false,
  t: en,
  href: (p) => p,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const isAr = pathname.startsWith('/ar')
  const lang: Lang = isAr ? 'ar' : 'en'

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = isAr ? 'rtl' : 'ltr'
  }, [lang, isAr])

  const toggle = useCallback(() => {
    if (isAr) {
      router.push(pathname.replace(/^\/ar/, '') || '/')
    } else {
      router.push(`/ar${pathname === '/' ? '' : pathname}`)
    }
  }, [isAr, pathname, router])

  const href = useCallback(
    (path: string) => {
      if (isAr && path.startsWith('/')) {
        return `/ar${path === '/' ? '' : path}`
      }
      return path
    },
    [isAr]
  )

  return (
    <Ctx.Provider value={{ lang, toggle, isAr, t: isAr ? (ar as unknown as typeof en) : en, href }}>
      {children}
    </Ctx.Provider>
  )
}

export const useLanguage = () => useContext(Ctx)
