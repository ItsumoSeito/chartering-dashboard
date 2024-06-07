import { Mutate, create } from 'zustand';
import { UserGroup } from './models/UserGroup';

export type Store = {
  userGroups: UserGroup[];
  loggedIn: boolean;
  setLoggedIn: (loggedIn: boolean) => void;
  setUserGroups: (userGroups: UserGroup[]) => void;
};

export const useStore = create<Store>()((set) => ({
  userGroups: [],
  loggedIn: false,
  setLoggedIn: (loggedIn) => set({ loggedIn }),
  setUserGroups: (userGroups) => set({ userGroups }),
}));
