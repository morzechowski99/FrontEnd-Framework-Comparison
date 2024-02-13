import { ApiError, CarsService } from "@/shared/services/cars";
import { Schema, date, number, object, string } from "yup";

export interface CarFormItemProps {
   brand: string;
   model: string;
   manufacturedDate?: string | Date;
   power?: number;
   leapCapacity?: number;
}

export const initialValues: CarFormItemProps = {
   brand: "",
   model: "",
};

export const useValidationSchema = (): Schema<CarFormItemProps> => {
   return object().shape({
      brand: string().required().max(30),
      model: string().required().max(30),
      manufacturedDate: date(),
      power: number().min(1).max(2000),
      leapCapacity: number().min(0.0).max(10),
   });
};

export const useOnSubmit = (onCreated: () => void) => {
   return async (values: CarFormItemProps) => {
      try {
         const res = await CarsService.postApiCars({
            requestBody: {
               manufacturedDate: values.manufacturedDate as string,
               ...values,
            },
         });
         if (res.error) alert(res.error);
         else onCreated();
      } catch (error) {
         const apiError = error as ApiError;

         alert(
            `Cannot add car: ${apiError.body && apiError.body?.error} ${
               apiError.message
            } ${apiError.statusText}`
         );
      }
   };
};

export const useForm = (onCreated: () => void) => {
   const validationSchema = useValidationSchema();
   const onSubmit = useOnSubmit(onCreated);
   return { initialValues, validationSchema, onSubmit };
};
