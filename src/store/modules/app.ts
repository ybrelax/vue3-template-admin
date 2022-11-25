import type { ProjectConfig, MenuSetting } from '#/config';
import type { BeforeMiniState } from '#/store';
import { APP_DARK_MODE_KEY_ } from '@/enums/cacheEnum';
import { ThemeEnum } from '@/enums/appEnum';
import { PROJ_CFG_KEY } from '@/enums/cacheEnum';
import { darkMode } from '@/settings/designSetting';
import { Persistent } from '@/utils/cache/persistent';
import { defineStore } from 'pinia';

interface AppState {
  darkMode?: ThemeEnum;
  pageLoading: boolean;
  projectConfig: ProjectConfig | null;
  beforeMiniInfo: BeforeMiniState;
}

export const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => ({
    darkMode: undefined,
    pageLoading: false,
    projectConfig: Persistent.getLocal(PROJ_CFG_KEY),
    beforeMiniInfo: {}
  }),
  getters: {
    getPageLoading(): boolean {
      return this.pageLoading;
    },
    getDarkMode(): 'ligth' | 'dark' | string {
      return this.darkMode || localStorage.getItem(APP_DARK_MODE_KEY_) || darkMode;
    },
    getBeforeMiniInfo(): BeforeMiniState {
      return this.beforeMiniInfo;
    },
    getProjectConfig(): ProjectConfig {
      return this.projectConfig || ({} as ProjectConfig);
    },
    getMenuSetting(): MenuSetting {
      return this.getProjectConfig.menuSetting;
    }
  }
});
