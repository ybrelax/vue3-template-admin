import {
  Module,
  Mutation,
  VuexModule,
  Action,
  getModule
} from "vuex-module-decorators";
import { login, getUserInfo } from "@/apis/users";
import store from "@/store";

export interface IUserState {
  token: string;
  name: string;
  roles: string[];
}

@Module({ dynamic: true, store, name: "user" })
class User extends VuexModule implements IUserState {
  public token = "";
  public name = "";
  public roles: string[] = [];

  @Mutation
  private SET_TOKEN(token: string) {
    this.token = token;
  }

  @Mutation
  private SET_NAME(name: string) {
    this.name = name;
  }

  @Mutation
  private SET_ROLES(roles: string[]) {
    this.roles = roles;
  }

  @Action
  public async Login(userInfo: { username: string; password: string }) {
    let { username, password } = userInfo;
    username = username.trim();
    const {data} = await login({ username, password });
    const {token, name} = data;
    this.SET_TOKEN(token);
    this.SET_NAME(name);
  }

  @Action
  public async GetUserInfo() {
    if (this.token === '') {
      throw Error('GetUserInfo: token is undefined!')
    }
    const { data } = await getUserInfo({ /* Your params here */ })
    console.log('roles:', data)
    const {roles} = data;
    this.SET_ROLES(roles)
  }
}

export const UserModule = getModule(User);
