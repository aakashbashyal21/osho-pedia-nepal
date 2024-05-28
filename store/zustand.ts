import { create } from 'zustand';

export const  useScrollStore = create((set) => ({
    scrollToBio: false,
    setScrollToBio: (value: any) => set({ scrollToBio: value }),
}));