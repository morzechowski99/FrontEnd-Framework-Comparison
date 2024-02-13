import { CarItemDto } from "@/shared/services/cars";

interface CarListProps {
   cars: CarItemDto[];
}

const CarList = ({ cars }: CarListProps) => {
   return (
      <div className="mt-2">
         <table className="table table-striped">
            <thead>
               <tr>
                  <th scope="col">#</th>
                  <th scope="col">Brand</th>
                  <th scope="col">Model</th>
                  <th scope="col">ManufacturedDate</th>
                  <th scope="col">Power</th>
                  <th scope="col">Leap Capacity</th>
                  <th scope="col"></th>
               </tr>
            </thead>
            <tbody>
               {cars.map((car) => (
                  <tr key={car.id}>
                     <th scope="row">{car.id}</th>
                     <td>{car.brand}</td>
                     <td>{car.model}</td>
                     <td>{car.manufacturedDate}</td>
                     <td>{car.power}</td>
                     <td>{car.leapCapacity}</td>
                     <td>
                        <button className="btn btn-danger" onClick={() => {}}>
                           Delete
                        </button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
};

export default CarList;
