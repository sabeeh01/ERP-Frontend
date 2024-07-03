import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";
import MicrofrontendSwitch from "./MicrofrontendSwitch";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<MicrofrontendSwitch />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
