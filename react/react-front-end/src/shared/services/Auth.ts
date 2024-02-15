import { jwtDecode } from "jwt-decode";
import { OpenAPI } from "./cars";
import { SignedIdUser, TokenData as TokenData } from "../types/interfaces";

class Auth {
   static TOKEN_KEY = "auth_token";

   static login(token: string) {
      localStorage.setItem(this.TOKEN_KEY, token);
      OpenAPI.TOKEN = token;
   }

   static logout() {
      localStorage.removeItem(this.TOKEN_KEY);
      OpenAPI.TOKEN = undefined;
   }

   static getToken() {
      return localStorage.getItem(this.TOKEN_KEY);
   }

   static isAuthenticated() {
      return !!Auth.getToken();
   }

   static getTokenData() {
      const token = Auth.getToken();
      if (token) {
         const data = jwtDecode<TokenData>(token);
         const user: SignedIdUser = {
            role: data[
               "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
            ],
            name: data[
               "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"
            ],
         };
         return user;
      }
   }
}

export default Auth;
