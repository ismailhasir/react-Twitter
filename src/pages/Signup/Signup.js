import "./Signup.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSignup } from "../../hooks/useSignup";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const { signup, error, isPending } = useSignup();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, userName);
    navigate("/login");
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <img
          src="https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png"
          alt=""
        />
      </div>
      <form onSubmit={handleSubmit} className="signup-form">
        <h1>Sign Up</h1>
        <label>
          <input
            type="text"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
          />
        </label>
        <label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </label>
        <label>
          <input
            type="text"
            required
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="User Name"
          />
        </label>
        <button type="submit" className="btn">
          Sign Up
        </button>
        <p>Already have an acoount?</p>
        <Link className="btn" exact to="/login">
          Login
        </Link>
      </form>
    </div>
  );
}
