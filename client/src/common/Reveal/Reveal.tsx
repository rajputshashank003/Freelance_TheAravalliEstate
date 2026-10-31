import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface RevealProps {
    children: ReactNode
    as?: 'div' | 'li'
    delay?: number
    className?: string
}

// Fades content up once as it enters the viewport; MotionConfig in App drops the movement for reduced-motion users
export default function Reveal({ children, as = 'div', delay = 0, className = '' }: RevealProps) {
    const MotionTag = as === 'li' ? motion.li : motion.div

    return (
        <MotionTag
            className={className}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -10% 0px' }}
            transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </MotionTag>
    )
}
