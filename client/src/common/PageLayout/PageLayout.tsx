import type { ReactNode } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import ContactBar from '../ContactBar/ContactBar'

interface PageLayoutProps {
    children: ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
    return (
        // Bottom padding on mobile keeps the footer clear of the fixed ContactBar
        <div className="flex min-h-svh flex-col bg-ink-deep pb-[calc(4rem+env(safe-area-inset-bottom))] md:pb-0">
            <a
                href="#main"
                className="sr-only z-50 rounded-full bg-ink px-4 py-2 text-cream focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
            >
                Skip to content
            </a>
            <Header />
            <main id="main" className="flex-1 bg-cream">
                {children}
            </main>
            <Footer />
            <ContactBar />
        </div>
    )
}
