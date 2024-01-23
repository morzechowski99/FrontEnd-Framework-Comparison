import { paths } from "@/config";
import { ModuleRoute } from "@/shared/types/config";
import Home from "./Home";

const routes: ModuleRoute[] = [
   {
      path: paths.home,
      Component: () => Home(),
      public: true,
   },
];

export default routes;
