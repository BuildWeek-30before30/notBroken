import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import api from "../utils/axiosWithAuth";
import { Link } from "react-router-dom";

const Login = ({ touched, errors, status, handleSubmit }) => {
  const [login, setLogin] = useState([]);

  useEffect(() => {
    if (status) {
      setLogin([...login, status]);
      localStorage.setItem("loggedIn", "true");
    }
  }, [status]);

  return (
    <div>
      <h2>Login here!</h2>
      <Form onSubmit={handleSubmit}>
        {" "}
        <label>
          {" "}
          Name:
          <Field type="text" name="username" placeholder="Username" />
          {touched.username && errors.username && (
            <p className="error">{errors.username}</p>
          )}
        </label>
        <label>
          {" "}
          Password:
          <Field type="password" name="password" placeholder="Password" />
          {touched.password && errors.password && (
            <p className="error">{errors.password}</p>
          )}
        </label>
        <button type="submit">Login</button>{" "}
      </Form>{" "}
      Already a user?{" "}
      <Link to="/register">
        <button> Login here!</button>
      </Link>
    </div>
  );
};

const FormikLogin = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string()
      .min(6)
      .max(20)
      .required()
  }),

  handleSubmit(values, { props, resetForm, setSubmitting, setStatus }) {
    api
      .post("/auth/login", {}, { auth: values })
      .then(response => {
        console.log(response);
        setStatus(response.data);
        props.loggedStatus();
        resetForm();
        setSubmitting(false);
      })
      .catch(err => console.log(err.response));
  }
})(Login);

export default FormikLogin;
