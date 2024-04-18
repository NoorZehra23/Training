import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Yup from "yup";

const FormComponent = ({ fields, onSubmit ,onSubmitName }) => {

    const initialValues = fields.reduce((values, field) => {
        values[field.name] = ""; 
        return values;
    }, {});

    const validatePassword = (value) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
        return regex.test(value);
      };

      
      const generateValidationSchema = (fields) => {
        const schemaObject = fields.reduce((acc, field) => {
          switch (field.inputType) {
            case "string":
              acc[field.name] = Yup.string().required(`${field.label} is required.`);
              break;
            case "number":
              acc[field.name] = Yup.number().required(`${field.label} is required.`);
              break;
            case "email":
              acc[field.name] = Yup.string().email().required(`${field.label} is required.`);
              break;
            case "password":
              acc[field.name] = Yup.string()
                .min(6, `${field.label} must be at least 6 characters long.`)
                .required(`${field.label} is required.`)
                .test('password', 'Weak password. Please ensure your password has at least 6 characters, including one uppercase letter, one lowercase letter, one digit, and one special character.', validatePassword)
              break;
           
              default:
              if (field.name === "confirm_password") {
                acc[field.name] = Yup.string()
                  .required("Please re-enter your password")
                  .oneOf([Yup.ref("password"), null], "Password must match.") ;
              } else {
                acc[field.name] = Yup.string().required(`${field.label} is required.`);
              }
              break;
          }
          return acc;
        }, {});
        return Yup.object().shape(schemaObject);
      };
      
      const validationSchema = generateValidationSchema(fields);
    return (
        <>
        <h1>
            {onSubmitName}
        </h1>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ isSubmitting }) => (
                <Form>
                    {fields.map((field) => (
                        <div key={field.name}>
                            <label className="text-sm mr-1 font-bold text-black-700">
                            {field.label}:                            </label>
                            {field.type === "select" ? (
                                <Field as="select" name={field.name} className="my-select">
                                    <option value="">Select {field.name.charAt(0).toUpperCase() + field.name.slice(1)}</option>
                                    {field.options.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </Field>
                            ) : field.type === "radio" ? (
                                <div className="form-radio bg-black-900">
                                    {field.options.map((option) => (
                                        <div key={option.value}>
                                            <Field
                                                type="radio"
                                                id={option.value}
                                                name={field.name}
                                                value={option.value}
                                            />
                                            <label htmlFor={option.value}>{option.label}</label>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <Field
                                    className="border-b text-sm w-1/4 focus:outline-none focus:border-blue-400"
                                    name={field.name}
                                    type={field.inputType}
                                    component={field.type}
                                />
                            )}

                            <ErrorMessage name={field.name} component="div" className="text-red-600 text-xs" />
                        </div>
                    ))}
                    <div className="flex-1 justify-center items-center p-2">
                        <button
                            disabled={isSubmitting}
                            className="bg-blue-600 hover:bg-blue-900 border-blue-600 text-gray-100 px-3 py-2 rounded-lg shadow-lg text-sm flex gap-2 items-center"
                            type="submit">

                            <div>
                                <FontAwesomeIcon icon={faSquarePlus} />
                            </div>
                            <span>{onSubmitName}</span>
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
        </>
    );
};

export default FormComponent;