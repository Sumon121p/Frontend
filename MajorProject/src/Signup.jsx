import { useState } from "react";
import { signup } from "./Api";
import { ToastContainer, toast } from "react-toastify";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const register = async (e) => {
    e.preventDefault();
    toast.loading("account creating....");
    const payload = {
      email,
      password,
      username: userName,
    };
    try {
      const res = await signup(payload);
      toast.dismiss();
      toast.success("Welcome");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (err) {
      toast.dismiss();
      toast.warn(err.response.data.err);
    }
  };
  return (
    <>
      <Navbar></Navbar>
      <div className="row-add">
        <div className="col-4">
          <div className="container">
            <div className="m-3">
              <h1>Sign Up</h1>
            </div>
            <form onSubmit={register}>
              <div className="card-body">
                <div className="m-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="enter email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
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
                  <button
                    className="btn btn-outline-danger w-100"
                    type="submit"
                  >
                    Register
                  </button>
                </div>
                <div className="m-3">
                  <p>
                    You have an account? <Link to="/login">Log in</Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
