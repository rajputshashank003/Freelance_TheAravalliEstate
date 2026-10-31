import { createContext } from 'react'
import type useHome from './useHome'

const HomeContext = createContext<ReturnType<typeof useHome>>(null!)

export default HomeContext
