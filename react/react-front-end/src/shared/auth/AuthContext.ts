import { createContext } from "react";
import { SignedIdUser } from "../types/interfaces";

export type AuthContextProps = {
   isAuthenticated: boolean;
   login: (token: string) => void;
   logout: () => void;
   userData?: SignedIdUser;
};

const AuthContext = createContext<AuthContextProps>({
   isAuthenticated: false,
   login: () => {},
   logout: () => {},
});

export default AuthContext;
