import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type ComparisonState = {
  selectedIds: string[]
  toggle: (id: string) => void
  remove: (id: string) => void
  clear: () => void
}

export const MAX_SELECTED = 3

export const useComparisonStore = create<ComparisonState>()(
  persist(
    (set) => ({
      selectedIds: [],
      toggle: (id) =>
        set((state) => {
          if (state.selectedIds.includes(id)) {
            return { selectedIds: state.selectedIds.filter((x) => x !== id) }
          }
          if (state.selectedIds.length >= MAX_SELECTED) {
            return state
          }
          return { selectedIds: [...state.selectedIds, id] }
        }),
      remove: (id) =>
        set((state) => ({
          selectedIds: state.selectedIds.filter((x) => x !== id),
        })),
      clear: () => set({ selectedIds: [] }),
    }),
    { name: 'comparison' },
  ),
)
