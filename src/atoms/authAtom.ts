import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { SyncStorage } from "jotai/vanilla/utils/atomWithStorage";

const getDefaultStorage = (): SyncStorage<AuthState> | undefined => {
  if (typeof window !== "undefined") {
    return {
      getItem: (key) => {
        const value = localStorage.getItem(key);
        return value === null ? initialState : JSON.parse(value);
      },
      setItem: (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
      },
      removeItem: (key) => {
        localStorage.removeItem(key);
      },
    };
  }
  return undefined;
};

export class AuthState {
  isAuth: boolean;
  user: ILoginResponse | null;
  constructor(data: { isAuth: boolean; user: ILoginResponse | null }) {
    this.isAuth = data.isAuth;
    this.user = data.user;
  }
}

const initialState: AuthState = {
  isAuth: false,
  user: null,
};

export const authAtom = atomWithStorage<AuthState>("auth", initialState, getDefaultStorage());
interface DateRange {
  endDate: Date;
  startDate: Date;
  from: Date;
  to: Date;
  selected: boolean;
}
export const selectedDateRangeAtom = atom<DateRange | undefined>(undefined);
