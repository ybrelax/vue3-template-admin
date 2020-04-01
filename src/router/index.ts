import Vue from "vue";
import Router, {RouteConfig} from "vue-router";



/* Router modules */
import routes from "./module/index";

/**
 * constantRoutes
 * a common page for all roles
 */
export const constantRoutes: RouteConfig[] = [

];

/**
 * asyncRoutes
 * the routes that needs to be dynamically loaded based on user's roles
 */
export const asyncRoutes: RouteConfig[] = [

]

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes
})

export default  router;