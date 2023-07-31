import { useNavigate } from "react-router-dom";
import logo from "./GloboLogo.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = ({ subtitle }) => {
  const navigate = useNavigate();
  const goHome = (e) => {
    navigate("/");
  };
  return (
    <header className="row">
      <div className="col-md-5">
        <img src={logo} className="logo" alt="logo" onClick={goHome} />
      </div>
      <div className="col-md-7 mt-5 subtitle">{subtitle}</div>
    </header>
  );
};
export default Header;
