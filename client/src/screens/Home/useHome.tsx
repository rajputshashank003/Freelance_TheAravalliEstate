import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const useHome = () => {
    const location = useLocation()
    const [open_faq_index, setOpenFaqIndex] = useState<number | null>(0)

    // Home is lazy-loaded, so the browser's own jump to /#section runs before the section exists
    useEffect(() => {
        if (!location.hash) return
        const section = document.getElementById(decodeURIComponent(location.hash.slice(1)))
        section?.scrollIntoView()
    }, [location.hash])

    const toggleFaq = (index: number) => {
        setOpenFaqIndex((current) => (current === index ? null : index))
    }

    return {
        open_faq_index,
        toggleFaq,
    }
}

export default useHome
