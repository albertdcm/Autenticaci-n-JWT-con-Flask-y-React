import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch(import.meta.env.VITE_BACKEND_URL + "/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    if (res.ok) {
      const data = await res.json();
      sessionStorage.setItem("token", data.token);
      navigate("/private");
    } else alert("Login fallido");
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" className="form-control my-2" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" className="form-control my-2" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
        <button className="btn btn-success" type="submit">Login</button>
      </form>
    </div>
  );
};