import { Suspense, lazy } from "react";
import {
  Route,
  Routes as ReactRouterDOMRoutes,
} from "react-router-dom";
import { routes } from "./routes";
const Layout = lazy(() => import("ERP_container/Layout"));

const Routes = () => {
  return (
    <ReactRouterDOMRoutes>
      <Route
        path="/finance/*"
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
