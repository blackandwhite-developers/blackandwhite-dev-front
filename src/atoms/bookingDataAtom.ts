import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { SyncStorage } from "jotai/vanilla/utils/atomWithStorage";

const getDefaultStorage = (): SyncStorage<BookingData[]> | undefined => {
  if (typeof window !== "undefined") {
    return {
      getItem: (key) => {
        const value = localStorage.getItem(key);
        return value === null ? [] : JSON.parse(value);
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

type BookingData = {
  lodgeData: {
    name: string;
  };
  roomData: {
    _id: string;
    event: string;
    time: {
      checkIn: string;
      checkOut: string;
    };
    price: { 
      price: number;
    };
    stock: number;
    capacity: { standard: number; maximum: number };
    startDate: string;
    endDate: string;
  };
};

/** 예약 내역 */
export const bookingDataAtom = atomWithStorage<BookingData[]>("bookingData", [], getDefaultStorage());

export const adultCountAtom = atom<number>(1);
export const childCountAtom = atom<number>(0);
