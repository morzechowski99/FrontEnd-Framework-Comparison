import { paths } from "@/config";
import { ModuleRoute } from "@/shared/types/config";
import Home from "./Home";
import Counter from "./Counter";
import CreatingElements from "./CreatingElements";
import Register from "./Register";
import Login from "./Login";
import FormAndServerCommunication from "./FormAndServerCommunication";
import Calculator from "./Calculator";

const routes: ModuleRoute[] = [
   {
      path: paths.home,
      Component: () => Home(),
      public: true,
   },
   {
      path: paths.counter,
      Component: () => Counter(),
      public: true,
   },
   {
      path: paths.creatingElements,
      Component: () => CreatingElements(),
      public: true,
   },
   {
      path: paths.register,
      Component: () => Register(),
      public: true,
   },
   {
      path: paths.login,
      Component: () => Login(),
      public: true,
   },
   {
      path: paths.serverCommunication,
      Component: () => FormAndServerCommunication(),
      public: false,
   },
   {
      path: paths.calculator,
      Component: () => Calculator(),
      public: true,
   },
];

export default routes;
