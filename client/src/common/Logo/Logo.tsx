import { Link } from 'react-router-dom'
import { COMPANY } from '../../utils/constants'

interface LogoProps {
    is_dark?: boolean
    onClick?: () => void
}

export default function Logo({ is_dark = false, onClick }: LogoProps) {
    // Linking to "/" while already on "/" is a no-op for the router, so scroll back to the top ourselves.
    // onClick runs first so the mobile menu releases its scroll lock before we scroll.
    const handleClick = () => {
        onClick?.()
        window.scrollTo({ top: 0 })
    }

    return (
        <Link
            to="/"
            onClick={handleClick}
            aria-label={`${COMPANY.NAME} — home`}
            className={`font-display text-[22px] leading-none font-semibold tracking-tight whitespace-nowrap sm:text-2xl ${is_dark ? 'text-on-dark' : 'text-ink'}`}
        >
            The Aravalli <span className={is_dark ? 'text-gold' : 'text-gold-text'}>Estate</span>
        </Link>
    )
}
