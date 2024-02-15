import { Field, Form, Formik } from "formik";
import { CarFormItemProps, useForm } from "./CarForm.utils";
import ValidationSummary from "../ValidationSummary";
import ValidationMessage from "../ValidationMessage";

export interface CarFormProps {
   onCreated: () => void;
}

const CarForm = ({ onCreated }: CarFormProps) => {
   const formProps = useForm(onCreated);
   return (
      <div>
         <Formik
            initialValues={formProps.initialValues}
            onSubmit={formProps.onSubmit}
            validationSchema={formProps.validationSchema}
         >
            {({ values, isSubmitting, isValid, handleBlur, handleChange }) => (
               <Form>
                  <div className="row">
                     <ValidationSummary />
                     <div className="col-md-6 mb-2">
                        <div className="form-group">
                           <label htmlFor="brand">Brand</label>
                           <input
                              className="form-control"
                              id="brand"
                              name="brand"
                              value={values.brand}
                              onChange={handleChange}
                              onBlur={handleBlur}
                           />
                           <ValidationMessage<CarFormItemProps> property="brand" />
                        </div>
                        <div className="form-group">
                           <label htmlFor="model">Model</label>
                           <input
                              className="form-control"
                              id="model"
                              name="model"
                              value={values.model}
                              onChange={handleChange}
                              onBlur={handleBlur}
                           />
                           <ValidationMessage<CarFormItemProps> property="model" />
                        </div>
                        <div className="form-group">
                           <label htmlFor="power">Power</label>
                           <input
                              className="form-control"
                              id="power"
                              name="power"
                              value={values.power}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              type="number"
                           />
                           <ValidationMessage<CarFormItemProps> property="power" />
                        </div>
                     </div>
                     <div className="col-md-6">
                        <div className="form-group">
                           <label htmlFor="leapCapacity">Engine Capacity</label>
                           <input
                              className="form-control"
                              id="leapCapacity"
                              name="leapCapacity"
                              value={values.leapCapacity}
                              onChange={handleChange}
                              onBlur={handleBlur}
                           />
                           <ValidationMessage<CarFormItemProps> property="leapCapacity" />
                        </div>
                        <div className="form-group">
                           <label htmlFor="manufacturedDate">Year</label>
                           <Field
                              className="form-control"
                              id="manufacturedDate"
                              name="manufacturedDate"
                              value={values.manufacturedDate}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              type="date"
                           />
                           <ValidationMessage<CarFormItemProps> property="manufacturedDate" />
                        </div>
                     </div>
                  </div>
                  <div>
                     <button
                        disabled={isSubmitting || !isValid}
                        type="submit"
                        className="btn btn-primary"
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

export default CarForm;
