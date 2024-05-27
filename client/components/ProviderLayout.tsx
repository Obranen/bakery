'use client'

import { useThemeStore } from '@/store/useTheme.store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'

const queryClient = new QueryClient()

export default function ProviderLayout({ children }: { children: ReactNode }) {
  const themeColor = useThemeStore((state) => state.themeColor)

  return (
    <QueryClientProvider client={queryClient}>
      <body
        data-theme={themeColor}
        className='bg-secondaryLight'
      >
        {children}
      </body>
    </QueryClientProvider>
  )
}
