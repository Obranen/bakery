'use client'

import { useThemeStore } from '@/store/useTheme.store'
import { ReactNode } from 'react'

export default function ProviderLayout({ children }: { children: ReactNode }) {
  const themeColor = useThemeStore((state) => state.themeColor)
  
  return (
    <body data-theme={themeColor}>
      {children}
    </body>
  )
}
