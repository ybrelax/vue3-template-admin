import type { UserInfo } from '#/user';
import { defineStore } from 'pinia';
import { RoleEnum } from '../../enums/roleEnum';

interface UserState {
  userInfo: Nullable<UserInfo>;
  token?: string;
  roleList: RoleEnum[];
  sessionTimeout?: boolean;
  lastUpdateTime: number;
}

export const useUserStore = defineStore({
  id: 'app-user',
  state: () => {
    return {
      userInfo: null,
      token: undefined,
      roleList: [],
      sessionTimeout: false,
      lastUpdateTime: 0
    };
  },
  getters: {
    getUserInfo(): UserInfo {
      return this.userInfo;
    }
  },
  actions: {
    // updateName(name: string) {
    //   this.name = name;
    // }
  }
});
