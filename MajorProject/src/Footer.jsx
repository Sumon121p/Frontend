import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./App.css";
export default function Footer() {
  return (
    <div className="f-info">
      <div className="f-info-socials">
        <span>
          <FacebookIcon />
        </span>
        <span>
          <InstagramIcon />
        </span>
        <span>
          <LinkedInIcon />
        </span>
      </div>
      <div> &copy; Wanderlust Private Limited</div>
      <div className="f-info-links">
        <a href="#">Privasy</a>
        <a href="#">Terms</a>
      </div>
    </div>
  );
}
