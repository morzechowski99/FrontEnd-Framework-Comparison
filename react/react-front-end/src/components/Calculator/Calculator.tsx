import { useMemo, useState } from "react";

interface CalculatorProps {
   number1: string | number;
   number2: string | number;
   result?: number;
}

const Calculator = () => {
   const [numbers, setNumbers] = useState<CalculatorProps>({
      number1: "",
      number2: "",
   });
   const { number1, number2, result } = numbers;
   const canNotAdd = useMemo(() => !(number1 && number2), [number1, number2]);
   const Add = () => {
      if (number1 && number2)
         setNumbers({ ...numbers, result: +number1 + +number2 });
   };
   const Reset = () => {
      setNumbers({ number1: "", number2: "" });
   };
   return (
      <>
         <div className="row mb-2">
            <div className="col-md-3">
               <input
                  type="number"
                  className="form-control"
                  value={number1}
                  onChange={(e) =>
                     setNumbers({ ...numbers, number1: +e.target.value })
                  }
               />
            </div>
            <div className="col-md-1 text-center">
               <h3>+</h3>
            </div>
            <div className="col-md-3">
               <input
                  type="number"
                  className="form-control"
                  value={number2}
                  onChange={(e) =>
                     setNumbers({ ...numbers, number2: +e.target.value })
                  }
               />
            </div>
            <div className="col-md-1 text-center">
               <h3>=</h3>
            </div>
            <div className="col-md-1 text-center">
               <h3>{result}</h3>
            </div>
         </div>
         <button
            className="btn btn-primary m-2"
            disabled={canNotAdd}
            onClick={Add}
         >
            Add
         </button>
         <button className="btn btn-danger m-2" onClick={Reset}>
            Reset
         </button>
      </>
   );
};

export default Calculator;
