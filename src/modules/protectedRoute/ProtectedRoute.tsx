import { PropsWithChildren } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector as useSelector } from "../../app/hooks";
import { getUserInfo } from "../../app/selectors/auth";

interface IProtectedRouteProps extends PropsWithChildren {
  onlyUnAuth?: boolean;
}

export const ProtectedRoute = ({
  onlyUnAuth = false,
  children,
}: IProtectedRouteProps): JSX.Element => {
  const user = useSelector(getUserInfo);
  const location = useLocation();

  if (!user?.email && !onlyUnAuth) {
    return <Navigate to="/admin/login" state={{ from: location.pathname }} />;
  } else if (onlyUnAuth && user?.email) {
    return <Navigate to={location?.state?.from || "/"} />;
  } else {
    return <>{children}</>;
  }
};
