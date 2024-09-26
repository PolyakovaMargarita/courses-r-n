import { atom } from "jotai";
import { User } from "./user.model";

export interface UserState {
  profile: User | null;
  isLoading: boolean;
  error: string | null;
}

export const ProfileAtom = atom<UserState>({
  profile: {
    id: 1,
    name: "Name",
  },
  isLoading: false,
  error: null,
});
