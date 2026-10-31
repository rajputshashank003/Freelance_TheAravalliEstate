import { Check } from 'lucide-react'
import Reveal from '../../../common/Reveal/Reveal'
import SectionHeading from '../../../common/SectionHeading/SectionHeading'
import { PROMISE_POINTS, SECTION_IDS } from '../../../utils/constants'
import promise_image from '../../../assets/images/promise_interior.webp'

export default function PromiseSection() {
    return (
        <section id={SECTION_IDS.PROMISE} className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                <Reveal className="order-2 lg:order-1">
                    <div className="aspect-[5/4] overflow-hidden rounded-[28px] bg-cream-deep">
                        <img
                            src={promise_image}
                            alt="Warm, sunlit living room with neutral furnishings"
                            width={1200}
                            height={960}
                            loading="lazy"
                            decoding="async"
                            className="size-full object-cover"
                        />
                    </div>
                </Reveal>

                <Reveal className="order-1 lg:order-2">
                    <SectionHeading
                        eyebrow="Our promise"
                        title="Customer benefit first. Always."
                        description="Buying or selling a home is one of the biggest decisions a family makes. We treat it that way — with straight answers, a transparent commission and advice you can rely on long after the paperwork is done."
                    />
                    <ul className="mt-8 space-y-4">
                        {PROMISE_POINTS.map((point) => (
                            <li key={point} className="flex gap-3 text-base leading-relaxed text-ink">
                                <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-gold/25 text-gold-text">
                                    <Check size={14} strokeWidth={3} aria-hidden="true" />
                                </span>
                                {point}
                            </li>
                        ))}
                    </ul>
                </Reveal>
            </div>
        </section>
    )
}
