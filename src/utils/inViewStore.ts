"use client";
import { create } from "zustand";

interface InViewState {
  inViewMap: Record<string, boolean>;
  setInView: (id: string, inView: boolean) => void;
  resetInView: (id: string) => void;
  resetAll: () => void;
}

export const useInViewStore = create<InViewState>((set) => ({
  inViewMap: {},
  setInView: (id, inView) =>
    set((state) => ({
      inViewMap: {
        ...state.inViewMap,
        [id]: inView,
      },
    })),
  resetInView: (id) =>
    set((state) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { [id]: _, ...rest } = state.inViewMap;
      return { inViewMap: rest };
    }),
  resetAll: () => set({ inViewMap: {} }),
}));
