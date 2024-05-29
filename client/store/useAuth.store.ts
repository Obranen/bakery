import { create } from 'zustand'

interface IUseAuthStore {
  isSignedIn: boolean
  setIsSignedIn: (isSignedIn: boolean) => void
}

export const useAuthStore = create<IUseAuthStore>((set) => ({
  isSignedIn: false,
  setIsSignedIn: (isSignedIn) =>
    set({
      isSignedIn: isSignedIn,
    }),
}))
