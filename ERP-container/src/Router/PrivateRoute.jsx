import { Suspense } from "react";
import { Navigate } from "react-router-dom";
import ErrorBoundary from "../components/ErrorBoundary";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  return token ? (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
    </ErrorBoundary>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
