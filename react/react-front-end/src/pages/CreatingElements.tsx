import PeopleList from "@/components/PeopleList";
import { Person } from "@/shared/types/interfaces";
import { useCallback, useMemo, useReducer } from "react";

const prototype: Person = {
   firstName: "John",
   dateOfBirth: new Date(),
   surname: "Doe",
   gender: "male",
};

enum RenderCount {
   EMPTY = "EMPTY",
   RENDER_100 = "100",
   RENDER_1000 = "RENDER_1000",
   RENDER_10000 = "RENDER_10000",
   ADD = "ADD",
}

interface RenderAction {
   type: RenderCount;
}

const CreatingElements = () => {
   const createPeopleArray = useCallback(
      (count: number) =>
         Array.from({ length: count }).map(() => ({ ...prototype })),
      []
   );

   const people100: Person[] = useMemo(
      () => createPeopleArray(100),
      [createPeopleArray]
   );

   const people1000: Person[] = useMemo(
      () => createPeopleArray(1000),
      [createPeopleArray]
   );

   const people10000: Person[] = useMemo(
      () => createPeopleArray(10000),
      [createPeopleArray]
   );

   const renderPeopleReducer = useCallback(
      (state: Person[], action: RenderAction) => {
         switch (action.type) {
            case RenderCount.EMPTY:
               return [];
            case RenderCount.RENDER_100:
               return people100;
            case RenderCount.RENDER_1000:
               return people1000;
            case RenderCount.RENDER_10000:
               return people10000;
            case RenderCount.ADD:
               return [...state, { ...prototype }];
            default:
               throw new Error("Invalid action type");
         }
      },
      [people100, people1000, people10000]
   );

   const [people, dispatch] = useReducer(renderPeopleReducer, []);

   return (
      <>
         <h3>Creating Elements Performance</h3>
         <button
            className="btn btn-primary m-2"
            onClick={() => dispatch({ type: RenderCount.ADD })}
         >
            Add row
         </button>
         <button
            className="btn btn-primary m-2"
            onClick={() => dispatch({ type: RenderCount.RENDER_100 })}
         >
            Render 100
         </button>
         <button
            className="btn btn-primary m-2"
            onClick={() => dispatch({ type: RenderCount.RENDER_1000 })}
         >
            Render 1000
         </button>
         <button
            className="btn btn-primary m-2"
            onClick={() => dispatch({ type: RenderCount.RENDER_10000 })}
         >
            Render 10000
         </button>
         <button
            className="btn btn-danger m-2"
            onClick={() => dispatch({ type: RenderCount.EMPTY })}
         >
            Clear
         </button>
         <PeopleList persons={people} />
      </>
   );
};

export default CreatingElements;
