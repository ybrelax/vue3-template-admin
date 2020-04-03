import router from "@/router";
import { Route } from "vue-router";
import { UserModule } from "@/store/modules/user";
import { PermissionModule } from "@/store/modules/permission";

const whiteList = ["/login"];

export default async (to: Route, _: Route, next: any) => {
  if (UserModule.token) {
    // if user has been login, redirect dashboard page
    if (to.path === "/login") {
      next({ path: "/" });
    } else {
      if (UserModule.roles.length === 0) {
        // check user permission
        await UserModule.GetUserInfo();
        const roles = UserModule.roles;

        // generate accessible routes based on role
        PermissionModule.GenerateRoutes(roles);
        router.addRoutes(PermissionModule.dynamicRoutes);

        next({ ...to, replace: true });
      } else {
        next();
      }
    }
  } else {
    /**
     * you should access to whitelist
     * or return login page
     *  */
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next(`/login?redirect=${to.path}`);
    }
  }
};
