import { atomWithStorage } from "jotai/utils";
import { SyncStorage } from "jotai/vanilla/utils/atomWithStorage";

const getDefaultStorage = (): SyncStorage<userInfoState> | undefined => {
  if (typeof window !== "undefined") {
    return {
      getItem: (key) => {
        const value = localStorage.getItem(key);
        return value === null ? initUserInfo : JSON.parse(value);
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

export class userInfoState {
  name: string;
  phone: string;
  birth: string;
  nickname: string;
  profilePicture: string;
  constructor(data: { name: string; phone: string; birth: string; nickname: string; profilePicture: string }) {
    this.name = data.name;
    this.phone = data.phone;
    this.birth = data.birth;
    this.nickname = data.nickname;
    this.profilePicture = data.profilePicture;
  }
}

const initUserInfo = {
  name: "",
  phone: "",
  birth: "",
  nickname: "",
  profilePicture: "",
};

export const userInfoAtom = atomWithStorage<userInfoState>("userInfo", initUserInfo, getDefaultStorage());
