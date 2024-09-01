import Navbar from "./Navbar";
import Footer from "./Footer";
import "./App.css";
import { useState } from "react";
import { addList } from "./Api";
import { useNavigate } from "react-router-dom";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export default function AddNewList() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [imgLink, setImgLink] = useState("");
  const [price, setPrice] = useState("");
  const [country, setCountry] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const add = async (e) => {
    e.preventDefault();
    const payload = {
      title,
      image: imgLink,
      price,
      country,
      location,
      description,
    };
    try {
      const res = await addList(payload);
      toast.success("Updated Sucessfuly");
      navigate("/");
    } catch (err) {
      toast.warn(err.response.data.err);
    }
  };
  return (
    <>
      <Navbar />
      <div className="row row-add">
        <div className="col-8">
          <div className="container">
            <h3>Create a New Listing</h3>
            <form action="" onSubmit={add}>
              <div className="card-body">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="name"
                    className="form-control"
                    id="title"
                    name="title"
                    placeholder="enter title"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="img-link" className="form-label">
                    Image Link
                  </label>
                  <input
                    type="title"
                    className="form-control"
                    id="img-link"
                    name="image"
                    placeholder="enter image URL/Link"
                    onChange={(e) => setImgLink(e.target.value)}
                    value={imgLink}
                    required
                  />
                </div>

                <div className="row">
                  <div className="mb-3 col-md-4">
                    <label htmlFor="price" className="form-label">
                      Price
                    </label>
                    <input
                      type="title"
                      className="form-control"
                      id="price"
                      name="price"
                      placeholder="enter price"
                      onChange={(e) => setPrice(e.target.value)}
                      value={price}
                      required
                    />
                  </div>

                  <div className="mb-3 col-md-8">
                    <label htmlFor="country" className="form-label">
                      Country
                    </label>
                    <input
                      type="title"
                      className="form-control"
                      id="country"
                      name="country"
                      placeholder="enter country"
                      onChange={(e) => setCountry(e.target.value)}
                      value={country}
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="Location" className="form-label">
                    Location
                  </label>
                  <input
                    type="title"
                    className="form-control"
                    id="Location"
                    name="location"
                    placeholder="enter location"
                    onChange={(e) => setLocation(e.target.value)}
                    value={location}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    type="text"
                    id="description"
                    name="description"
                    rows={3}
                    defaultValue={""}
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    required
                  />
                </div>

                <div className="mb-3">
                  <button type="submit" className="btn add-btn">
                    Add
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer/>
      </div>
      <Footer />
    </>
  );
}
