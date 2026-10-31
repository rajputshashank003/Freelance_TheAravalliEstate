import { TRUST_POINTS } from '../../../utils/constants'

export default function TrustStrip() {
    return (
        <div className="border-y border-line bg-surface/60">
            <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 gap-y-6 px-4 py-8 sm:px-6 lg:grid-cols-4 lg:px-8">
                {TRUST_POINTS.map(({ title, description, icon: Icon }) => (
                    <li key={title} className="flex items-start gap-3">
                        <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-cream-deep text-gold-text">
                            <Icon size={20} aria-hidden="true" />
                        </span>
                        <div>
                            <p className="text-[15px] font-semibold text-ink">{title}</p>
                            <p className="mt-0.5 text-sm text-ink-soft">{description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
