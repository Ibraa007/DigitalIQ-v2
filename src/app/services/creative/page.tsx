import EnginePageLayout from '@/components/engines/EnginePageLayout'
import { engineContent } from '@/lib/content'

export default function CreativePage() {
  return <EnginePageLayout engine={engineContent.creative} />
}
