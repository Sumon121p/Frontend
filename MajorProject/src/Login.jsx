import { useState } from "react";
import { login } from "./Api";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

export default function Login() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const register = async (e) => {
    e.preventDefault();
    const payload = {
      password,
      username: userName,
    };
    try {
      const res = await login(payload);
      toast.success("Log in Sucessful");
      navigate("/");
    } catch (err) {
      toast.warn(err.response.data);
    }
  };
  return (
    <>
    <Navbar/>
      <div className="row-add">
        <div className="col-4">
          <div className="container">
            <div className="m-3">
              <h1>Log in</h1>
            </div>
            <form onSubmit={register}>
              <div className="card-body">
                <div className="m-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="username"
                    className="form-control"
                    id="username"
                    placeholder="enter username"
                    onChange={(e) => setUserName(e.target.value)}
                    value={userName}
                    required
                  />
                </div>

                <div className="m-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="enter password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                  />
                </div>
                <div className="m-3">
                  <button
                    className="btn btn-outline-danger w-100"
                    type="submit"
                  >
                    Log in
                  </button>
                </div>
              </div>
            </form>
            <div className="m-3">
              <p>
                Don't have an account? <Link to="/signup">Sign up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
