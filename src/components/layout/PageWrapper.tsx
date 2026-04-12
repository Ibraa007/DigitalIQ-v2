'use client'

import { motion } from 'framer-motion'
import { pageEntrance } from '@/lib/motion'

interface PageWrapperProps {
  children: React.ReactNode
  className?: string
}

export default function PageWrapper({ children, className }: PageWrapperProps) {
  return (
    <motion.div
      variants={pageEntrance}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {children}
    </motion.div>
  )
}
