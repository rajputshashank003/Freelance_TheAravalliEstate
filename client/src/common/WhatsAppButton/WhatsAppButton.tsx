import type { ReactNode } from 'react'
import Button from '../Button/Button'
import WhatsAppIcon from '../WhatsAppIcon/WhatsAppIcon'
import { buildWhatsAppUrl } from '../../utils/helpers'

interface WhatsAppButtonProps {
    children?: ReactNode
    size?: 'md' | 'icon'
    full_width?: boolean
    className?: string
    aria_label?: string
    onClick?: () => void
}

// Single source for every "open WhatsApp" button so look, number and prefilled message never drift apart
export default function WhatsAppButton({ children, size = 'md', full_width = false, className = '', aria_label, onClick }: WhatsAppButtonProps) {
    return (
        <Button
            href={buildWhatsAppUrl()}
            is_external
            icon={WhatsAppIcon}
            variant="whatsapp"
            size={size}
            full_width={full_width}
            className={className}
            aria_label={aria_label}
            onClick={onClick}
        >
            {children}
        </Button>
    )
}
