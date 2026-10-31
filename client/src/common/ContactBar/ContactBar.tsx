import WhatsAppButton from '../WhatsAppButton/WhatsAppButton'
import CallButton from '../CallButton/CallButton'

// Mobile: fixed Call | WhatsApp bar in thumb reach. Tablet/desktop: a single floating WhatsApp button.
export default function ContactBar() {
    return (
        <>
            <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 gap-2 border-t border-line bg-cream/95 px-3 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] backdrop-blur-md md:hidden">
                <CallButton full_width />
                <WhatsAppButton full_width>WhatsApp</WhatsAppButton>
            </div>

            {/* Positioned by a wrapper so Button keeps its own `relative` for the hover sheen */}
            <div className="group fixed right-6 bottom-6 z-30 hidden md:block">
                <WhatsAppButton size="icon" aria_label="Chat with us on WhatsApp" />
                <span className="pointer-events-none absolute top-1/2 right-full mr-3 -translate-y-1/2 rounded-full bg-ink px-3 py-1.5 text-[13px] whitespace-nowrap text-cream opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100" aria-hidden="true">
                    Chat on WhatsApp
                </span>
            </div>
        </>
    )
}
