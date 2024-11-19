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

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  isAuth: boolean;
}

const initialState: AuthState = {
  accessToken: null,
  refreshToken: null,
  isAuth: false,
};

export const authAtom = atomWithStorage<AuthState>("auth", initialState, getDefaultStorage());
