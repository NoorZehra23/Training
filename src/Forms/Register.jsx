import React from "react";
import FormComponent from "./FormComponent";
import { useDispatch } from "react-redux";
import { registerUser } from "../Features/usersSlice";
import { useNavigate } from "react-router-dom";
const Register = () => {
 
  const fields = [
    {
      name: "name",
      type: "input",
      inputType: "string",
      label:"Name"
    },
    // {
    //   name: "age",
    //   type: "input",
    //   inputType: "number",
    //   label:'Age'
    // }, 
    // {
    //   name: "employment_Status",
    //   type: "select",
    //   label:"Employement Status",
    //   options: [
    //     { value: "Unemployed", label: "Unemployed" },
    //     { value: "Employed", label: "Employed" },
    //     { value: "Student", label: "Student" }
    //   ],
    // },
    {
      name: "email",
      type: "input",
      inputType: "email",
      label:"Email"
      // validation: Yup.string().email().required("Please enter your Email.")
    },
    {
      name: "password",
      type: "input",
      inputType: "password",
      label:"Password"
    
    },
    {
      name: "confirm_password",
      type: "input",
      inputType: "password",
      label:"Confirm Password"
    },
    // {
    //   name: "phone",
    //   type: "input",
    //   inputType: "number",
    //   label:"Phone Number"
    // },

  ]

  const navigate=useNavigate();
  const dispatch=useDispatch();

  const handleSubmit = (values, { setSubmitting, resetForm }) => {

    const payload = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    dispatch(registerUser(payload)).then(
      navigate('/login')
    );
    console.log("Form submitted with values:", values);
    resetForm();
    setSubmitting(false);// set submitting variable for returning the promise calls if there are any. 
  };

  return (
    <div>
      <FormComponent
        fields={fields}
        onSubmit={handleSubmit}
        onSubmitName={"Register"}

      />
    </div>
  );
};

export default Register;