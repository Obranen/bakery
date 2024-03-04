'use client'

import { useThemeStore } from '@/store/useTheme.store'
import { MouseEvent, useEffect, useRef } from 'react'
import Image from 'next/image'

const ToggleTheme = () => {
  const setThemeColor = useThemeStore((state) => state.setThemeColor)
  const themeColor = useThemeStore((state) => state.themeColor)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)')

    if (isDarkTheme.matches) {
      inputRef.current!.checked = false
    } else {
      inputRef.current!.checked = true
    }

    if (JSON.parse(localStorage.getItem('theme')!)) {
      let themeValue = JSON.parse(localStorage.getItem('theme')!)
      setThemeColor(themeValue)
    }
  }, [])

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('theme')!)) {
      if (themeColor === 'dark') {
        inputRef.current!.checked = false
      } else {
        inputRef.current!.checked = true
      }
    }
  }, [themeColor])

  const toggleThemeChange = (e: MouseEvent<HTMLInputElement>) => {
    if (e.currentTarget.checked) {
      localStorage.setItem('theme', JSON.stringify('light'))
      setThemeColor('light')
    } else {
      localStorage.setItem('theme', JSON.stringify('dark'))
      setThemeColor('dark')
    }
  }

  return (
    <label className='mr-2 swap swap-rotate'>
      <input type='checkbox' ref={inputRef} onClick={toggleThemeChange} />
      <Image
        src='/image/toggleTheme/sun.svg'
        alt={'sun'}
        width={5}
        height={5}
        className='w-5 h-5 fill-current swap-on'
      />
      <Image
        src='/image/toggleTheme/moon.svg'
        alt={'moon'}
        width={5}
        height={5}
        className='w-5 h-5 fill-current swap-off'
      />
    </label>
  )
}

export default ToggleTheme
