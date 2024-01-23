import { useState } from "react";
import "./NavMenu.css";

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
               <a className="navbar-brand" href="">
                  ReactFrontEnd
               </a>
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
                  <a className="nav-link" href="">
                     <span
                        className="oi oi-home"
                        style={{ color: "white" }}
                        aria-hidden="true"
                     ></span>
                     Home
                  </a>
               </div>
               {/* <div className="nav-item px-3">
                  <NavLink className="nav-link" href="counter">
                     <span className="oi oi-plus" aria-hidden="true"></span>{" "}
                     Counter
                  </NavLink>
               </div>
               <div className="nav-item px-3">
                  <NavLink className="nav-link" href="creating-elements">
                     <span className="oi oi-plus" aria-hidden="true"></span>{" "}
                     Creating Elements
                  </NavLink>
               </div>
               <div className="nav-item px-3">
                  <NavLink className="nav-link" href="calculator">
                     <span
                        className="oi oi-calculator"
                        aria-hidden="true"
                     ></span>{" "}
                     Calculator - lazy loading
                  </NavLink>
               </div>
               <AuthorizeView>
                  <Authorized>
                     <div className="nav-item px-3">
                        <NavLink className="nav-link" href="formAndServer">
                           <span
                              className="oi oi-monitor"
                              aria-hidden="true"
                           ></span>{" "}
                           Form and Server
                        </NavLink>
                     </div>
                  </Authorized>
               </AuthorizeView> */}
            </nav>
         </div>
      </>
   );
};
export default NavMenu;
