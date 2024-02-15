import { Form, Formik } from "formik";
import { useForm } from "./LoginUserForm.utils";
import ValidationSummary from "../ValidationSummary";
import ValidationMessage from "../ValidationMessage";
import { LoginDto } from "@/shared/services/cars";

const LoginUserForm = () => {
   const formProps = useForm();
   return (
      <div>
         <Formik
            initialValues={formProps.initialValues}
            onSubmit={formProps.onSubmit}
            validationSchema={formProps.validationSchema}
         >
            {({ values, isSubmitting, isValid, handleBlur, handleChange }) => (
               <Form>
                  <div>
                     <ValidationSummary />
                  </div>
                  <div className="row">
                     <div className="col-md-4">
                        <div className="form-group">
                           <label htmlFor="username">Username</label>
                           <input
                              className="form-control"
                              id="username"
                              name="username"
                              value={values.username}
                              onChange={handleChange}
                              onBlur={handleBlur}
                           />
                           <ValidationMessage<LoginDto> property="username" />
                        </div>
                     </div>
                  </div>
                  <div className="row mb-2">
                     <div className="col-md-4">
                        <div className="form-group">
                           <label htmlFor="password">Password</label>
                           <input
                              className="form-control"
                              id="password"
                              name="password"
                              type="password"
                              value={values.password}
                              onChange={handleChange}
                              onBlur={handleBlur}
                           />
                           <ValidationMessage<LoginDto> property="password" />
                        </div>
                     </div>
                  </div>
                  <div>
                     <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={isSubmitting || !isValid}
                     >
                        Log in
                     </button>
                  </div>
               </Form>
            )}
         </Formik>
      </div>
   );
};

export default LoginUserForm;
