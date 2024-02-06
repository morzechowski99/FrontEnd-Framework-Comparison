import { paths } from "@/config";
import {
   ApiError,
   IdentityService,
   RegisterUserDto,
} from "@/shared/services/cars";
import { useNavigate } from "react-router-dom";
import { Schema, object, string, ref } from "yup";

export const initialValues: RegisterUserDto = {
   username: "",
   email: "",
   password: "",
   passwordConfirm: "",
};

export const useValidationSchema = (): Schema<RegisterUserDto> => {
   return object().shape({
      username: string().required(),
      password: string()
         .required()
         .min(8)
         .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).{8,}$/,
            "The password must contain an uppercase letter, a lowercase letter, a number and a special character"
         ),
      passwordConfirm: string()
         .required()
         .oneOf([ref("password")], "Passwords must match"),
      email: string().required().email(),
   });
};

export const useOnSubmit = () => {
   const navigate = useNavigate();
   return async (values: RegisterUserDto) => {
      try {
         const res = await IdentityService.postApiIdentityRegister({
            requestBody: values,
         });
         if (res.error) alert(res.error);
         else {
            navigate(paths.login);
         }
      } catch (error) {
         const apiError = error as ApiError;

         alert(
            `Cannot register user: ${apiError.body && apiError.body?.error} ${
               apiError.message
            } ${apiError.statusText}`
         );
      }
   };
};

export const useForm = () => {
   const validationSchema = useValidationSchema();
   const onSubmit = useOnSubmit();
   return { initialValues, validationSchema, onSubmit };
};
