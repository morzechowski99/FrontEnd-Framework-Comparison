import { useState } from "react";

const Counter = () => {
   const [currentCount, setCurrentCount] = useState(0);
   const incrementCount = () => {
      setCurrentCount((prevCount) => prevCount + 1);
   };
   return (
      <>
         <h1>Counter - Component refreshing performance</h1>
         <p role="status">Current count: {currentCount}</p>
         <button className="btn btn-primary" onClick={incrementCount}>
            Click me
         </button>
      </>
   );
};

export default Counter;
