import AuthContext from "@/shared/auth/AuthContext";
import React, { useContext } from "react";

export interface AuthorizeViewProps {
   authorized: React.ReactElement;
   notAuthorized: React.ReactElement;
}

const AuthorizeView = ({ authorized, notAuthorized }: AuthorizeViewProps) => {
   const { isAuthenticated } = useContext(AuthContext);
   return isAuthenticated ? authorized : notAuthorized;
};

export default AuthorizeView;
