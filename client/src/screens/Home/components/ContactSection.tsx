import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import ContactForm from '../../../common/ContactForm/ContactForm'
import Reveal from '../../../common/Reveal/Reveal'
import SectionHeading from '../../../common/SectionHeading/SectionHeading'
import WhatsAppIcon from '../../../common/WhatsAppIcon/WhatsAppIcon'
import { COMPANY, CONTACT, SECTION_IDS } from '../../../utils/constants'
import { buildMailUrl, buildMapUrl, buildTelUrl, buildWhatsAppUrl } from '../../../utils/helpers'

const ICON_WRAP_CLASSES = 'inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-cream-deep text-gold-text'

export default function ContactSection() {
    return (
        <section id={SECTION_IDS.CONTACT} className="border-t border-line bg-surface/60">
            <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8 lg:py-28">
                <Reveal>
                    <SectionHeading
                        eyebrow="Contact"
                        title="Tell us what you are looking for"
                        description="Share a few details and we will get back to you with honest options. Prefer to talk? Call or WhatsApp us directly."
                    />

                    <ul className="mt-10 space-y-5 text-[15px]">
                        <li>
                            <a href={buildTelUrl()} className="flex items-center gap-4 text-ink transition-colors hover:text-gold-text">
                                <span className={ICON_WRAP_CLASSES}><Phone size={20} aria-hidden="true" /></span>
                                <span>
                                    <span className="block text-sm text-ink-soft">Call</span>
                                    <span className="font-medium">{CONTACT.CALL_DISPLAY}</span>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-ink transition-colors hover:text-gold-text">
                                <span className={ICON_WRAP_CLASSES}><WhatsAppIcon size={20} /></span>
                                <span>
                                    <span className="block text-sm text-ink-soft">WhatsApp</span>
                                    <span className="font-medium">{CONTACT.WHATSAPP_DISPLAY}</span>
                                </span>
                            </a>
                        </li>
                        <li className="flex items-center gap-4 text-ink">
                            <span className={ICON_WRAP_CLASSES}><Mail size={20} aria-hidden="true" /></span>
                            <span className="min-w-0">
                                <span className="block text-sm text-ink-soft">Email</span>
                                {COMPANY.EMAILS.map((email) => (
                                    <a key={email} href={buildMailUrl(email)} className="block font-medium break-all transition-colors hover:text-gold-text">
                                        {email}
                                    </a>
                                ))}
                            </span>
                        </li>
                        <li>
                            <a
                                href={buildMapUrl()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 text-ink transition-colors hover:text-gold-text"
                            >
                                <span className={ICON_WRAP_CLASSES}><MapPin size={20} aria-hidden="true" /></span>
                                <span>
                                    <span className="block text-sm text-ink-soft">Office</span>
                                    <span className="font-medium">{COMPANY.ADDRESS_LINES.join(', ')}</span>
                                </span>
                            </a>
                        </li>
                        <li className="flex items-center gap-4 text-ink">
                            <span className={ICON_WRAP_CLASSES}><Clock size={20} aria-hidden="true" /></span>
                            <span>
                                <span className="block text-sm text-ink-soft">Office hours</span>
                                <span className="font-medium">{COMPANY.OFFICE_HOURS}</span>
                            </span>
                        </li>
                    </ul>
                </Reveal>

                <Reveal delay={0.08}>
                    <ContactForm />
                </Reveal>
            </div>
        </section>
    )
}
