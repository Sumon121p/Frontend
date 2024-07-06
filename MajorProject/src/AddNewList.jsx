import Navbar from "./Navbar";
import Footer from "./Footer";
import "./App.css";
import { useState } from "react";
import { addList } from "./Api";
import { useNavigate } from "react-router-dom";
export default function AddNewList() {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [imgLink, setImgLink] = useState("");
    const [price, setPrice] = useState("");
    const [country, setCountry] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");

    async function add(){
        const payload = {
            title,
            "image": imgLink,
            price,
            country,
            location,
            description
        }
        try{
            const res = await addList(payload);
            navigate("/");
        }catch(err){
            console.log(err);
        }
    }
  return (
    <>
      <Navbar />
      <div className="row">
        <div className="col-8">
          <div className="container">
            <h3>Create a New Listing</h3>
            <div className="card-body">
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="title"
                  placeholder="enter title"
                  onChange={(e)=>setTitle(e.target.value)}
                  value={title}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="img-link" className="form-label">
                  Image Link
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="img-link"
                  placeholder="enter image URL/Link"
                  onChange={(e)=>setImgLink(e.target.value)}
                  value={imgLink}
                />
              </div>

              <div className="row">
                <div className="mb-3 col-md-4">
                  <label htmlFor="price" className="form-label">
                    Price
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="price"
                    placeholder="enter price"
                    onChange={(e)=>setPrice(e.target.value)}
                    value={price}
                  />
                </div>

                <div className="mb-3 col-md-8">
                  <label htmlFor="country" className="form-label">
                    Country
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="country"
                    placeholder="enter country"
                    onChange={(e)=>setCountry(e.target.value)}
                    value={country}
                  />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="Location" className="form-label">
                  Location
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="Location"
                  placeholder="enter location"
                  onChange={(e)=>setLocation(e.target.value)}
                  value={location}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  rows={3}
                  defaultValue={""}
                  onChange={(e)=>setDescription(e.target.value)}
                  value={description}
                />
              </div>

              <div className="mb-3">
                <button type="button" class="btn add-btn" onClick={add}>
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
