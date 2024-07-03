import { Suspense } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  return token ? (
    <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
