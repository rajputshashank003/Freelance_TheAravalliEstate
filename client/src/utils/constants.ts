import { BadgeIndianRupee, FileCheck2, Home, KeyRound, MapPinned, ShieldCheck, Tag, TrendingUp } from 'lucide-react'
import area_gurgaon_image from '../assets/images/area_gurgaon.webp'
import area_delhi_image from '../assets/images/area_delhi.webp'
import area_haryana_image from '../assets/images/area_haryana.webp'
import type { AreaItem, FaqItem, FeatureItem, NavLink, ProcessStep } from '../types'

export const COMPANY = {
    NAME: 'The Aravalli Estate',
    SITE_URL: 'https://aravalliestate.homes',
    ADDRESS_LINES: ['904, Emaar Palm Square', 'Gurgaon, Haryana'],
    MAP_QUERY: '904 Emaar Palm Square Gurgaon',
    OFFICE_HOURS: 'Mon – Sat, 9 AM – 8 PM',
    EMAILS: ['Lalitkmogha@gmail.com', 'Lalitmoghag@gmail.com'],
    AREAS_SERVED: 'Gurgaon, Delhi & Haryana',
}

// Numbers are stored in wa.me / tel format (country code, no symbols)
export const CONTACT = {
    CALL_NUMBER: '919311983099',
    CALL_DISPLAY: '+91 93119 83099',
    WHATSAPP_NUMBER: '919870147022',
    WHATSAPP_DISPLAY: '+91 98701 47022',
    WHATSAPP_DEFAULT_MESSAGE: 'Hi Aravalli Estate, I visited your website and would like to discuss a property requirement.',
}

export const SECTION_IDS = {
    PROMISE: 'promise',
    SERVICES: 'services',
    AREAS: 'areas',
    PROCESS: 'process',
    FAQ: 'faq',
    CONTACT: 'contact',
}

export const NAV_LINKS: NavLink[] = [
    { label: 'Our Promise', section_id: SECTION_IDS.PROMISE },
    { label: 'Services', section_id: SECTION_IDS.SERVICES },
    { label: 'Areas', section_id: SECTION_IDS.AREAS },
    { label: 'How We Work', section_id: SECTION_IDS.PROCESS },
    { label: 'FAQ', section_id: SECTION_IDS.FAQ },
    { label: 'Contact', section_id: SECTION_IDS.CONTACT },
]

export const TRUST_POINTS: FeatureItem[] = [
    { title: 'Transparent commission', description: 'Agreed upfront, in writing', icon: BadgeIndianRupee },
    { title: 'Verified options', description: 'Legally clear properties only', icon: ShieldCheck },
    { title: 'Your schedule', description: 'Site visits when it suits you', icon: MapPinned },
    { title: 'Till possession', description: 'Support beyond the paperwork', icon: FileCheck2 },
]

export const PROMISE_POINTS: string[] = [
    'We tell you when a property is not right for you — even if it costs us the deal.',
    'One transparent commission, agreed before we begin. No hidden charges.',
    'We never push inventory. Every option we share is matched to your brief.',
]

export const SERVICES: FeatureItem[] = [
    {
        title: 'Buy a home',
        description: 'Shortlists matched to your budget, family needs and possession timeline — with honest pros and cons for each.',
        icon: Home,
    },
    {
        title: 'Sell your property',
        description: 'Realistic pricing advice, genuine buyers and a smooth closing, without dragging the process out.',
        icon: Tag,
    },
    {
        title: 'Rent or lease',
        description: 'Homes and commercial spaces for tenants and landlords, with clear terms and verified parties.',
        icon: KeyRound,
    },
    {
        title: 'Invest',
        description: 'Practical guidance on where and when to invest, based on what suits your goals — not what we need to sell.',
        icon: TrendingUp,
    },
]

export const AREAS: AreaItem[] = [
    {
        title: 'All of Gurgaon',
        description: 'Apartments, independent floors, villas and commercial spaces across every part of the city.',
        image: area_gurgaon_image,
        image_alt: 'Modern residential towers at dusk',
    },
    {
        title: 'Delhi',
        description: 'Residential and commercial requirements across Delhi, handled with the same care and transparency.',
        image: area_delhi_image,
        image_alt: 'Contemporary home exterior with landscaped garden',
    },
    {
        title: 'Haryana',
        description: 'Homes, plots and commercial property beyond Gurgaon, across the wider state.',
        image: area_haryana_image,
        image_alt: 'Modern house with a large tree and lawn at dusk',
    },
]

export const GURGAON_LOCALITIES: string[] = [
    'Golf Course Road',
    'Golf Course Extension Road',
    'Dwarka Expressway',
    'Southern Peripheral Road',
    'Sohna Road',
    'New Gurgaon',
    'DLF Phase 1 – 5',
    'DLF Cyber City',
    'MG Road',
    'Sushant Lok',
    'South City',
    'Nirvana Country',
    'Palam Vihar',
    'Udyog Vihar',
    'Manesar',
    'Sohna',
]

export const PROCESS_STEPS: ProcessStep[] = [
    { title: 'Tell us what you need', description: 'Share your budget, preferred area and timeline on a call or WhatsApp.' },
    { title: 'Receive a curated shortlist', description: 'Only options that genuinely fit your brief — with honest pros and cons.' },
    { title: 'Visit at your convenience', description: 'We plan site visits around your schedule and walk you through each one.' },
    { title: 'Close with confidence', description: 'Negotiation, documentation and registration support until you have the keys.' },
]

export const FAQS: FaqItem[] = [
    {
        question: 'How do you charge for your services?',
        answer: 'We work on a transparent commission that is discussed and agreed with you upfront. There are no hidden charges.',
    },
    {
        question: 'Which areas do you cover?',
        answer: 'We cover all of Gurgaon, Delhi and Haryana — residential as well as commercial property.',
    },
    {
        question: 'Can you help me sell or rent out my property?',
        answer: 'Yes. Share the property details on WhatsApp and we will guide you on pricing and find genuine buyers or tenants.',
    },
    {
        question: 'How do I schedule a site visit?',
        answer: 'Send us your requirement on WhatsApp or call us. We will share a shortlist and plan visits at a time that suits you.',
    },
    {
        question: 'What are your office hours?',
        answer: `We are available ${COMPANY.OFFICE_HOURS}. You can send a WhatsApp message anytime and we will respond during office hours.`,
    },
]

export const ENQUIRY_OPTIONS = {
    REQUIREMENTS: ['Buy', 'Sell', 'Rent', 'Invest'],
    AREAS: ['Gurgaon', 'Delhi', 'Haryana', 'Open to suggestions'],
    BUDGETS: ['Under ₹1 Cr', '₹1 – 3 Cr', '₹3 – 5 Cr', '₹5 Cr+', 'Not sure yet'],
}

export const ENQUIRY_LIMITS = {
    NAME_MIN: 2,
    NAME_MAX: 60,
    MESSAGE_MAX: 500,
}

// Indian mobile numbers: 10 digits starting with 6-9
export const INDIAN_MOBILE_REGEX = /^[6-9]\d{9}$/
