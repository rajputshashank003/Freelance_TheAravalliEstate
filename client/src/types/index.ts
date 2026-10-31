import type { LucideIcon } from 'lucide-react'

export interface NavLink {
    label: string
    section_id: string
}

export interface FeatureItem {
    title: string
    description: string
    icon: LucideIcon
}

export interface AreaItem {
    title: string
    description: string
    image: string
    image_alt: string
}

export interface ProcessStep {
    title: string
    description: string
}

export interface FaqItem {
    question: string
    answer: string
}

export interface EnquiryForm {
    name: string
    phone: string
    requirement: string
    area: string
    budget: string
    message: string
}

export type EnquiryErrors = Partial<Record<keyof EnquiryForm, string>>
