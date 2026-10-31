import { useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import PageLayout from '../../common/PageLayout/PageLayout'
import Button from '../../common/Button/Button'
import WhatsAppButton from '../../common/WhatsAppButton/WhatsAppButton'
import { COMPANY } from '../../utils/constants'

export default function NotFound() {
    useEffect(() => {
        const previous_title = document.title
        document.title = `Page not found | ${COMPANY.NAME}`

        // Keeps search engines from indexing unknown URLs, since Vercel serves them with a 200
        const robots_meta = document.createElement('meta')
        robots_meta.name = 'robots'
        robots_meta.content = 'noindex'
        document.head.appendChild(robots_meta)

        return () => {
            document.title = previous_title
            robots_meta.remove()
        }
    }, [])

    return (
        <PageLayout>
            <section className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center sm:py-32">
                <p className="text-xs font-semibold tracking-[0.18em] text-gold-text uppercase">Error 404</p>
                <h1 className="mt-4 font-display text-5xl font-medium text-ink sm:text-6xl">This page does not exist</h1>
                <p className="mt-5 text-lg text-ink-soft">The link may be old or mistyped. Head back home, or message us and we will help you directly.</p>
                <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                    <Button href="/" icon={ArrowLeft}>Back to home</Button>
                    <WhatsAppButton>WhatsApp us</WhatsAppButton>
                </div>
            </section>
        </PageLayout>
    )
}
