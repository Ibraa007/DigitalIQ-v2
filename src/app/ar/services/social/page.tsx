'use client'
import EnginePageLayout from '@/components/engines/EnginePageLayout'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ArSocialPage() {
  const { t } = useLanguage()
  return <EnginePageLayout engine={t.engineContent.social} />
}
