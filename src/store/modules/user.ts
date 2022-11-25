import type { UserInfo } from '#/user';
import { TOKEN_KEY, USER_INFO_KEY, ROLES_KEY } from '@/enums/cacheEnum';
import { getAuthCache } from '@/utils/auth';
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
      return this.userInfo || getAuthCache<UserInfo>(USER_INFO_KEY);
    },
    getToken(): string {
      return this.token || getAuthCache<string>(TOKEN_KEY);
    },
    getRoleList(): RoleEnum[] {
      return this.roleList.length > 0 ? this.roleList : getAuthCache<RoleEnum[]>(ROLES_KEY);
    },
    getSessionTimeout(): boolean {
      return !!this.sessionTimeout;
    },
    getLastUpdateTime(): number {
      return this.lastUpdateTime;
    }
  },
  actions: {
    // updateName(name: string) {
    //   this.name = name;
    // }
  }
});
