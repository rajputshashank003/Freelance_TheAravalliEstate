import Reveal from '../../../common/Reveal/Reveal'
import SectionHeading from '../../../common/SectionHeading/SectionHeading'
import { PROCESS_STEPS, SECTION_IDS } from '../../../utils/constants'

export default function ProcessSection() {
    return (
        <section id={SECTION_IDS.PROCESS} className="bg-ink-deep bg-(image:--gradient-ink-section)">
            <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
                <Reveal>
                    <SectionHeading
                        is_dark
                        eyebrow="How we work"
                        title="Simple, clear and on your terms"
                        description="No pressure and no surprises. Here is what working with us looks like."
                    />
                </Reveal>

                <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {PROCESS_STEPS.map((step, index) => (
                        <Reveal key={step.title} as="li" delay={index * 0.06} className="rounded-3xl border border-white/10 bg-(image:--gradient-card-dark) p-6 inset-shadow-highlight-soft">
                            <span className="font-display text-5xl leading-none text-gold" aria-hidden="true">
                                {String(index + 1).padStart(2, '0')}
                            </span>
                            <h3 className="mt-6 text-lg font-semibold text-on-dark">{step.title}</h3>
                            <p className="mt-2 text-[15px] leading-relaxed text-on-dark-soft">{step.description}</p>
                        </Reveal>
                    ))}
                </ol>
            </div>
        </section>
    )
}
