import { create } from 'zustand';

// Define the shape of your store state
type MockState = {
  count: number;
  increase: () => void;
  decrease: () => void;
  reset: () => void;
};

// Create the store
export const useMockStore = create<MockState>((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));
