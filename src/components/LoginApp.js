import React, { useState } from "react";
import { loginApi } from "./utils/api";
import LoginForm from "./LoginForm";
import { Navigate } from "react-router-dom";

const LoginApp = () => {
  const full_name = window.localStorage.getItem("full_name") || "";
  const [pageState, setPageState] = useState(() =>
    full_name ? "success" : "loginForm"
  );
  const [apiResponse, setApiResponse] = useState({ data: {}, error: null });
  const [loading, setLoading] = useState(false);

  const handleApiResponse = (data) => {
    if (data.error) {
      setApiResponse((val) => ({ ...val, error: data.error }));
    } else {
      setPageState("success");
      const {
        user: { full_name },
      } = data.data;
      window.localStorage.setItem("full_name", full_name);
      setApiResponse({ data: data.data, error: false });
    }
  };

  const submitAction = (values) => {
    console.log(values);
    loginApi(setLoading, handleApiResponse, values);
  };

  return (
    <React.Fragment>
      {pageState === "success" && <Navigate to="/success" replace={true} />}
      <LoginForm
        error={apiResponse.error}
        loading={loading}
        submitAction={submitAction}
      />
    </React.Fragment>
  );
};

export default LoginApp;
