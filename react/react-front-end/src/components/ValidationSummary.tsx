import { useFormikContext } from "formik";

const ValidationSummary = <T,>() => {
   const { errors, submitCount } = useFormikContext<T>();
   return (
      <ul>
         {submitCount > 0 &&
            Object.values(errors).map((e) => (
               <li key={e as string} className="text-danger">
                  {e as string}
               </li>
            ))}
      </ul>
   );
};

export default ValidationSummary;
