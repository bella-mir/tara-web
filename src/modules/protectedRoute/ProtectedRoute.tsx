import { PropsWithChildren } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface IProtectedRouteProps extends PropsWithChildren {
  onlyUnAuth?: boolean;
}

export const ProtectedRoute = ({
  onlyUnAuth = false,
  children,
}: IProtectedRouteProps): JSX.Element => {
  const location = useLocation();
  const token = localStorage.getItem("token"); // Replace 'token' with your actual key for the token

  if (!token && !onlyUnAuth) {
    // Token is not present and the route is protected
    return <Navigate to="/admin/login" state={{ from: location.pathname }} />;
  } else if (onlyUnAuth && token) {
    // Token is present and the route should only be for unauthenticated users
    return <Navigate to={location.state?.from || "/"} />;
  } else {
    // User is either authenticated and accessing a protected route or unauthenticated and accessing a public route
    return <>{children}</>;
  }
};

// import { PropsWithChildren } from "react";
// import { Navigate, useLocation } from "react-router-dom";
// import { useAppSelector as useSelector } from "../../app/hooks";
// import { getUserInfo } from "../../app/selectors/auth";

// interface IProtectedRouteProps extends PropsWithChildren {
//   onlyUnAuth?: boolean;
// }

// export const ProtectedRoute = ({
//   onlyUnAuth = false,
//   children,
// }: IProtectedRouteProps): JSX.Element => {
//   const user = useSelector(getUserInfo);
//   const location = useLocation();

//   if (!user?.email && !onlyUnAuth) {
//     return <Navigate to="/admin/login" state={{ from: location.pathname }} />;
//   } else if (onlyUnAuth && user?.email) {
//     return <Navigate to={location?.state?.from || "/"} />;
//   } else {
//     return <>{children}</>;
//   }
// };
