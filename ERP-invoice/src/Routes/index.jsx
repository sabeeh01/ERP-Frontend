import { Suspense, lazy } from "react";
import {
  Route,
  Routes as ReactRouterDOMRoutes,
  Navigate,
} from "react-router-dom";
import { routes } from "./routes";
const Layout = lazy(() =>
  import("ERP_container/Layout").catch(() => {
    return { default: () => <>Component unavailable!</> };
  })
);

const Routes = () => {
  return (
    <ReactRouterDOMRoutes>
      <Route
        path="/invoice/*"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Layout routes={routes} />
          </Suspense>
        }
      >
        <Route
          index
          element={
            <div>
              <div>Name: Dashboard</div>
              <div>Framework: react</div>
              <div>Language: JavaScript</div>
              <div>CSS: Empty CSS</div>
            </div>
          }
        />
        <Route
          path="company"
          element={
            <div>
              <div>Name: Company</div>
              <div>Framework: react</div>
              <div>Language: JavaScript</div>
              <div>CSS: Empty CSS</div>
            </div>
          }
        />
      </Route>
    </ReactRouterDOMRoutes>
  );
};

export default Routes;
