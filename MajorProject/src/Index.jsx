import { useEffect, useState } from "react";
import { getallList, isLogin } from "./Api";
import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
export default function Index() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);
  async function allList() {
    try {
      const res = await getallList();
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  //loged in check

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

  useEffect(() => {
    allList();
    isAuthorized();
  }, []);
  return (
    <>
      <Navbar />
      <div className="container">
        <div id="filters" className="d-flex flex-wrap align-items-center">
          <div className="filter">
            <div>
              <i className="fa-solid fa-fire"></i>
            </div>
            <p>Trending</p>
          </div>

          <div className="filter">
            <div>
              <i className="fa-solid fa-bed"></i>
            </div>
            <p>Rooms</p>
          </div>

          <div className="filter">
            <div>
              <i className="fa-solid fa-mountain-city"></i>
            </div>
            <p>Iconic Cities</p>
          </div>

          <div className="filter">
            <div>
              <i className="fa-solid fa-mountain"></i>
            </div>
            <p>Moutain</p>
          </div>

          <div className="filter">
            <div>
              <i className="fa-brands fa-fort-awesome"></i>
            </div>
            <p>Castles</p>
          </div>

          <div className="filter">
            <div>
              <i className="fa-solid fa-person-swimming"></i>
            </div>
            <p>Amazing Pools</p>
          </div>

          <div className="filter">
            <div>
              <i className="fa-solid fa-campground"></i>
            </div>
            <p>Camping</p>
          </div>

          <div className="filter">
            <div>
              <i className="fa-solid fa-cow"></i>
            </div>
            <p>Farms</p>
          </div>

          <div className="filter">
            <div>
              <i className="fa-regular fa-snowflake"></i>
            </div>
            <p>Arctic</p>
          </div>

          <div className="filter">
            <div>
              <i className="fa-solid fa-igloo"></i>
            </div>
            <p>Domes</p>
          </div>

          <div className="filter">
            <div>
              <i className="fa-solid fa-ship"></i>
            </div>
            <p>Boats</p>
          </div>

          <div className="tax-toggle">
            <div className="form-check-reverse form-switch">
              <input
                type="checkbox"
                className="form-check-input"
                role="switch"
                id="switch"
                onChange={()=>setToggle(!toggle)}
              />
              <label htmlFor="switch">Display total before taxes</label>
            </div>
          </div>
        </div>
        <div className="row row-cols-lg-3 row-cols-md-3 row-cols-sm-1 mt-3">
          {data.map((el) => (
            <Link
              to={Authorized ? `/show/${el._id}` : `/login`}
              className="listing-link"
            >
              <div className="card col card-listing">
                <img
                  src={el.image.url}
                  className="card-img-top card-img"
                  alt="..."
                  style={{ height: "20rem" }}
                />
                <div className="card-img-overlay">{el.country}</div>
                <div className="card-body">
                  <p className="card-text">
                    <b>{el.title}</b> <br />
                    &#8377; {el.price} / night
                    {toggle ? <i> &nbsp; +18% GST</i> : ""}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
