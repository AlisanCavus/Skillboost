import { create } from 'zustand'

interface ToastState {
  isToast: boolean
  change: (by: boolean) => void
}

export const useToastStore = create<ToastState>()((set) => ({
  isToast: false,
  change: () => set((state) => ({ isToast: !state.isToast })),
}))