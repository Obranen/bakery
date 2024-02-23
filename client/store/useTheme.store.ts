import { create } from 'zustand'

interface IUseThemeStore {
  themeColor: string
  setThemeColor: (theme: string) => void
}

export const useThemeStore = create<IUseThemeStore>((set) => ({
  themeColor: '',
  setThemeColor: (theme) =>
    set({
      themeColor: theme,
    }),
}))
