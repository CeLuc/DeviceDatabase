export default defineNuxtRouteMiddleware((to) => {
  if (to.fullPath == "/login" || to.fullPath == "/logout") {
    if (to.fullPath == "/login") {
      return true;
    } else if (to.fullPath == "/logout") {
      if (process.client) {
        if (localStorage.getItem("authToken")) {
          localStorage.removeItem("authToken");
          return true;
        } else {
          return "/login";
        }
      }
    } else {
      return true;
    }
  } else {
    console.log(
      "Heading to",
      to.path,
      "but I think we should go somewhere else..."
    );
    if (process.client) {
      if (localStorage.getItem("authToken")) {
        return true;
      } else {
        return "/login";
      }
    }
  }
});
// export default defineNuxtRouteMiddleware(() => {
//   console.log("drunning global middleware");
// });
