const CreatingElements = () => {
   const [people, setPeople] = useState<Person[]>([]);
   return (
      <>
         <h3>Creating Elements Performance</h3>
         <button className="btn btn-primary" onClick="AddPerson">
            Add row
         </button>
         <button className="btn btn-primary" onClick="() => Render(100)">
            Render 100
         </button>
         <button className="btn btn-primary" onClick="() => Render(1000)">
            Render 1000
         </button>
         <button className="btn btn-primary" onClick="() => Render(10000)">
            Render 10000
         </button>
         <button className="btn btn-danger" onClick="ClearTable">
            Clear
         </button>
      </>
   );
};

export default CreatingElements;
