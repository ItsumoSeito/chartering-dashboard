import { Mutate, create } from 'zustand';

export type Store = {
  userGroups: string[];
  loggedIn: boolean;
  setLoggedIn: (loggedIn: boolean) => void;
  setUserGroups: (userGroups: string[]) => void;
};

export const useStore = create<Store>()((set) => ({
  userGroups: [],
  loggedIn: false,
  setLoggedIn: (loggedIn: boolean) => set({ loggedIn }),
  setUserGroups: (userGroups: string[]) => set({ userGroups }),
}));
