import type { Variants } from 'framer-motion'

// Shared easing curve — slow, elegant, Mediterranean
export const smoothEase = [0.25, 0.1, 0.25, 1] as const

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: smoothEase as unknown as number[] },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: smoothEase as unknown as number[] },
  },
}

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
}

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.2, ease: smoothEase as unknown as number[] },
  },
}

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.2, ease: smoothEase as unknown as number[] },
  },
}

// Hover variants for buttons and cards
export const buttonHover = {
  scale: 1.05,
  transition: { duration: 0.4, ease: 'easeOut' },
}

export const cardHover = {
  y: -8,
  boxShadow: '0px 20px 40px rgba(0,0,0,0.06)',
  transition: { duration: 0.4, ease: 'easeOut' },
}
