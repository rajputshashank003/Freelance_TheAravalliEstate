import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Clock, Mail, MapPin, Menu, Phone, X } from 'lucide-react'
import Logo from '../Logo/Logo'
import WhatsAppButton from '../WhatsAppButton/WhatsAppButton'
import CallButton from '../CallButton/CallButton'
import { COMPANY, CONTACT, NAV_LINKS } from '../../utils/constants'
import { buildMailUrl, buildSectionHref, buildTelUrl } from '../../utils/helpers'

const DESKTOP_MEDIA_QUERY = '(min-width: 1024px)'

export default function Header() {
    const [is_menu_open, setIsMenuOpen] = useState(false)
    const [is_scrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 8)
        handleScroll()
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Lock page scroll behind the open menu, close it on Escape or when the viewport grows to desktop
    useEffect(() => {
        if (!is_menu_open) return

        const desktop_query = window.matchMedia(DESKTOP_MEDIA_QUERY)
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsMenuOpen(false)
        }
        const handleViewportChange = (e: MediaQueryListEvent) => {
            if (e.matches) setIsMenuOpen(false)
        }

        const previous_overflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        window.addEventListener('keydown', handleKeyDown)
        desktop_query.addEventListener('change', handleViewportChange)

        return () => {
            document.body.style.overflow = previous_overflow
            window.removeEventListener('keydown', handleKeyDown)
            desktop_query.removeEventListener('change', handleViewportChange)
        }
    }, [is_menu_open])

    // Unlocks scroll synchronously: the browser jumps to the #section right after this click handler,
    // before React's effect cleanup would remove overflow:hidden, and a locked page cannot scroll
    const closeMenu = () => {
        document.body.style.overflow = ''
        setIsMenuOpen(false)
    }

    return (
        <header className="sticky top-0 z-40">
            {/* Below desktop only hours and phone fit, so address and email are hidden there */}
            <div className="bg-ink-deep bg-(image:--gradient-ink) text-[12px] whitespace-nowrap text-on-dark-soft sm:text-[13px]">
                <div className="mx-auto flex h-9 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:gap-6 lg:px-8">
                    <p className="flex items-center gap-5">
                        <span className="hidden items-center gap-1.5 lg:flex">
                            <MapPin size={14} className="text-gold" aria-hidden="true" />
                            {COMPANY.ADDRESS_LINES.join(', ')}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Clock size={14} className="text-gold" aria-hidden="true" />
                            {COMPANY.OFFICE_HOURS}
                        </span>
                    </p>
                    <p className="flex items-center gap-5">
                        <a href={buildMailUrl(COMPANY.EMAILS[0])} className="hidden items-center gap-1.5 transition-colors hover:text-on-dark lg:flex">
                            <Mail size={14} className="text-gold" aria-hidden="true" />
                            {COMPANY.EMAILS[0]}
                        </a>
                        <a href={buildTelUrl()} className="flex h-9 items-center gap-1.5 text-on-dark transition-colors hover:text-gold lg:text-on-dark-soft lg:hover:text-on-dark">
                            <Phone size={14} className="text-gold" aria-hidden="true" />
                            {CONTACT.CALL_DISPLAY}
                        </a>
                    </p>
                </div>
            </div>

            <div className={`relative border-b bg-cream/90 backdrop-blur-md transition-[border-color,box-shadow] duration-200 ${is_scrolled || is_menu_open ? 'border-line shadow-[0_6px_20px_-12px_rgba(26,23,18,0.25)]' : 'border-transparent'}`}>
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-[72px] sm:px-6 lg:px-8">
                    <Logo onClick={closeMenu} />

                    <nav aria-label="Primary" className="hidden lg:block">
                        <ul className="flex items-center gap-7">
                            {NAV_LINKS.map((link) => (
                                <li key={link.section_id}>
                                    <a href={buildSectionHref(link.section_id)} className="text-[15px] text-ink-soft transition-colors hover:text-ink">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="flex items-center gap-2">
                        {/* Mobile already has the fixed ContactBar, so this only shows from tablet up */}
                        <div className="hidden md:block">
                            <WhatsAppButton>WhatsApp us</WhatsAppButton>
                        </div>
                        <button
                            type="button"
                            className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full text-ink transition-colors hover:bg-cream-deep lg:hidden"
                            aria-label={is_menu_open ? 'Close menu' : 'Open menu'}
                            aria-expanded={is_menu_open}
                            aria-controls="mobile-menu"
                            onClick={() => setIsMenuOpen((is_open) => !is_open)}
                        >
                            {is_menu_open ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                <AnimatePresence>
                    {is_menu_open && (
                        <motion.nav
                            id="mobile-menu"
                            aria-label="Mobile"
                            className="absolute inset-x-0 top-full max-h-[calc(100svh-100px)] sm:max-h-[calc(100svh-108px)] overflow-y-auto border-y border-line bg-cream shadow-[0_16px_30px_-16px_rgba(26,23,18,0.35)] lg:hidden"
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <ul className="px-4 py-2 sm:px-6">
                                {NAV_LINKS.map((link) => (
                                    <li key={link.section_id} className="border-b border-line last:border-b-0">
                                        <a
                                            href={buildSectionHref(link.section_id)}
                                            onClick={closeMenu}
                                            className="flex min-h-12 items-center font-display text-2xl text-ink"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <div className="grid gap-3 px-4 pt-2 pb-6 sm:grid-cols-2 sm:px-6">
                                <WhatsAppButton full_width onClick={closeMenu}>WhatsApp us</WhatsAppButton>
                                <CallButton full_width onClick={closeMenu}>Call {CONTACT.CALL_DISPLAY}</CallButton>
                            </div>
                        </motion.nav>
                    )}
                </AnimatePresence>
            </div>
        </header>
    )
}
