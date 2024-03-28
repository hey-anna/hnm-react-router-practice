// import React from "react";
// import { Navigate, useLocation } from "react-router-dom";

// const withAuthRoutes = ["/product"];
// console.log("##### Navigate", Navigate);

// export default function Auth({ children }) {
//   // const { isLoggedIn } = authStore();
// //   const access = sessionStorage.getItem("access");
// //   const refresh = sessionStorage.getItem("refresh");
// //   const isLoggedIn = access && refresh;
//   const { pathname } = useLocation();

// //   console.log("##### isLoggedIn:", isLoggedIn);
//   console.log("##### pathname:", pathname);

//   if (withAuthRoutes.includes(pathname) && !isLoggedIn) {
//     return <Navigate to="/login" replace />;
//   }
//   return children;
// }
