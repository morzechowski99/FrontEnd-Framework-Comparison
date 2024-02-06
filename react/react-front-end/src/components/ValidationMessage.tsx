import { useFormikContext } from "formik";

interface ValidationMessageProps<T> {
   property: keyof T;
}

const ValidationMessage = <T,>({ property }: ValidationMessageProps<T>) => {
   const { errors, touched } = useFormikContext<T>();
   const hasError = touched[property] && errors[property];
   return (
      hasError && (
         <div className="text-danger">{errors[property] as string}</div>
      )
   );
};

export default ValidationMessage;
