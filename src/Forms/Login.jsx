import React from "react";
import FormComponent from "./FormComponent";
import { useDispatch } from "react-redux";
import { loginUser, registerUser } from "../Features/usersSlice";
import { useNavigate } from "react-router-dom";
const Login = () => {
 
  const fields = [
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
    }
  ]


  const dispatch=useDispatch();
  const navigate=useNavigate();

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    const payload = {
      email: values.email,
      password: values.password,
    };
    dispatch(loginUser(payload)).then(
        navigate("/home")
    );
    console.log("Form submitted with values:", values);
    setSubmitting(false);// set submitting variable for returning the promise calls if there are any. 
  
};

  return (
    <div>
      <FormComponent
        fields={fields}
        onSubmit={handleSubmit}
        onSubmitName={"Login"}

      />
    </div>
  );
};

export default Login;