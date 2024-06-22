import { CarItemDto, CarsService } from "@/shared/services/cars";
import { useCallback } from "react";

interface CarListProps {
   cars: CarItemDto[];
   onDeleted?: () => void;
}

const CarList = ({ cars, onDeleted }: CarListProps) => {
   const deleteCar = useCallback(
      async (id?: string) => {
         if (id && confirm("Are you sure you want to delete this car?")) {
            console.time("deleteApiCars");
            await CarsService.deleteApiCars({ id: id });
            console.timeEnd("deleteApiCars");
            onDeleted && onDeleted();
         }
      },
      [onDeleted]
   );
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
                        <button
                           className="btn btn-danger"
                           onClick={() => deleteCar(car.id)}
                        >
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
