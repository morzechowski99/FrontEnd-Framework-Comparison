import { useState } from "react";
import "./NavMenu.css";
import { Link } from "react-router-dom";
import { paths } from "@/config";
import AuthorizeView from "../AuthorizeView";

const NavMenu = () => {
   const [collapseNavMenu, setCollapseNavMenu] = useState(false);
   const toggleNavMenu = () => {
      setCollapseNavMenu(!collapseNavMenu);
   };

   const NavMenuCssclassName = collapseNavMenu ? "collapse" : null;
   return (
      <>
         <div className="nav-top-row ps-3 navbar navbar-dark">
            <div className="container-fluid">
               <Link className="navbar-brand" to={paths.home}>
                  ReactFrontEnd
               </Link>
               <button
                  title="Navigation menu"
                  className="navbar-toggler"
                  onClick={toggleNavMenu}
               >
                  <span className="navbar-toggler-icon"></span>
               </button>
            </div>
         </div>

         <div
            className={`${NavMenuCssclassName} nav-scrollable`}
            onClick={toggleNavMenu}
         >
            <nav className="flex-column">
               <div className="nav-item px-3">
                  <Link className="nav-link" to={paths.home}>
                     <span
                        className="oi oi-home"
                        style={{ color: "white" }}
                        aria-hidden="true"
                     ></span>
                     Home
                  </Link>
               </div>
               <div className="nav-item px-3">
                  <Link className="nav-link" to={paths.counter}>
                     <span className="oi oi-plus" aria-hidden="true"></span>
                     Counter
                  </Link>
               </div>
               <div className="nav-item px-3">
                  <Link className="nav-link" to={paths.creatingElements}>
                     <span className="oi oi-plus" aria-hidden="true"></span>
                     Creating Elements
                  </Link>
               </div>
               <AuthorizeView
                  authorized={
                     <div className="nav-item px-3">
                        <Link
                           className="nav-link"
                           to={paths.serverCommunication}
                        >
                           <span className="oi oi-monitor"></span> Form and
                           Server
                        </Link>
                     </div>
                  }
               />
               {/*<div className="nav-item px-3">
                  <NavLink className="nav-link" href="calculator">
                     <span
                        className="oi oi-calculator"
                        aria-hidden="true"
                     ></span>{" "}
                     Calculator - lazy loading
                  </NavLink>
               </div>
               */}
            </nav>
         </div>
      </>
   );
};
export default NavMenu;
