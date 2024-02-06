import { paths } from "@/config";
import { ModuleRoute } from "@/shared/types/config";
import Home from "./Home";
import Counter from "./Counter";
import CreatingElements from "./CreatingElements";
import Register from "./Register";

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
];

export default routes;
