import { MapPin } from 'lucide-react'
import Reveal from '../../../common/Reveal/Reveal'
import SectionHeading from '../../../common/SectionHeading/SectionHeading'
import { AREAS, GURGAON_LOCALITIES, SECTION_IDS } from '../../../utils/constants'

export default function AreasSection() {
    return (
        <section id={SECTION_IDS.AREAS} className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <Reveal>
                <SectionHeading
                    eyebrow="Areas we cover"
                    title="Gurgaon, Delhi and across Haryana"
                    description="Tell us where you want to be. We will help you find the right home, office or investment there."
                />
            </Reveal>

            <ul className="mt-12 grid gap-6 lg:grid-cols-3">
                {AREAS.map((area, index) => (
                    <Reveal key={area.title} as="li" delay={index * 0.08} className="group relative overflow-hidden rounded-[28px] bg-ink-deep">
                        <div className="aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/5]">
                            <img
                                src={area.image}
                                alt={area.image_alt}
                                width={1200}
                                height={750}
                                loading="lazy"
                                decoding="async"
                                className="size-full object-cover opacity-85 transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/90 via-ink-deep/30 to-transparent" aria-hidden="true" />
                        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                            <h3 className="font-display text-3xl font-medium text-on-dark sm:text-4xl">{area.title}</h3>
                            <p className="mt-2 max-w-md text-[15px] leading-relaxed text-on-dark/85">{area.description}</p>
                        </div>
                    </Reveal>
                ))}
            </ul>

            <Reveal className="mt-12">
                <h3 className="text-xs font-semibold tracking-[0.18em] text-gold-text uppercase">Popular locations in Gurgaon</h3>
                <ul className="mt-5 flex flex-wrap gap-2.5">
                    {GURGAON_LOCALITIES.map((locality) => (
                        <li
                            key={locality}
                            className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-4 py-2 text-[15px] text-ink"
                        >
                            <MapPin size={14} className="text-gold-text" aria-hidden="true" />
                            {locality}
                        </li>
                    ))}
                </ul>
                <p className="mt-5 text-sm text-ink-soft">Looking somewhere else? Message us — if it is in Gurgaon, Delhi or Haryana, we can help.</p>
            </Reveal>
        </section>
    )
}
