import { Navigate, useLocation } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { Suspense, lazy } from "react";

const routes = {
  "/admin": lazy(() => import("ERP_admin/Routes")),
  "/invoice": lazy(() => import("ERP_invoice/Routes")),
  "/user": lazy(() => import("ERP_user/Routes")),
  "/finance": lazy(() => import("ERP_finance/Routes")),
};

const MicrofrontendSwitch = () => {
  const location = useLocation();
  const basePath = Object.keys(routes).find((path) => location.pathname.startsWith(path));
  
  if (basePath) {
    const Component = routes[basePath];
    return (
      <PrivateRoute>
        <Suspense fallback={<div>Loading...</div>}>
          <Component />
        </Suspense>
      </PrivateRoute>
    );
  }

  return <Navigate to="/login" />;
};

export default MicrofrontendSwitch;