import PeopleList from "@/components/PeopleList";
import { Person } from "@/shared/types/interfaces";
import { useCallback, useMemo, useState } from "react";

const CreatingElements = () => {
   const [people, setPeople] = useState<Person[]>([]);
   const prototype: Person = useMemo(
      () => ({
         firstName: "John",
         dateOfBirth: new Date(),
         surname: "Doe",
         gender: "male",
      }),
      []
   );

   const createPeopleArray = useCallback(
      (count: number) => {
         const people = [];
         for (let i = 0; i < count; i++) {
            people.push({ ...prototype });
         }
         return people;
      },
      [prototype]
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

   const AddPerson = () => {
      setPeople((prev) => [...prev, { ...prototype }]);
   };

   const render = (count: number) => {
      switch (count) {
         case 100:
            setPeople(people100);
            break;
         case 1000:
            setPeople(people1000);
            break;
         case 10000:
            setPeople(people10000);
            break;
         default:
            throw new Error("Invalid count");
      }
   };

   const clearTable = () => {
      setPeople([]);
   };

   return (
      <>
         <h3>Creating Elements Performance</h3>
         <button className="btn btn-primary m-2" onClick={AddPerson}>
            Add row
         </button>
         <button className="btn btn-primary m-2" onClick={() => render(100)}>
            Render 100
         </button>
         <button className="btn btn-primary m-2" onClick={() => render(1000)}>
            Render 1000
         </button>
         <button className="btn btn-primary m-2" onClick={() => render(10000)}>
            Render 10000
         </button>
         <button className="btn btn-danger m-2" onClick={clearTable}>
            Clear
         </button>
         <PeopleList persons={people} />
      </>
   );
};

export default CreatingElements;
