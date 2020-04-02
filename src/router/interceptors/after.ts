import { Route } from "vue-router";

export default (to: Route) => {
  // you can set title there
  document.title = to.meta.title
};
