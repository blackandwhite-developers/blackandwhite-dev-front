import { atomWithStorage } from "jotai/utils";
import { SyncStorage } from "jotai/vanilla/utils/atomWithStorage";

const getDefaultStorage = (): SyncStorage<FindIdData> | undefined => {
  if (typeof window !== "undefined") {
    return {
      getItem: (key) => {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : initialFindIdData;
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

interface FindIdData {
  email: string;
  createdAt: Date;
}

const initialFindIdData: FindIdData = {
  email: "",
  createdAt: new Date(),
};

export const findIdAtom = atomWithStorage<FindIdData>("findId", initialFindIdData, getDefaultStorage());
