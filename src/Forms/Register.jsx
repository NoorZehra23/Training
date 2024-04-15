import React from "react";
import * as Yup from "yup";
import FormComponent from "./FormComponent";
const Register = () => {

  const fields = [
    {
      name: "name",
      type: "input",
      inputType: "text",
      // validation: Yup.string().min(2).max(25).required("Please Enter your Name.")
    },
    {
      name: "employment_Status",
      type: "select",
      options: [
        { value: "Unemployed", label: "Unemployed" },
        { value: "Employed", label: "Employed" },
        { value: "Student", label: "Student" }
      ],
      // validation: Yup.string().required("Please select an option")
    },
    {
      name: "age",
      type: "input",
      inputType: "number",
      // validation: Yup.number().required("Please enter your age")
      //   .min(18, "You must be at least 18 years old")
      //   .max(100, "Your age must be less than 100.")
    },
    {
      name: "email",
      type: "input",
      inputType: "email",
      // validation: Yup.string().email().required("Please enter your Email.")
    },
    {
      name: "password",
      type: "input",
      inputType: "password",
      // validation: Yup.string().min(6).required("Please enter your Password."),
    // validation:  Yup.string()
    // .min(6, "Password must be at least 6 characters long.")
    // .required("Please enter your Password.")
    // .test('password', 'Invalid password', validatePassword)
      // validFunc:validatePassword
    },
    {
      name: "confirm_Password",
      type: "input",
      inputType: "password",
      // validation: Yup.string().required("Please re-enter your password")
      //   .oneOf([Yup.ref("password"), null], "Password must match.")
    }
  ]
  // function validatePassword(password) {
  //   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
  //   let error;
  //   if (!passwordRegex.test(password)) {
  //     error= "Weak password. Please ensure your password has at least 8 characters, including one uppercase letter, one lowercase letter, one digit, and one special character.";
  //   }
  //   return error;
  // }

  const validatePassword = (value) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
    return regex.test(value);
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(2).max(25).required("Please Enter your Name."),
    employment_Status: Yup.string().required("Please select an option"),
    age: Yup.number().required("Please enter your age")
      .min(18, "You must be at least 18 years old")
      .max(100, "Your age must be less than 100."),
    email: Yup.string().email().required("Please enter your Email."),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters long.")
      .required("Please enter your Password.").test('password', 'Weak password. Please ensure your password has at least 6 characters, including one uppercase letter, one lowercase letter, one digit, and one special character.', validatePassword),
    confirm_Password: Yup.string().required("Please re-enter your password")
      .oneOf([Yup.ref("password"), null], "Password must match.")
  });
  


  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log("Form submitted with values:", values);
    resetForm();
    setSubmitting(false);// set submitting variable for returning the promise calls if there are any. 
  };

  return (
    <div>
      <FormComponent
        fields={fields}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      />
    </div>
  );
};

export default Register;