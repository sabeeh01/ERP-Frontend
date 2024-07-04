import { Navigate, useLocation } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { lazy } from "react";

const routes = {
  "/admin": lazy(() =>
    import("ERP_admin/Routes").catch(() => {
      return { default: () => <>Component unavailable!</> };
    })
  ),
  "/invoice": lazy(() =>
    import("ERP_invoice/Routes").catch(() => {
      return { default: () => <>Component unavailable!</> };
    })
  ),
  "/user": lazy(() =>
    import("ERP_user/Routes").catch(() => {
      return { default: () => <>Component unavailable!</> };
    })
  ),
  "/finance": lazy(() =>
    import("ERP_finance/Routes").catch(() => {
      return { default: () => <>Component unavailable!</> };
    })
  ),
};

const MicrofrontendSwitch = () => {
  const location = useLocation();
  const basePath = Object.keys(routes).find((path) =>
    location.pathname.startsWith(path)
  );

  if (basePath) {
    const Component = routes[basePath];
    return (
      <PrivateRoute>
        <Component />
      </PrivateRoute>
    );
  }

  return <Navigate to="/login" />;
};

export default MicrofrontendSwitch;
