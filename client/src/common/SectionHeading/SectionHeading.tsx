interface SectionHeadingProps {
    eyebrow: string
    title: string
    description?: string
    align?: 'left' | 'center'
    is_dark?: boolean
}

export default function SectionHeading({ eyebrow, title, description, align = 'left', is_dark = false }: SectionHeadingProps) {
    const align_classes = align === 'center' ? 'mx-auto text-center' : ''

    return (
        <div className={`max-w-2xl ${align_classes}`}>
            <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${is_dark ? 'text-gold' : 'text-gold-text'}`}>
                {eyebrow}
            </p>
            <h2 className={`mt-3 font-display text-[34px] leading-[1.1] font-medium text-balance sm:text-[44px] ${is_dark ? 'text-on-dark' : 'text-ink'}`}>
                {title}
            </h2>
            {description && (
                <p className={`mt-4 text-base leading-relaxed text-pretty sm:text-lg ${is_dark ? 'text-on-dark-soft' : 'text-ink-soft'}`}>
                    {description}
                </p>
            )}
        </div>
    )
}
