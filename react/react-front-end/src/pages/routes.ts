import { paths } from "@/config";
import { ModuleRoute } from "@/shared/types/config";
import Home from "./Home";
import Counter from "./Counter";

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
];

export default routes;
