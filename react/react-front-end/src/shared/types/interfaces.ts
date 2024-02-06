import { JwtPayload } from "jwt-decode";

export interface Person {
   firstName?: string;
   surname?: string;
   dateOfBirth: Date;
   gender?: string;
}

export interface TokenData extends JwtPayload {
   "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name": string;
   "http://schemas.microsoft.com/ws/2008/06/identity/claims/role": string;
   exp: number;
   jti: string;
}

export interface SignedIdUser {
   name: string;
   role: string;
}
