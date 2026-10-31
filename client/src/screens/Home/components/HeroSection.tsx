import { motion } from 'framer-motion'
import WhatsAppButton from '../../../common/WhatsAppButton/WhatsAppButton'
import CallButton from '../../../common/CallButton/CallButton'
import { COMPANY } from '../../../utils/constants'
import hero_image from '../../../assets/images/hero_exterior.webp'

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1]

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden">
            <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pt-10 pb-14 sm:px-6 sm:pt-14 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:px-8 lg:pt-20 lg:pb-24">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: EASE_OUT }}
                >
                    <p className="text-xs font-semibold tracking-[0.18em] text-gold-text uppercase">
                        Property advisors · {COMPANY.AREAS_SERVED}
                    </p>
                    <h1 className="mt-4 font-display text-[42px] leading-[1.04] font-medium tracking-tight text-balance text-ink sm:text-6xl lg:text-[68px]">
                        Property advice that stays honest after the deal closes.
                    </h1>
                    <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-ink-soft">
                        Buy, sell, rent or invest across Gurgaon, Delhi and Haryana with advisors who work on a transparent commission and a simple promise — your benefit comes first.
                    </p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <WhatsAppButton>WhatsApp us</WhatsAppButton>
                        <CallButton />
                    </div>
                </motion.div>

                <motion.div
                    className="relative"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.1, ease: EASE_OUT }}
                >
                    <div className="aspect-[4/3] overflow-hidden rounded-[28px] bg-cream-deep lg:aspect-[4/5]">
                        <img
                            src={hero_image}
                            alt="Contemporary home exterior with large glass windows"
                            width={1200}
                            height={1500}
                            fetchPriority="high"
                            className="size-full object-cover"
                        />
                    </div>
                    <div className="absolute -bottom-5 left-4 max-w-[260px] rounded-2xl border border-line bg-cream/95 p-4 shadow-[0_18px_40px_-20px_rgba(26,23,18,0.45)] backdrop-blur sm:left-6 sm:p-5">
                        <p className="font-display text-xl leading-snug text-ink">Customer benefit first.</p>
                        <p className="mt-1 text-sm text-ink-soft">No pushed inventory. No hidden charges.</p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
