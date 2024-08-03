import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { getbyidList } from "./Api";

export default function Show() {
  const { id } = useParams();
  const [data, setData] = useState("");

  async function view() {
    try {
      const res = await getbyidList(id);
      console.log(res.data);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    view();
  }, [id]);
  return (
    <div>
      <Navbar />
      <div className="row">
        <div className="col-8">
          <div className="container ">
            <h1>Listing Details</h1>
            <div>
              <img
                src={data.image}
                alt=""
                className="img-fluid"
                style={{
                  height: "20rem",
                  width: "40rem",
                  borderRadius: "1rem",
                }}
              />
              <div className="card-text">{data.country}</div>
              <div>
                <p className="card-text">
                  <b>{data.title}</b> <br />
                  &#8377; {data.price} / night <br />
                  <p>{data.location}</p> <br />
                  <p>{data.description}</p>
                </p>
              </div>
            </div>
            <div>
              <Link className="btn btn-danger" to={`/list/${id}`}>
                Edit
              </Link>
              <button className="btn m-2 btn-dark">Delete</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
