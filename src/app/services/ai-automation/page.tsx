'use client'

import EnginePageLayout from '@/components/engines/EnginePageLayout'
import { useLanguage } from '@/contexts/LanguageContext'

export default function AIAutomationPage() {
  const { t } = useLanguage()
  return <EnginePageLayout engine={t.engineContent['ai-automation']} />
}
