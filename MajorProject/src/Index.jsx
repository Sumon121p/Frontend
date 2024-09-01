import { useEffect, useState } from "react";
import { getallList } from "./Api";
import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
export default function Index() {
  const [data, setData] = useState([]);
  async function allList() {
    try {
      const res = await getallList();
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    allList();
  }, []);
  return (
    <>
      <Navbar />
      <div className="container">
        <h3>All Listings</h3>
        <div className="row row-cols-lg-3 row-cols-md-3 row-cols-sm-1">
          {data.map((el) => (
            <Link to={`/show/${el._id}`} className="listing-link">
              <div className="card col card-listing">
                <img
                  src={el.image}
                  className="card-img-top card-img"
                  alt="..."
                  style={{ height: "20rem" }}
                />
                <div className="card-img-overlay">{el.country}</div>
                <div className="card-body">
                  <p className="card-text">
                    <b>{el.title}</b> <br />
                    &#8377; {el.price} / night
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
