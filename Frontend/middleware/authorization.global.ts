export default defineNuxtRouteMiddleware((to) => {
  const jwt = useCookie("jwt");
  if (to.fullPath == "/login" || to.fullPath == "/logout") {
    if (to.fullPath == "/login") {
      return true;
    } else if (to.fullPath == "/logout") {
      if (jwt) {
        jwt.value = null;
        if (process.client) {
          localStorage.removeItem("currentUser");
        }
        return true;
      } else {
        return "/login";
      }
    } else {
      return true;
    }
  } else {
    if (jwt.value) {
      return true;
    } else {
      return "/login";
    }
  }
});
// export default defineNuxtRouteMiddleware(() => {
//   console.log("drunning global middleware");
// });
