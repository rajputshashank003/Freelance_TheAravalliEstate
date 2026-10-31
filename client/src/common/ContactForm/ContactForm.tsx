import { CheckCircle2, ChevronDown } from 'lucide-react'
import Button from '../Button/Button'
import WhatsAppIcon from '../WhatsAppIcon/WhatsAppIcon'
import useContactForm from './useContactForm'
import { ENQUIRY_LIMITS, ENQUIRY_OPTIONS } from '../../utils/constants'
import type { EnquiryForm } from '../../types'

const FIELD_CLASSES = 'block w-full min-h-12 rounded-xl border bg-surface px-4 text-base text-ink placeholder:text-ink-soft/60 transition-[border-color,box-shadow] duration-150 focus:border-ink focus:outline-none focus:ring-2 focus:ring-gold/40'

interface SelectFieldProps {
    field: keyof EnquiryForm
    label: string
    options: string[]
    value: string
    onChange: (field: keyof EnquiryForm, value: string) => void
}

function SelectField({ field, label, options, value, onChange }: SelectFieldProps) {
    return (
        <div>
            <label htmlFor={`enquiry-${field}`} className="mb-1.5 block text-sm font-medium text-ink">
                {label} <span className="font-normal text-ink-soft">(optional)</span>
            </label>
            <div className="relative">
                <select
                    id={`enquiry-${field}`}
                    value={value}
                    onChange={(e) => onChange(field, e.target.value)}
                    className={`${FIELD_CLASSES} cursor-pointer appearance-none border-line pr-10`}
                >
                    <option value="">Select</option>
                    {options.map((option) => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
                <ChevronDown size={18} className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-ink-soft" aria-hidden="true" />
            </div>
        </div>
    )
}

export default function ContactForm() {
    const { form, errors, is_submitting, is_sent, updateField, handleSubmit } = useContactForm()

    const errorClasses = (field: keyof EnquiryForm) => (errors[field] ? 'border-error' : 'border-line')

    return (
        <form noValidate onSubmit={handleSubmit} className="rounded-3xl border border-line bg-cream-deep/60 p-5 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
                <div>
                    <label htmlFor="enquiry-name" className="mb-1.5 block text-sm font-medium text-ink">Your name</label>
                    <input
                        id="enquiry-name"
                        type="text"
                        autoComplete="name"
                        maxLength={ENQUIRY_LIMITS.NAME_MAX}
                        value={form.name}
                        onChange={(e) => updateField('name', e.target.value)}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? 'enquiry-name-error' : undefined}
                        className={`${FIELD_CLASSES} ${errorClasses('name')}`}
                    />
                    {errors.name && <p id="enquiry-name-error" className="mt-1.5 text-sm text-error">{errors.name}</p>}
                </div>

                <div>
                    <label htmlFor="enquiry-phone" className="mb-1.5 block text-sm font-medium text-ink">Mobile number</label>
                    <div className="relative">
                        <span className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-base text-ink-soft" aria-hidden="true">+91</span>
                        <input
                            id="enquiry-phone"
                            type="tel"
                            inputMode="tel"
                            autoComplete="tel-national"
                            maxLength={16}
                            value={form.phone}
                            onChange={(e) => updateField('phone', e.target.value)}
                            aria-invalid={Boolean(errors.phone)}
                            aria-describedby={errors.phone ? 'enquiry-phone-error' : undefined}
                            className={`${FIELD_CLASSES} pl-14 ${errorClasses('phone')}`}
                        />
                    </div>
                    {errors.phone && <p id="enquiry-phone-error" className="mt-1.5 text-sm text-error">{errors.phone}</p>}
                </div>

                <SelectField field="requirement" label="Looking to" options={ENQUIRY_OPTIONS.REQUIREMENTS} value={form.requirement} onChange={updateField} />
                <SelectField field="area" label="Preferred area" options={ENQUIRY_OPTIONS.AREAS} value={form.area} onChange={updateField} />

                <div className="sm:col-span-2">
                    <SelectField field="budget" label="Budget" options={ENQUIRY_OPTIONS.BUDGETS} value={form.budget} onChange={updateField} />
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="enquiry-message" className="mb-1.5 block text-sm font-medium text-ink">
                        Anything else? <span className="font-normal text-ink-soft">(optional)</span>
                    </label>
                    <textarea
                        id="enquiry-message"
                        rows={4}
                        maxLength={ENQUIRY_LIMITS.MESSAGE_MAX}
                        value={form.message}
                        onChange={(e) => updateField('message', e.target.value)}
                        placeholder="e.g. 3 BHK, ready to move, near a good school"
                        className={`${FIELD_CLASSES} resize-y border-line py-3`}
                    />
                </div>
            </div>

            <div className="mt-6">
                <Button type="submit" variant="whatsapp" icon={WhatsAppIcon} full_width disabled={is_submitting}>
                    Send on WhatsApp
                </Button>
                <p className="mt-3 text-center text-sm text-ink-soft" aria-live="polite">
                    {is_sent ? (
                        <span className="inline-flex items-center gap-1.5 text-ink">
                            <CheckCircle2 size={16} className="text-whatsapp" aria-hidden="true" />
                            WhatsApp opened with your details — just tap send.
                        </span>
                    ) : (
                        'Opens WhatsApp with your details filled in. Nothing is stored on this website.'
                    )}
                </p>
            </div>
        </form>
    )
}
