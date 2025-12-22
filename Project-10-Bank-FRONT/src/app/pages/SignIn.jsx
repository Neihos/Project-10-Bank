import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    try {
      const res = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const json = await res.json();

      if (!res.ok) {
        console.log("Login failed : ", json.message);
        return;
      }

      const token = json.body.token;
      console.log("JWT TOKEN:", token);
      navigate("/profile");
    } catch (err) {
      console.log("Network/API error :", err);
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" name="rememberMe" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
}
