import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import "./App.css";
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-light border-bottom sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
          <ExploreOutlinedIcon className='icon'/>
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
                <a className="nav-link" aria-current="page" href="/">
                Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  All Listing
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add">
                  Add new Listing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
