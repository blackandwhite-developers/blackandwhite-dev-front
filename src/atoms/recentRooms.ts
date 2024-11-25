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
  rooms: Array<ILodge>;
  constructor(data: { rooms: Array<ILodge> }) {
    this.rooms = data.rooms;
  }
}

const initialState: RecentRoomsState = {
  rooms: [],
};

export const recentRoomsAtom = atomWithStorage<RecentRoomsState>("recentRooms", initialState, getDefaultStorage());
