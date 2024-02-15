import AuthContext from "@/shared/auth/AuthContext";
import { paths } from "@/config";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
   const { isAuthenticated, initializing } = useContext(AuthContext);
   return initializing || isAuthenticated ? (
      <Outlet />
   ) : (
      <Navigate replace to={paths.login} />
   );
};

export default PrivateRoute;
