import { PropsWithChildren } from "react";
import NavMenu from "../NavMenu/NavMenu";
import "./Layout.css";
import { Link } from "react-router-dom";
import { paths } from "@/config";

const Layout = ({ children }: PropsWithChildren) => {
   return (
      <div className="page">
         <div className="sidebar">
            <NavMenu />
         </div>
         <main>
            <div className="top-row px-4">
               <Link style={{ marginRight: 10 }} to={paths.register}>
                  Register
               </Link>
               <Link to={paths.login}>Log in</Link>
            </div>
            <article className="content px-4">{children}</article>
         </main>
      </div>
   );
};

export default Layout;
