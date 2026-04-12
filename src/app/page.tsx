import Hero from '@/components/home/Hero'
import WhySystem from '@/components/home/WhySystem'
import MethodPreview from '@/components/home/MethodPreview'
import EnginesOverview from '@/components/home/EnginesOverview'
import WhatChanges from '@/components/home/WhatChanges'
import SystemCTA from '@/components/home/SystemCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhySystem />
      <MethodPreview />
      <EnginesOverview />
      <WhatChanges />
      <SystemCTA />
    </>
  )
}
