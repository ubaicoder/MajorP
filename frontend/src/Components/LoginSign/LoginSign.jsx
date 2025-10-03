import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginSign.css";

function LoginSign() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [pusername, setPusername] = useState("");
  const [ppasword, setPpasword] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Password validation function
  const validatePassword = (password) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  if (isLogin) {
    // ✅ Login
    const storedUser = localStorage.getItem("username");
    const storedPass = localStorage.getItem("password");

    if (pusername === storedUser && ppasword === storedPass) {
      alert("Logged in successfully!");
      localStorage.setItem("name", pusername);
      navigate("/tohero");
    } else {
      setError("Username or Password incorrect. Please try again.");
    }
  } else {
    // ✅ Signup
    if (!validatePassword(password)) {
      setError(
        "Password must be at least 8 characters long and contain an uppercase, lowercase, number, and special character."
      );
      return;
    }

    setError(""); // clear error

    // Save credentials
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    localStorage.setItem("mobile", mobile);

    alert("Signed up successfully!");
    navigate("/tohero");
  }
};


  return (
    <>
      <div className="login-page">
        <form onSubmit={handleSubmit}>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="loginSignup ">
                  <h1 className="text-center fw-bold ">
                    {isLogin ? "Login Form" : "SignUp Form"}
                  </h1>
                </div>
                <div className="button-container border border-info-subtle rounded">
                  <button
                    type="button"
                    className={`btn1 ${
                      isLogin ? "active" : ""
                    } d-flex justify-content-center flex-wrap flex-md-nowrap`}
                    onClick={() => setIsLogin(true)}
                  >
                    Login
                  </button>
                  <button
                    type="button"
                    className={`btn2 ${
                      !isLogin ? "active" : ""
                    } d-flex justify-content-center flex-wrap flex-md-nowrap`}
                    onClick={() => setIsLogin(false)}
                  >
                    Signup
                  </button>
                </div>

                {isLogin ? (
                  <>
                    <div className="input-container flex-wrap">
                      <input
                        type="text"
                        placeholder="Username"
                        value={pusername}
                        onChange={(e) => setPusername(e.target.value)} // this allows live tracking of users input
                        required
                        className="form-control"
                      />
                      <div className="password-container flex-wrap">
                        <input
                          type="password"
                          placeholder="Password"
                          value={ppasword}
                          onChange={(e) => setPpasword(e.target.value)}
                          required
                          className="form-control"
                        />
                        <a href="#" className="dropdown-item">
                          Forget Password?
                        </a>
                      </div>
                    </div>
                    {error && <p className="text-danger">{error}</p>}
                    <div className="submit-container flex-wrap">
                      <button type="submit" className="rounded-4">
                        Login
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="sinput-container flex-wrap">
                      <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="form-control"
                      />
                      <input
                        type="number"
                        placeholder="Mobile Number"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        required
                        className="form-control"
                      />
                      <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="form-control"
                      />
                    </div>
                    {error && <p className="text-danger">{error}</p>}
                    <div className="ssubmit-container flex-wrap">
                      <button type="submit" className="rounded-4">
                        SignUp
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginSign;
