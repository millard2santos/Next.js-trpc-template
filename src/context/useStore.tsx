import { create } from 'zustand'

type StoreType = {
    bears: number,
    increasePopulation: () => void,
    removeAllBears: () => void,
}

const store = create<StoreType>((set) => ({
    bears: 0,
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
}))

export const useStore: () => StoreType = () => store((state) => state)