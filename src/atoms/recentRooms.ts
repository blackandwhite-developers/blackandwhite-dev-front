import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { SyncStorage } from "jotai/vanilla/utils/atomWithStorage";

const getDefaultStorage = (): SyncStorage<RecentRoomsState> | undefined => {
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

export class RecentRoomsState {
  lodges: Array<{
    id: string;
    category: { id: string; title: string; thumbnail: string };
    name: string;
    rating: number;
    count: number;
    distance: string;
  }>;
  constructor(data: {
    lodges: Array<{
      id: string;
      category: { id: string; title: string; thumbnail: string };
      name: string;
      rating: number;
      count: number;
      distance: string;
    }>;
  }) {
    this.lodges = data.lodges;
  }
}

const initialState: RecentRoomsState = {
  lodges: [],
};

export const recentRoomsAtom = atomWithStorage<RecentRoomsState>("recentRooms", initialState, getDefaultStorage());
