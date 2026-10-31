import type { ComponentType, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'gold' | 'outline' | 'outline_light' | 'whatsapp'
type ButtonSize = 'md' | 'icon'

interface ButtonProps {
    // Omit children with size="icon"; aria_label then names the button
    children?: ReactNode
    variant?: ButtonVariant
    size?: ButtonSize
    href?: string
    is_external?: boolean
    icon?: ComponentType<{ size?: number }>
    type?: 'button' | 'submit'
    disabled?: boolean
    full_width?: boolean
    className?: string
    aria_label?: string
    onClick?: () => void
}

// Gradients can't transition, so solid variants lighten on hover by fading in a white overlay (opacity only)
const SHEEN_CLASSES = 'isolate after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:rounded-full after:bg-white after:opacity-0 after:transition-opacity after:duration-200 hover:after:opacity-[0.08]'

const SIZE_CLASSES: Record<ButtonSize, { classes: string, icon_size: number }> = {
    md: { classes: 'min-h-12 gap-2 px-6 text-[15px]', icon_size: 18 },
    icon: { classes: 'size-14', icon_size: 28 },
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
    primary: `bg-ink bg-(image:--gradient-ink) text-cream shadow-button inset-shadow-highlight ${SHEEN_CLASSES}`,
    gold: `bg-gold bg-(image:--gradient-gold) text-ink shadow-button inset-shadow-highlight-strong ${SHEEN_CLASSES}`,
    outline: 'border border-ink/80 text-ink transition-colors hover:bg-ink hover:text-cream',
    outline_light: 'border border-on-dark/60 text-on-dark transition-colors hover:bg-on-dark hover:text-ink',
    whatsapp: `bg-whatsapp bg-(image:--gradient-whatsapp) text-white shadow-button inset-shadow-highlight ${SHEEN_CLASSES}`,
}

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    href,
    is_external = false,
    icon: Icon,
    type = 'button',
    disabled = false,
    full_width = false,
    className = '',
    aria_label,
    onClick,
}: ButtonProps) {
    const classes = [
        'relative inline-flex items-center justify-center rounded-full font-medium whitespace-nowrap',
        SIZE_CLASSES[size].classes,
        'cursor-pointer select-none transition-[background-color,color,transform] duration-200 ease-out active:scale-[0.97]',
        'disabled:cursor-not-allowed disabled:opacity-60 disabled:active:scale-100',
        VARIANT_CLASSES[variant],
        full_width ? 'w-full' : '',
        className,
    ].join(' ')

    const content = (
        <>
            {Icon && (
                <span aria-hidden="true" className="inline-flex">
                    <Icon size={SIZE_CLASSES[size].icon_size} />
                </span>
            )}
            {children && <span>{children}</span>}
        </>
    )

    if (href) {
        return (
            <a
                href={href}
                className={classes}
                aria-label={aria_label}
                onClick={onClick}
                {...(is_external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
                {content}
            </a>
        )
    }

    return (
        <button type={type} className={classes} disabled={disabled} aria-label={aria_label} onClick={onClick}>
            {content}
        </button>
    )
}
