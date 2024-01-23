import "bootstrap/dist/css/bootstrap.min.css";
import "../css/index.css";
import Layout from "@/components/Layout/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "@/pages/routes";
// (
//                      <Route key={route.path} element={<PrivateRoute />}>
//                         <Route {...route} />
//                      </Route>
//                   )
//                )
const App = () => {
   return (
      <Router>
         <Layout>
            <Routes>
               {routes.map((route) => (
                  <Route key={route.path} {...route} />
               ))}
            </Routes>
         </Layout>
      </Router>
   );
};

export default App;
