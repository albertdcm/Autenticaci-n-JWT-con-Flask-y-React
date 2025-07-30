import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Private = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) return navigate("/login");

    fetch(import.meta.env.VITE_BACKEND_URL + "/api/private", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => {
        if (!res.ok) throw new Error("Token inválido");
        return res.json();
      })
      .then(data => setMessage(data.message))
      .catch(() => navigate("/login"));
  }, []);

  return (
    <div className="container mt-5">
      <h2>Área Privada</h2>
      <p>{message || "Cargando..."}</p>
    </div>
  );
};