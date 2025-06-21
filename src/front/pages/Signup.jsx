import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    const res = await fetch(import.meta.env.VITE_BACKEND_URL + "/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    if (res.ok) navigate("/login");
    else alert("Error al registrarse");
  };

  return (
    <div className="container mt-5">
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input type="email" className="form-control my-2" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" className="form-control my-2" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
        <button className="btn btn-primary" type="submit">Register</button>
      </form>
    </div>
  );
};