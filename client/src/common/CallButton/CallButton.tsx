import type { ReactNode } from 'react'
import { Phone } from 'lucide-react'
import Button from '../Button/Button'
import { buildTelUrl } from '../../utils/helpers'

interface CallButtonProps {
    children?: ReactNode
    full_width?: boolean
    className?: string
    onClick?: () => void
}

// Pairs with WhatsAppButton: the secondary action, always the outline style
export default function CallButton({ children = 'Call now', full_width = false, className = '', onClick }: CallButtonProps) {
    return (
        <Button href={buildTelUrl()} icon={Phone} variant="outline" full_width={full_width} className={className} onClick={onClick}>
            {children}
        </Button>
    )
}
