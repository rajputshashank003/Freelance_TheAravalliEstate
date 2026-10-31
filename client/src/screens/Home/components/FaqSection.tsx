import { useContext } from 'react'
import { Plus } from 'lucide-react'
import Reveal from '../../../common/Reveal/Reveal'
import SectionHeading from '../../../common/SectionHeading/SectionHeading'
import HomeContext from '../context'
import { FAQS, SECTION_IDS } from '../../../utils/constants'

export default function FaqSection() {
    const { open_faq_index, toggleFaq } = useContext(HomeContext)

    return (
        <section id={SECTION_IDS.FAQ} className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <Reveal>
                <SectionHeading eyebrow="FAQ" title="Questions we are often asked" align="center" />
            </Reveal>

            <ul className="mt-10 border-t border-line">
                {FAQS.map((faq, index) => {
                    const is_open = open_faq_index === index
                    const answer_id = `faq-answer-${index}`

                    return (
                        <li key={faq.question} className="border-b border-line">
                            <h3>
                                <button
                                    type="button"
                                    className="flex w-full cursor-pointer items-center justify-between gap-6 py-5 text-left text-[17px] font-medium text-ink"
                                    aria-expanded={is_open}
                                    aria-controls={answer_id}
                                    onClick={() => toggleFaq(index)}
                                >
                                    {faq.question}
                                    <Plus
                                        size={20}
                                        aria-hidden="true"
                                        className={`shrink-0 text-gold-text transition-transform duration-200 ease-out ${is_open ? 'rotate-45' : ''}`}
                                    />
                                </button>
                            </h3>
                            {/* grid-rows 0fr -> 1fr animates to the content's natural height without measuring it */}
                            <div
                                id={answer_id}
                                className={`grid transition-[grid-template-rows] duration-300 ease-out ${is_open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                            >
                                <div className="overflow-hidden" inert={!is_open}>
                                    <p className="pr-10 pb-5 text-base leading-relaxed text-ink-soft">{faq.answer}</p>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}
