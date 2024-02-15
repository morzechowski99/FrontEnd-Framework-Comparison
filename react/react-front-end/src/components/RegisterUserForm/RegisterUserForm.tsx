import { Form, Formik } from "formik";
import { useForm } from "./RegisterUserForm.utils";
import ValidationSummary from "../ValidationSummary";
import ValidationMessage from "../ValidationMessage";
import { RegisterUserDto } from "@/shared/services/cars";

const RegisterUserForm = () => {
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
                  <div className="row mb-2">
                     <ValidationSummary />
                     <div className="col-md-6 mb-2">
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
                           <ValidationMessage<RegisterUserDto> property="username" />
                        </div>
                     </div>
                     <div className="col-md-6">
                        <div className="form-group">
                           <label htmlFor="email">Email address</label>
                           <input
                              type="email"
                              className="form-control"
                              id="email"
                              name="email"
                              value={values.email}
                              onChange={handleChange}
                              onBlur={handleBlur}
                           />
                           <ValidationMessage property="email" />
                        </div>
                     </div>
                     <div className="col-md-6">
                        <div className="form-group">
                           <label htmlFor="password">Password</label>
                           <input
                              type="password"
                              className="form-control"
                              id="password"
                              name="password"
                              onChange={handleChange}
                              onBlur={handleBlur}
                           />
                           <ValidationMessage property="password" />
                        </div>
                     </div>
                     <div className="col-md-6">
                        <div className="form-group">
                           <label htmlFor="passwordConfirm">
                              Confirm password
                           </label>
                           <input
                              type="password"
                              className="form-control"
                              id="passwordConfirm"
                              name="passwordConfirm"
                              onChange={handleChange}
                              onBlur={handleBlur}
                           />
                           <ValidationMessage property="passwordConfirm" />
                        </div>
                     </div>
                  </div>
                  <div>
                     <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={isSubmitting || !isValid}
                     >
                        Submit
                     </button>
                  </div>
               </Form>
            )}
         </Formik>
      </div>
   );
};

export default RegisterUserForm;
