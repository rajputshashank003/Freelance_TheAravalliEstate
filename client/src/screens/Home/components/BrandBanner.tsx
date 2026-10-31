import { motion } from 'framer-motion'
import { COMPANY } from '../../../utils/constants'
import brand_tower_image from '../../../assets/images/brand_tower.webp'

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1]

// Both title layers share these so the outlined copy sits exactly on top of the solid one
const LINE_ONE_CLASSES = 'block text-(length:--line-one-size) font-bold tracking-[0.04em] lg:font-medium lg:tracking-[-0.4px]'
const LINE_TWO_CLASSES = 'block text-(length:--line-two-size) font-bold tracking-[0.04em] lg:font-semibold lg:tracking-[-0.4px]'

// Depth trick: solid title behind the tower, an outlined copy in front of it,
// so the letters the tower covers still read as a thin gold outline
export default function BrandBanner() {
    return (
        <section
            aria-label={COMPANY.NAME}
            className="relative isolate overflow-hidden [--line-one-size:clamp(48px,16vw,160px)] [--line-two-size:clamp(94px,31vw,300px)] [--tower-height:clamp(320px,88vw,600px)] lg:[--line-one-size:104px] lg:[--line-two-size:200px] lg:[--tower-height:440px]"
        >
            <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-8 sm:px-6 sm:pt-12 lg:px-8 lg:pt-14">
                <div
                    className="pointer-events-none absolute top-[18%] left-1/2 -z-10 aspect-square w-[min(120vw,1100px)] -translate-x-1/2 bg-(image:--gradient-brand-glow)"
                    aria-hidden="true"
                />

                <motion.div
                    className="relative text-center font-display leading-[0.84]"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: EASE_OUT }}
                >
                    <h1>
                        {/* Below desktop, a thin same-color stroke adds weight beyond the font's heaviest (700) cut */}
                        <span className={`${LINE_ONE_CLASSES} text-ink [-webkit-text-stroke:0.018em_var(--color-ink)] lg:[-webkit-text-stroke:0]`}>The Aravalli</span>
                        <span className={`${LINE_TWO_CLASSES} bg-(image:--gradient-gold-text) bg-clip-text text-transparent [-webkit-text-stroke:0.018em_#8f6d30] lg:[-webkit-text-stroke:0]`}>Estate</span>
                    </h1>
                    <p
                        className="pointer-events-none absolute inset-0 z-20 text-transparent [-webkit-text-stroke:1px_rgb(201_168_106_/_0.75)]"
                        aria-hidden="true"
                    >
                        <span className={LINE_ONE_CLASSES}>The Aravalli</span>
                        <span className={LINE_TWO_CLASSES}>Estate</span>
                    </p>
                </motion.div>

                <motion.div
                    className="relative z-10 -mt-[calc(var(--line-two-size)*0.42)] h-(--tower-height)"
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.15, ease: EASE_OUT }}
                >
                    <div
                        className="pointer-events-none absolute bottom-[10%] left-1/2 h-8 w-[170%] -translate-x-1/2 rounded-[50%] bg-ink/25 blur-2xl"
                        aria-hidden="true"
                    />
                    {/* Shadow lives on a wrapper: filter + mask on the same element paints a faint box in Chromium */}
                    <div className="relative h-full drop-shadow-[-8px_14px_14px_rgb(20_17_13_/_0.18)]">
                        <img
                            src={brand_tower_image}
                            alt="Modern residential high-rise"
                            width={654}
                            height={1400}
                            fetchPriority="high"
                            className="h-full w-auto [mask-image:linear-gradient(to_bottom,#000_62%,transparent_94%)]"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
