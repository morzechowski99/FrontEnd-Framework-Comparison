import AuthContext from "@/shared/auth/AuthContext";
import Auth from "@/shared/services/Auth";
import { SignedIdUser } from "@/shared/types/interfaces";
import { PropsWithChildren, useEffect, useMemo, useState } from "react";

const AuthProvider = ({ children }: PropsWithChildren) => {
   const [isAuthenticated, setIsAuthenticated] = useState(false);
   const [userData, setUserData] = useState<SignedIdUser | undefined>(
      undefined
   );
   const [firstRender, setFirstRender] = useState(true);
   const [initializing, setInitializing] = useState(true);
   const authContextProps = useMemo(
      () => ({
         isAuthenticated: isAuthenticated,
         login: (token: string) => {
            Auth.login(token);
            setIsAuthenticated(true);
            setUserData(Auth.getTokenData());
         },
         logout: () => {
            setIsAuthenticated(false);
            setUserData(undefined);
            Auth.logout();
         },
         userData: userData,
         initializing: initializing,
      }),
      [initializing, isAuthenticated, userData]
   );

   useEffect(() => {
      const token = Auth.getToken();
      if (token && firstRender) {
         authContextProps.login(token);
         setFirstRender(false);
         setInitializing(false);
      }
   }, [firstRender, authContextProps]);
   return (
      <AuthContext.Provider value={authContextProps}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;
