import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'

const Home = lazy(() => import('./screens/Home/Home'))
const NotFound = lazy(() => import('./screens/NotFound/NotFound'))

function SuspenseFallback() {
    return (
        <div className="flex min-h-svh items-center justify-center bg-cream" role="status" aria-label="Loading">
            <span className="size-8 animate-spin rounded-full border-2 border-line border-t-gold-text" />
        </div>
    )
}

function App() {
    return (
        // reducedMotion="user" turns transform animations off when the OS asks for less motion
        <MotionConfig reducedMotion="user">
            <Suspense fallback={<SuspenseFallback />}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </MotionConfig>
    )
}

export default App
