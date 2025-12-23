import logo from "../../assets/images/argentBankLogo.webp";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/authSlice";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {!token ? (
          <Link to="/login" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        ) : (
          <button
            type="button"
            className="main-nav-item"
            onClick={handleLogout}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <i className="fa fa-sign-out"></i>
            Sign Out
          </button>
        )}
      </div>
    </nav>
  );
}
