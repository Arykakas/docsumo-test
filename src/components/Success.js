import React from "react";
import Card from "./utils/Card";
import { Link, Navigate } from "react-router-dom";

const Success = () => {
  const full_name = window.localStorage.getItem("full_name") || "";
  const _logout = (e) => {
    window.localStorage.removeItem("full_name");
  };
  return (
    <Card>
      {!full_name && <Navigate to="/" replace={true} />}
      <small>Successfully logged In</small>
      <h2>
        Hello <em>{full_name}</em>
      </h2>
      <button className="btn" onClick={_logout}>
        <Link to="/">Logout</Link>
      </button>
    </Card>
  );
};

export default Success;
