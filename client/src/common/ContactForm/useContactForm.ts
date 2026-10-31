import { useEffect, useRef, useState, type FormEvent } from 'react'
import { ENQUIRY_LIMITS } from '../../utils/constants'
import { buildEnquiryMessage, buildWhatsAppUrl, isValidIndianPhone, openExternalUrl } from '../../utils/helpers'
import type { EnquiryErrors, EnquiryForm } from '../../types'

const EMPTY_FORM: EnquiryForm = {
    name: '',
    phone: '',
    requirement: '',
    area: '',
    budget: '',
    message: '',
}

// Blocks repeat taps from opening WhatsApp twice
const SUBMIT_COOLDOWN_MS = 1500

function validateEnquiry(form: EnquiryForm): EnquiryErrors {
    const errors: EnquiryErrors = {}
    const name = form.name.trim()

    if (!name) errors.name = 'Please enter your name.'
    else if (name.length < ENQUIRY_LIMITS.NAME_MIN) errors.name = 'Name looks too short.'

    if (!form.phone.trim()) errors.phone = 'Please enter your mobile number.'
    else if (!isValidIndianPhone(form.phone)) errors.phone = 'Enter a valid 10-digit Indian mobile number.'

    return errors
}

export default function useContactForm() {
    const [form, setForm] = useState<EnquiryForm>(EMPTY_FORM)
    const [errors, setErrors] = useState<EnquiryErrors>({})
    const [is_submitting, setIsSubmitting] = useState(false)
    const [is_sent, setIsSent] = useState(false)
    const cooldown_timer = useRef<number | null>(null)
    // A ref, not state: two taps in the same frame both see the old state value
    const is_locked = useRef(false)

    useEffect(() => {
        return () => {
            if (cooldown_timer.current) window.clearTimeout(cooldown_timer.current)
        }
    }, [])

    const updateField = (field: keyof EnquiryForm, value: string) => {
        setForm((prev) => ({ ...prev, [field]: value }))
        setIsSent(false)
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: undefined }))
        }
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (is_locked.current) return

        const next_errors = validateEnquiry(form)
        setErrors(next_errors)

        const first_invalid_field = Object.keys(next_errors)[0]
        if (first_invalid_field) {
            document.getElementById(`enquiry-${first_invalid_field}`)?.focus()
            return
        }

        is_locked.current = true
        setIsSubmitting(true)
        openExternalUrl(buildWhatsAppUrl(buildEnquiryMessage(form)))
        // Form values are kept so the visitor can resend if they close WhatsApp without sending
        setIsSent(true)
        cooldown_timer.current = window.setTimeout(() => {
            is_locked.current = false
            setIsSubmitting(false)
        }, SUBMIT_COOLDOWN_MS)
    }

    return {
        form,
        errors,
        is_submitting,
        is_sent,
        updateField,
        handleSubmit,
    }
}
