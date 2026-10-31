import Reveal from '../../../common/Reveal/Reveal'
import SectionHeading from '../../../common/SectionHeading/SectionHeading'
import { SECTION_IDS, SERVICES } from '../../../utils/constants'

export default function ServicesSection() {
    return (
        <section id={SECTION_IDS.SERVICES} className="bg-cream-deep/70">
            <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
                <Reveal>
                    <SectionHeading
                        eyebrow="What we do"
                        title="One advisor for every property decision"
                        description="Whether it is your first home or your next investment, you get the same honest guidance from first call to final handover."
                    />
                </Reveal>

                <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {SERVICES.map(({ title, description, icon: Icon }, index) => (
                        <Reveal key={title} as="li" delay={index * 0.06} className="flex h-full flex-col rounded-3xl border border-line bg-surface p-6">
                            <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-ink bg-(image:--gradient-ink) text-gold inset-shadow-highlight">
                                <Icon size={22} aria-hidden="true" />
                            </span>
                            <h3 className="mt-6 font-display text-2xl font-medium text-ink">{title}</h3>
                            <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{description}</p>
                        </Reveal>
                    ))}
                </ul>
            </div>
        </section>
    )
}
