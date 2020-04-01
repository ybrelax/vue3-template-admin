import {
  Module,
  Mutation,
  VuexModule,
  Action,
  getModule
} from "vuex-module-decorators";
import { login } from "@/apis/users";
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
    console.log('data:', data)
    if (!data) {
      return false;
    } else {
      return true;
    }
  }
}

export const UserModule = getModule(User);
