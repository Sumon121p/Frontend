import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import "./App.css";
import { Link, useNavigate } from "react-router-dom";
import { isLogin, logout } from "./Api";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
export default function Navbar() {
  const navigate = useNavigate();
  const [Authorized, setAuthorized] = useState(false);
  const isAuthorized = async () => {
    try {
      const res = await isLogin();
      if (res) {
        setAuthorized(true);
      }
    } catch (err) {
      if (err) {
        setAuthorized(false);
      }
    }
  };

  const unauthorized = async() => {
    try{
      const res = await logout();
      toast.success("Log out success");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }catch(err){
      toast.error(err.response?.data?.err);
    }
  }

  useEffect(() => {
    isAuthorized();
  }, []);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-light border-bottom sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <ExploreOutlinedIcon className="icon" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  All Listing
                </Link>
              </li>
              {Authorized ? (
                <li className="nav-item">
                  <Link className="nav-link" to="/add">
                    Add new Listing
                  </Link>
                </li>
              ) : (
                ""
              )}
            </ul>

            <ul className="navbar-nav ms-auto">
              {Authorized ? (
                <li className="nav-item">
                  <p className="nav-link" onClick={unauthorized} style={{cursor: "pointer"}}>
                    Log out
                  </p>
                </li>
              ) : (
                <>
                  {" "}
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup">
                      Sign up
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Log in
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
        <ToastContainer/>
      </nav>
    </>
  );
}
