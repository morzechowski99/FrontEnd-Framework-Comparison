import { PropsWithChildren } from "react";
import NavMenu from "../NavMenu/NavMenu";
import "./Layout.css";

const Layout = ({ children }: PropsWithChildren) => {
   return (
      <div className="page">
         <div className="sidebar">
            <NavMenu />
         </div>
         <main>
            <div className="top-row px-4">test</div>
            <article className="content px-4">{children}</article>
         </main>
      </div>
   );
};

export default Layout;
