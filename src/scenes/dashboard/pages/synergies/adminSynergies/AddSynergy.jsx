import React from "react";
import { v4 as uuidV4 } from "uuid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useGlobalContextUser } from "../../../../../context/context";

const AddSynergy = ({ setIsModal }) => {
  // ****************** validation schema *****************************

  const { synergies, setSynergies } = useGlobalContextUser();

  const validateSchema = Yup.object({
    name: Yup.string().required("required"),
    price: Yup.string().required("required"),
    image: Yup.string().required("required"),
  });

  const initialValues = {
    name: "",
    price: "",
    image: "",
  };

  const onSubmit = (values, onSubmit) => {
    const { name, price, image } = values;
    setSynergies([
      {
        id: uuidV4(),
        name,
        price,
        img: image,
      },
      ...synergies,
    ]);
    setIsModal(false);
    onSubmit.setSubmitting(false);
    onSubmit.resetForm();
  };

  return (
    <article className="synergy-op">
      <h1 className="synergy-op__title">Add Synergy </h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validateSchema}
        validator={() => ({})}
      >
        {(formik) => {
          return (
            <Form className="edit__form">
              {/* name */}

              <div className="edit__div">
                <label htmlFor="name" className="edit__label">
                  name
                </label>
                <Field type="text" className="edit__input" name="name" />
                <ErrorMessage name="name">
                  {(errMessage) => <p className="edit__error">*{errMessage}</p>}
                </ErrorMessage>
              </div>

              {/* image */}

              <div className="edit__div">
                <label htmlFor="image" className="edit__label">
                  image
                </label>
                <Field type="text" className="edit__input" name="image" />
                <ErrorMessage name="image">
                  {(errMessage) => <p className="edit__error">*{errMessage}</p>}
                </ErrorMessage>
              </div>

              {/* price*/}
              <div className="edit__div">
                <label htmlFor="des" className="edit__label">
                  price
                </label>
                <Field
                  rows={5}
                  type="number"
                  className="edit__input"
                  name="price"
                />
                <ErrorMessage name="price">
                  {(errMessage) => <p className="edit__error">*{errMessage}</p>}
                </ErrorMessage>
              </div>
              <button type="submit"> ok</button>
            </Form>
          );
        }}
      </Formik>
    </article>
  );
};

export default AddSynergy;
