import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import Logo from '../Logo/Logo'
import WhatsAppIcon from '../WhatsAppIcon/WhatsAppIcon'
import { COMPANY, CONTACT, NAV_LINKS } from '../../utils/constants'
import { buildMailUrl, buildSectionHref, buildTelUrl, buildWhatsAppUrl } from '../../utils/helpers'

export default function Footer() {
    const current_year = new Date().getFullYear()

    return (
        <footer className="bg-ink-deep bg-(image:--gradient-ink-section) text-on-dark-soft">
            <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr] lg:px-8">
                <div>
                    <Logo is_dark />
                    <p className="mt-4 max-w-sm text-[15px] leading-relaxed">
                        Honest property advice across {COMPANY.AREAS_SERVED}. Buy, sell, rent or invest — with your benefit first.
                    </p>
                </div>

                <nav aria-label="Footer">
                    <h2 className="text-xs font-semibold tracking-[0.18em] text-gold uppercase">Explore</h2>
                    <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-1 md:grid-cols-1">
                        {NAV_LINKS.map((link) => (
                            <li key={link.section_id}>
                                <a href={buildSectionHref(link.section_id)} className="inline-flex min-h-10 items-center text-[15px] transition-colors hover:text-on-dark">
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div>
                    <h2 className="text-xs font-semibold tracking-[0.18em] text-gold uppercase">Contact</h2>
                    <ul className="mt-4 space-y-3 text-[15px]">
                        <li className="flex gap-3">
                            <MapPin size={18} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
                            <address className="not-italic">
                                {COMPANY.ADDRESS_LINES.map((line) => (
                                    <span key={line} className="block">{line}</span>
                                ))}
                            </address>
                        </li>
                        <li>
                            <a href={buildTelUrl()} className="flex gap-3 transition-colors hover:text-on-dark">
                                <Phone size={18} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
                                {CONTACT.CALL_DISPLAY}
                            </a>
                        </li>
                        <li>
                            <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="flex gap-3 transition-colors hover:text-on-dark">
                                <span className="mt-0.5 shrink-0 text-gold"><WhatsAppIcon size={18} /></span>
                                {CONTACT.WHATSAPP_DISPLAY}
                            </a>
                        </li>
                        {COMPANY.EMAILS.map((email) => (
                            <li key={email}>
                                <a href={buildMailUrl(email)} className="flex gap-3 break-all transition-colors hover:text-on-dark">
                                    <Mail size={18} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
                                    {email}
                                </a>
                            </li>
                        ))}
                        <li className="flex gap-3">
                            <Clock size={18} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
                            {COMPANY.OFFICE_HOURS}
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-white/10">
                <p className="mx-auto max-w-7xl px-4 py-6 text-[13px] sm:px-6 lg:px-8">
                    © {current_year} {COMPANY.NAME}. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
