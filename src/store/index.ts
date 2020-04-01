import Vue from "vue";
import Vuex from "vuex";
import { IPermissionState } from './modules/permission';

Vue.use(Vuex);

export interface IRootState {
  permission: IPermissionState
}


export default new Vuex.Store<IRootState>({})
