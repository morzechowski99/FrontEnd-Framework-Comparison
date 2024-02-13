import "bootstrap/dist/css/bootstrap.min.css";
import "../css/index.css";
import Layout from "@/components/Layout/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "@/pages/routes";
import AuthProvider from "@/components/AuthProvider";
import PrivateRoute from "@/components/PrivateRoute";

const App = () => {
   return (
      <AuthProvider>
         <Router>
            <Layout>
               <Routes>
                  {routes.map((route) =>
                     route.public ? (
                        <Route key={route.path} {...route} />
                     ) : (
                        <Route key={route.path} element={<PrivateRoute />}>
                           <Route {...route} />
                        </Route>
                     )
                  )}
               </Routes>
            </Layout>
         </Router>
      </AuthProvider>
   );
};

export default App;
