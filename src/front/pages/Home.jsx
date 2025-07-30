import React, { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {
	const { store, dispatch } = useGlobalReducer();

	const loadMessage = async () => {
		const backendUrl = import.meta.env.VITE_BACKEND_URL;
		if (!backendUrl) return console.error("VITE_BACKEND_URL is not defined in .env file");

		try {
			const response = await fetch(`${backendUrl}/api/hello`);
			if (!response.ok) throw new Error("Error en la respuesta del backend");

			const data = await response.json();
			dispatch({ type: "set_hello", payload: data.message });
		} catch (error) {
			console.error("Error fetching message from backend:", error.message);
			dispatch({ type: "set_hello", payload: null });
		}
	};

	useEffect(() => {
		loadMessage();
	}, []);

	return (
		<div className="text-center mt-5">
			<h1 className="display-4">Hello Rigo!!</h1>
			<p className="lead">
				<img src={rigoImageUrl} className="img-fluid rounded-circle mb-3" alt="Rigo Baby" />
			</p>
			<div className="alert alert-info">
				{store.message ? (
					<span>{store.message}</span>
				) : (
					<span className="text-danger">
						Loading message from the backend (make sure your python 🐍 backend is running)...
					</span>
				)}
			</div>
		</div>
	);
};