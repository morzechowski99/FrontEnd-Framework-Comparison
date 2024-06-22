import CarForm from "@/components/CarForm/CarForm";
import CarList from "@/components/CarList";
import { CarItemDto, CarsService } from "@/shared/services/cars";
import { useCallback, useEffect, useState } from "react";

const FormAndServerCommunication = () => {
   const [cars, setCars] = useState<CarItemDto[]>([]);

   const getCars = useCallback(async () => {
      console.time("getCars");
      const cars = await CarsService.getApiCars();
      console.timeEnd("getCars");
      setCars(cars);
   }, []);

   useEffect(() => {
      getCars();
   }, [getCars]);

   return (
      <>
         <h3>Forms and Server Communication</h3>
         <CarForm onCreated={getCars} />
         <CarList cars={cars} onDeleted={getCars} />
      </>
   );
};

export default FormAndServerCommunication;
