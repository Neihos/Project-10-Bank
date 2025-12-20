import logo from "../../assets/images/argentBankLogo.webp";

export default function Header() {
  return (
    <nav className="main-nav">
      <a href="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        <a href="/sign-in" className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          Sign In
        </a>
      </div>
    </nav>
  );
}
