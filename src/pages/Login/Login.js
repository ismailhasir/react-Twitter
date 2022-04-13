import "./Login.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img
          src="https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png"
          alt=""
        />
      </div>
      <form onSubmit={handleSubmit} className="login-form">
        <h1>LOGIN</h1>

        <label>
          <input
            type="text"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=" E-Mail"
          />
        </label>
        <label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder=" Password"
          />
        </label>
        <button type="submit" className="btn">
          Login
        </button>
        <p>Don't you have an account yet?</p>
        <Link className="btn" exact to="/signup">
          Sign Up
        </Link>
      </form>
    </div>
  );
}
