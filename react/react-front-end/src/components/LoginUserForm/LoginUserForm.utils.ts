import { paths } from "@/config";
import AuthContext from "@/shared/auth/AuthContext";
import { ApiError, IdentityService, LoginDto } from "@/shared/services/cars";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Schema, object, string } from "yup";

export const initialValues: LoginDto = {
   username: "",
   password: "",
};

export const useValidationSchema = (): Schema<LoginDto> => {
   return object().shape({
      username: string().required(),
      password: string().required(),
   });
};

export const useOnSubmit = () => {
   const navigate = useNavigate();
   const { login } = useContext(AuthContext);
   return async (values: LoginDto) => {
      try {
         const { token } = await IdentityService.postApiIdentityLogin({
            requestBody: values,
         });
         if (token) {
            login(token);
            navigate(paths.home);
         } else {
            alert("Invalid username or password");
         }
      } catch (error) {
         const apiError = error as ApiError;

         if (apiError.status === 400) alert("Invalid username or password");
         else
            alert(
               `Cannot login user: ${
                  apiError.body && JSON.stringify(apiError.body)
               } ${apiError.message} ${apiError.statusText}`
            );
      }
   };
};

export const useForm = () => {
   const validationSchema = useValidationSchema();
   const onSubmit = useOnSubmit();
   return { initialValues, validationSchema, onSubmit };
};
