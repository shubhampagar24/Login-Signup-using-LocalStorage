import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (!user.name || !user.email || !user.password) {
      setError("All fields are required!");
      return;
    }

    // Save user data in localStorage
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSignup}>
        <input type="text" placeholder="Name" onChange={(e) => setUser({ ...user, name: e.target.value })} />
        <input type="email" placeholder="Email" onChange={(e) => setUser({ ...user, email: e.target.value })} />
        <input type="password" placeholder="Password" onChange={(e) => setUser({ ...user, password: e.target.value })} />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
