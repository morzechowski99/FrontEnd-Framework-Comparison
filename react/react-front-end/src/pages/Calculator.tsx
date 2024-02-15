import { Suspense, lazy } from "react";

const Calculator = () => {
   const Calculator = lazy(() => import("@/components/Calculator/Calculator"));
   return (
      <>
         <h3>Calculator - lazy loading</h3>
         <Suspense fallback={<div>Loading...</div>}>
            <Calculator />
         </Suspense>
      </>
   );
};

export default Calculator;
