import "./Signup.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, name);
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
            value={name}
            onChange={(e) => setName(e.target.value)}
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
