import React from "react";
import "./edit.css";
import { AiOutlineClose, AiOutlineFileAdd } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { v4 as uuidV4 } from "uuid";
import { useGlobalContextUser } from "../../../../../context/context";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

// todo ****************************************************************

const EditProject = ({ project, closeModal }) => {
  const { projects, setProjects, setAlert } = useGlobalContextUser();

  // ****************** validation schema *****************************

  const validateSchema = Yup.object({
    name: Yup.string().required("required"),
    des: Yup.string().required("required"),
    image: Yup.string().required("required"),
    partnerships: Yup.string().required("required"),
    discord: Yup.string()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Enter correct url!"
      )
      .required("Please enter your discord"),

    twitter: Yup.string()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Enter correct url!"
      )
      .required("Please enter your twitter"),

    website: Yup.string().required("Please enter your website"),
  });

  const initialValues = {
    name: project?.name || "",
    des: project?.des || "",
    image: project?.img || "",
    discord: project?.discord || "",
    website: project?.website || "",
    twitter: project?.twitter || "",
    partnerships: project?.partnerships || "",
  };

  // ****************** Edit *****************************

  const handleEdit = (values) => {
    // send update request

    const { name, des, website, discord, twitter, partnerships, image } =
      values;
    const proj = projects.map((p) => {
      if (p.id === project.id)
        return {
          name,
          des,
          discord,
          img: image,
          website,
          twitter,
          partnerships,
          id: project.id,
        };
      else return p;
    });

    setProjects([...proj]);

    setAlert({ isAlert: true, alertMessage: "Project has been edited" });
    closeModal();
  };

  // ****************** Add *****************************

  const handleAdd = (values) => {
    //send axios to database

    const { name, des, website, discord, twitter, partnerships, image } =
      values;

    setProjects([
      {
        id: uuidV4(),
        name,
        img: image,
        des,
        discord,
        website,
        twitter,
        partnerships,
      },
      ...projects,
    ]);

    setAlert({ isAlert: true, alertMessage: "Project has been Added" });
    closeModal();
  };

  // ****************** Submit *****************************

  const onSubmit = (values, onSubmit) => {
    console.log("submitted values", values);
    if (project) handleEdit(values);
    else handleAdd(values);
    onSubmit.setSubmitting(false);
    onSubmit.resetForm();
  };

  return (
    <div className="modal  ">
      <div className="modal-content dropshadow">
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
                <div className="modal__icons">
                  <button
                    type="submit"
                    className="popup__edit-btn"
                    disabled={
                      !((formik.isValid && formik.dirty) || formik.isSubmitting)
                    }
                  >
                    {project ? <BiEdit /> : <AiOutlineFileAdd />}
                  </button>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="popup__close-btn"
                  >
                    <AiOutlineClose />
                  </button>
                </div>

                <div className="edit__div">
                  <label htmlFor="name" className="edit__label">
                    name
                  </label>
                  <Field type="text" className="edit__input" name="name" />
                  <ErrorMessage name="name">
                    {(errMessage) => (
                      <p className="edit__error">*{errMessage}</p>
                    )}
                  </ErrorMessage>
                </div>

                {/* image */}

                <div className="edit__div">
                  <label htmlFor="image" className="edit__label">
                    image
                  </label>
                  <Field type="text" className="edit__input" name="image" />
                  <ErrorMessage name="image">
                    {(errMessage) => (
                      <p className="edit__error">*{errMessage}</p>
                    )}
                  </ErrorMessage>
                </div>

                {/* partnerships */}

                <div className="edit__div">
                  <label htmlFor="partnerships" className="edit__label">
                    partnerships
                  </label>
                  <Field
                    type="text"
                    className="edit__input"
                    name="partnerships"
                  />
                  <ErrorMessage name="partnerships">
                    {(errMessage) => (
                      <p className="edit__error">*{errMessage}</p>
                    )}
                  </ErrorMessage>
                </div>

                {/* Description*/}
                <div className="edit__div">
                  <label htmlFor="des" className="edit__label">
                    description
                  </label>
                  <Field
                    as="textarea"
                    rows={5}
                    type="text"
                    className="edit__input"
                    name="des"
                  />
                  <ErrorMessage name="des">
                    {(errMessage) => (
                      <p className="edit__error">*{errMessage}</p>
                    )}
                  </ErrorMessage>
                </div>
                {/* Discord*/}
                <div className="edit__div">
                  <label htmlFor="discord" className="edit__label">
                    discord
                  </label>
                  <Field type="text" className="edit__input" name="discord" />
                  <ErrorMessage name="discord">
                    {(errMessage) => (
                      <p className="edit__error">*{errMessage}</p>
                    )}
                  </ErrorMessage>
                </div>
                {/* Twitter*/}
                <div className="edit__div">
                  <label htmlFor="twitter" className="edit__label">
                    twitter
                  </label>
                  <Field type="text" className="edit__input" name="twitter" />
                  <ErrorMessage name="twitter">
                    {(errMessage) => (
                      <p className="edit__error">*{errMessage}</p>
                    )}
                  </ErrorMessage>
                </div>
                {/* Website */}
                <div className="edit__div">
                  <label htmlFor="website" className="edit__label">
                    website
                  </label>
                  <Field type="text" className="edit__input" name="website" />
                  <ErrorMessage name="website">
                    {(errMessage) => (
                      <p className="edit__error">*{errMessage}</p>
                    )}
                  </ErrorMessage>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default EditProject;
