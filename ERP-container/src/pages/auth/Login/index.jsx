import { useState } from "react";
import SideSection from "./components/SideSection";
import TextInput from "../../../components/input-fields/TextInput";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const payload = { username, password };
      localStorage.setItem("token", "jwt_token");
      navigate("/invoice");
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const isButtonDisabled = username.trim() === "" || password.trim() === ""; // Check for empty strings

  return (
    <>
      <div className="row vh-100">
        <div className="col-md-6 bg-login-color web-mode">
          <SideSection />
        </div>
        <div className="col-md-6 col-12 r-align-item-start d-flex align-items-center justify-content-center">
          <div style={{ width: "90%" }} className="mx-auto">
            <form className="p-1rem" onSubmit={handleSubmit}>
              <h1 className="text-center">Affiliate Invoices</h1>
              <h5 className="p-0 m-0 text-center">
                Generate Invoices for Your Affiliates
              </h5>
              <div className="row">
                <div className="col-12">
                  <TextInput
                    label="Username"
                    name="user_name"
                    className="mb-2 mt-3"
                    required
                    value={username}
                    onChange={handleUsernameChange}
                  />
                </div>
                <div className="col-12">
                  <TextInput
                    label="Password"
                    name="password"
                    className="mb-2 mt-3"
                    required
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    className="btn btn-primary mb-2 mt-3"
                    disabled={isButtonDisabled || isLoading}
                  >
                    {isLoading ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm mr-2"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        &nbsp;&nbsp;Loading...
                      </>
                    ) : (
                      "Login"
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
