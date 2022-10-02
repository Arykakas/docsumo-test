import React from "react";
import Card from "./utils/Card";
import "./styles.scss";
import useForm from "./utils/useForm";

const LoginForm = ({ error, loading, submitAction }) => {
  const [values, handleChange, onSubmit] = useForm(submitAction);

  return (
    <Card>
      <h1>Login to your Docsumo account</h1>
      <div className={`error-text ${error ? "visible" : "hidden"}`}>
        {error}
      </div>
      <form onSubmit={onSubmit} className="login-form">
        <div className="email">
          <label htmlFor="work-email">Work Email</label>
          <input
            style={{ marginTop: "6px" }}
            type="text"
            id="work-email"
            onChange={handleChange}
            placeholder="johndoe@abc.com"
            name="email"
            value={values.email || ""}
          />
        </div>
        <div className="password">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={handleChange}
            placeholder="Enter password here..."
            name="password"
            value={values.password || ""}
          />
        </div>
        <p className="fg-pass">Forgot Password?</p>
        <div>
          <button className="btn">{loading ? "Logging..." : "Login"}</button>
        </div>
        <div className="no-account">
          Don't have an account?
          <a href="https://app.docsumo.com/signup/">Sign Up</a>
        </div>
      </form>
    </Card>
  );
};

export default LoginForm;
