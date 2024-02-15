import { PropsWithChildren, useContext } from "react";
import NavMenu from "../NavMenu/NavMenu";
import "./Layout.css";
import { Link } from "react-router-dom";
import { paths } from "@/config";
import AuthContext from "@/shared/auth/AuthContext";
import AuthorizeView from "../AuthorizeView";

const Layout = ({ children }: PropsWithChildren) => {
   const { logout, userData } = useContext(AuthContext);
   return (
      <div className="page">
         <div className="sidebar">
            <NavMenu />
         </div>
         <main>
            <div className="top-row px-4">
               <AuthorizeView
                  authorized={
                     <>
                        <span style={{ marginRight: 10 }}>
                           Hello {userData?.name}
                        </span>
                        <a
                           href="#"
                           onClick={(e) => {
                              e.preventDefault();
                              logout();
                           }}
                        >
                           Log out
                        </a>
                     </>
                  }
                  notAuthorized={
                     <>
                        <Link style={{ marginRight: 10 }} to={paths.register}>
                           Register
                        </Link>
                        <Link to={paths.login}>Log in</Link>
                     </>
                  }
               />
            </div>
            <article className="content px-4">{children}</article>
         </main>
      </div>
   );
};

export default Layout;
