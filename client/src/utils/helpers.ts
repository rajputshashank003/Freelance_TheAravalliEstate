import { COMPANY, CONTACT, INDIAN_MOBILE_REGEX } from './constants'
import type { EnquiryForm } from '../types'

export function buildWhatsAppUrl(message: string = CONTACT.WHATSAPP_DEFAULT_MESSAGE): string {
    return `https://wa.me/${CONTACT.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export function buildTelUrl(): string {
    return `tel:+${CONTACT.CALL_NUMBER}`
}

export function buildMailUrl(email: string): string {
    return `mailto:${email}`
}

export function buildMapUrl(): string {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY.MAP_QUERY)}`
}

export function buildSectionHref(section_id: string): string {
    return `/#${section_id}`
}

// Strips spaces/symbols and a leading +91, 91 or 0 so users can type numbers the way they are used to
export function normalizeIndianPhone(raw_phone: string): string {
    const digits = raw_phone.replace(/\D/g, '')
    if (digits.length === 12 && digits.startsWith('91')) return digits.slice(2)
    if (digits.length === 11 && digits.startsWith('0')) return digits.slice(1)
    return digits
}

export function isValidIndianPhone(raw_phone: string): boolean {
    return INDIAN_MOBILE_REGEX.test(normalizeIndianPhone(raw_phone))
}

export function buildEnquiryMessage(form: EnquiryForm): string {
    const lines = [
        CONTACT.WHATSAPP_DEFAULT_MESSAGE,
        '',
        `Name: ${form.name.trim()}`,
        `Phone: +91 ${normalizeIndianPhone(form.phone)}`,
    ]
    if (form.requirement) lines.push(`Looking to: ${form.requirement}`)
    if (form.area) lines.push(`Preferred area: ${form.area}`)
    if (form.budget) lines.push(`Budget: ${form.budget}`)
    if (form.message.trim()) lines.push(`Message: ${form.message.trim()}`)
    return lines.join('\n')
}

// window.open returns null when a popup blocker stops it, so fall back to same-tab navigation
export function openExternalUrl(url: string): void {
    const opened_window = window.open(url, '_blank')
    if (opened_window) {
        opened_window.opener = null
        return
    }
    window.location.href = url
}
