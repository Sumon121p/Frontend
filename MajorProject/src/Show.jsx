import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "./Rating.css";
import { useEffect, useState } from "react";
import {
  deleteList,
  deleteReview,
  getbyidList,
  giveReview,
  isLogin,
} from "./Api";
import { ToastContainer, toast } from "react-toastify";

export default function Show() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState("");
  const [rating, setRating] = useState(1);
  const [Comment, setComment] = useState("");

  async function view() {
    try {
      const res = await getbyidList(id);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function DeleteList() {
    try {
      const res = await deleteList(id);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  async function Submit() {
    const payload = {
      rating,
      Comment,
    };
    try {
      const res = await giveReview(id, payload);
      view();
      setRating(1);
      setComment("");
    } catch (err) {
      toast.warn(err.response?.data?.err);
    }
  }

  async function delReview(reviewId) {
    try {
      const res = await deleteReview(id, reviewId);
      toast.success("Reveiw Deleted Done");
      view();
    } catch (err) {
      toast.warn(err.response?.data.err);
    }
  }

  const [Authorized, setAuthorized] = useState("");
  const isAuthorized = async () => {
    try {
      const res = await isLogin();
      setAuthorized(res.data);
    } catch (err) {
      toast(err);
    }
  };

  useEffect(() => {
    view();
    isAuthorized();
  }, [id]);
  return (
    <div>
      <Navbar />
      <div className="row">
        <div className="col-8 offset-3">
          <div className="container">
            <h1>{data.title}</h1>
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
              <div className="card-text pb-1">
                Owend by <i>{data.owner?.username}</i>
              </div>
              <div className="card-text pb-1">{data.country}</div>
              <div>
                <p className="card-text pb-1">
                  &#8377; {data.price} / night <br />
                  <p>{data.location}</p> <br />
                  <p>{data.description}</p>
                </p>
              </div>
            </div>
            {Authorized._id === data.owner?._id ? (
              <div>
                <Link className="btn btn-danger" to={`/list/${id}`}>
                  Edit
                </Link>
                <button className="btn m-2 btn-dark" onClick={DeleteList}>
                  Delete
                </button>
              </div>
            ) : (
              ""
            )}
            <hr />
          </div>
          <div className="mb-3 me-5">
            <h4>Leave a Review</h4>
            <div className="mb-3 mt-3">
              <label className="form-label">Rating</label>
              <input
                type="range"
                min="1"
                max="5"
                className="form-range"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </div>
            {/* <fieldset class="starability-slot">
              <input
                type="radio"
                id="no-rate"
                class="input-no-rate"
                name="rating"
                value="0"
                checked
                aria-label="No rating."
              />
              <input type="radio" id="second-rate1" name="rating" value="1" />
              <label for="second-rate1" title="Terrible">
                1 star
              </label>
              <input type="radio" id="second-rate2" name="rating" value="2" />
              <label for="second-rate2" title="Not good">
                2 stars
              </label>
              <input type="radio" id="second-rate3" name="rating" value="3" />
              <label for="second-rate3" title="Average">
                3 stars
              </label>
              <input type="radio" id="second-rate4" name="rating" value="4" />
              <label for="second-rate4" title="Very good">
                4 stars
              </label>
              <input type="radio" id="second-rate5" name="rating" value="5" />
              <label for="second-rate5" title="Amazing">
                5 stars
              </label>
            </fieldset> */}

            <div className="mb-3 mt-3">
              <label className="form-label">Comment</label>
              <textarea
                rows="5"
                cols="30"
                className="form-control"
                value={Comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </div>
            <div className="mt-3 mb-3">
              <button className="btn btn-outline-dark" onClick={Submit}>
                Submit
              </button>
            </div>
            <hr />
            <div className="row">
              <p>
                <b>All Reviews</b>
              </p>
              {data.reviews?.map((el) => (
                <div className="col-6 mb-3">
                  <div className="card">
                    <h5 className="card-header">
                      {el.owner.username}
                      <p class="starability-result" data-rating={el?.rating}>
                        Rated: 3 stars
                      </p>
                    </h5>
                    <div className="card-body">
                      <p className="card-text">{el?.Comment}</p>
                      {Authorized._id === el.owner._id ? (
                        <button
                          className="btn btn-outline-danger"
                          onClick={() => delReview(el._id)}
                        >
                          Delete
                        </button>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}
