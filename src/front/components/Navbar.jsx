import { Link } from "react-router-dom";

export const Navbar = () => {
  const isLogged = sessionStorage.getItem("token");

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">React Boilerplate</span>
        </Link>
        <div className="ml-auto">
          {isLogged ? (
            <Link to="/logout">
              <button className="btn btn-danger">Cerrar sesión</button>
            </Link>
          ) : (
            <Link to="/login">
              <button className="btn btn-primary">Iniciar sesión</button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};