import type { UserInfo } from '#/user';
import { TOKEN_KEY, USER_INFO_KEY, ROLES_KEY } from '@/enums/cacheEnum';
import { getAuthCache, setAuthCache } from '@/utils/auth';
import { login as loginApi, getUserInfo } from '@/apis/index';
import { defineStore } from 'pinia';
import { RoleEnum } from '../../enums/roleEnum';
import router from '@/router';
import { PageEnum } from '@/enums/pageEnum';

interface UserState {
  userInfo: Nullable<UserInfo>;
  token?: string;
  roleList: RoleEnum[];
  sessionTimeout?: boolean;
  lastUpdateTime: number;
}

export const useUserStore = defineStore({
  id: 'app-user',
  state: (): UserState => {
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
      return this.userInfo || getAuthCache<UserInfo>(USER_INFO_KEY) || {};
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
    setToken(info: string | undefined) {
      this.token = info ? info : '';
      setAuthCache(TOKEN_KEY, info);
    },
    setUserInfo(info: UserInfo | null) {
      this.userInfo = info;
      this.lastUpdateTime = new Date().getTime();
      setAuthCache(USER_INFO_KEY, info);
    },
    /**
     * 登陆
     */
    async login(params: API.LoginParams) {
      const data = await loginApi(params);
      const { token } = data;
      this.setToken(token);
      return this.afterLocationAction();
    },
    async afterLocationAction() {
      if (!this.getToken) return null;
      const userInfo = await this.getUserInfoAction();
      return userInfo;
    },
    async getUserInfoAction(): Promise<UserInfo | null> {
      if (!this.getToken) return null;
      const userInfo = await getUserInfo();
      return userInfo;
    },
    /**
     * 登出
     */
    async logout(goLogin = false) {
      this.setToken(undefined);
      this.setUserInfo(null);
      goLogin && router.push(PageEnum.BASE_LOGIN);
    }
  }
});
