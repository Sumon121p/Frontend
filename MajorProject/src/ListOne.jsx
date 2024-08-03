import { useNavigate, useParams } from "react-router-dom";
import { getbyidList, updateList } from "./Api";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
export default function ListOne() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [imgLink, setImgLink] = useState("");
  const [price, setPrice] = useState("");
  const [country, setCountry] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  async function update(e) {
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
      const res = await updateList(id, payload);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }
  async function view() {
    try {
      const res = await getbyidList(id);
      console.log(res.data);
      setTitle(res.data.title);
      setImgLink(res.data.image);
      setPrice(res.data.price);
      setCountry(res.data.country);
      setLocation(res.data.location);
      setDescription(res.data.description);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    view();
  }, []);
  return (
    <>
      <Navbar />
      <div className="row">
        <div className="col-8">
          <div className="container">
            <h3>Update Listing</h3>
            <form onSubmit={update}>
              <div className="card-body">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
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
                    type="text"
                    className="form-control"
                    id="img-link"
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
                      type="text"
                      className="form-control"
                      id="price"
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
                      type="text"
                      className="form-control"
                      id="country"
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
                    type="text"
                    className="form-control"
                    id="Location"
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
                    id="description"
                    rows={3}
                    defaultValue={""}
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    required
                  />
                </div>

                <div className="mb-3">
                  <button type="submit" class="btn add-btn">
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
