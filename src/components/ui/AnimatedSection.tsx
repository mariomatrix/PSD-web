'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export default function AnimatedSection({ children, className = '', delay = 0 }: AnimatedSectionProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: fadeInUp.hidden,
        visible: {
          ...fadeInUp.visible,
          transition: { ...((fadeInUp.visible as any).transition || {}), delay },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
