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
    accessToken: string | null;
    refreshToken: string | null;
    isAuth: boolean;
    user: ILoginResponse | null;
    constructor(data: {
        accessToken: string | null;
        refreshToken: string | null;
        isAuth: boolean;
        user: ILoginResponse | null;
    }) {
        this.accessToken = data.accessToken;
        this.refreshToken = data.refreshToken;
        this.isAuth = data.isAuth;
        this.user = data.user;
    }
}

const initialState: AuthState = {
    accessToken: null,
    refreshToken: null,
    isAuth: false,
    user: null,
};

export const authAtom = atomWithStorage<AuthState>(
    "auth",
    initialState,
    getDefaultStorage()
);
interface DateRange {
    from: Date;
    to: Date;
    selected: void;
}
export const selectedDateRangeAtom = atom<DateRange | undefined>(undefined);

export const adultCountAtom = atom<number>(1);
export const childCountAtom = atom<number>(0);
