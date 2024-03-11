'use client'

import MoonSVG from '@/public/images/svg/MoonSVG'
import SunSVG from '@/public/images/svg/SunSVG'
import { useThemeStore } from '@/store/useTheme.store'
import { MouseEvent, useEffect, useRef } from 'react'

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

  const pressKeyButton = (e: any) => {
    if (e.key === 'Enter') {
      if (themeColor === 'dark') {
        localStorage.setItem('theme', JSON.stringify('light'))
        setThemeColor('light')
        inputRef.current!.checked = false
      } else {
        localStorage.setItem('theme', JSON.stringify('dark'))
        setThemeColor('dark')
        inputRef.current!.checked = true
      }
    }
  }

  return (
    <label
      className='mr-2 [&>svg]:hover:fill-highlightLight swap swap-rotate '
      onKeyDown={pressKeyButton}
    >
      <input type='checkbox' ref={inputRef} onClick={toggleThemeChange} />
      <SunSVG className='w-5 h-5 transition duration-150 ease-linear fill-tertiaryLight swap-on' />
      <MoonSVG className='w-5 h-5 transition duration-150 ease-linear fill-tertiaryDark swap-off' />
    </label>
  )
}

export default ToggleTheme
