import React from "react";
import "./orderform.css";
import { Formik, Field } from "formik";

const Orderform = () => {
  return (
    <div>
      <h2>OrderForm</h2>
      <Formik
        initialValues={{
          name: "",
          LastName: "",
          phone: "",
          email: "",
          region: "",
          city: "",
        }}
        onSubmit={(values) => console.log(values)}
      >
        {({ values }) => (
          <Form>
            <Field name="name" type="input" placeholder="name" />
            <Field name="LastName " type="input" placeholder="LactName" />
            <Field name="phone " type="input" placeholder="phone" />
            <Field name="email" type="input" placeholder="email" />
            {/* region */}
            <Field name='city' type='input' placeholder='city'/>
             <button type="submit">send</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Orderform;
