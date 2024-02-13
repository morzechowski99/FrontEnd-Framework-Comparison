import CarForm from "@/components/CarForm/CarForm";
import CarList from "@/components/CarList";
import { CarItemDto, CarsService } from "@/shared/services/cars";
import { useCallback, useEffect, useState } from "react";

const FormAndServerCommunication = () => {
   const [cars, setCars] = useState<CarItemDto[]>([]);

   const getCars = useCallback(async () => {
      const cars = await CarsService.getApiCars();
      setCars(cars);
   }, []);

   useEffect(() => {
      getCars();
   }, [getCars]);

   return (
      <>
         <h3>Forms and Server Communication</h3>
         <CarForm onCreated={getCars} />
         <CarList cars={cars} />
      </>
   );
};

export default FormAndServerCommunication;
