import { Link } from "react-router-dom";

export default function Navigation(props) {
  return (
    <menu className={`navbar-menu ${props.device}`}>
      {props.device === "mobile" ? (
        ""
      ) : (
        <Link to="/">
          <img
            src={require("../assets/nav-logo.png")}
            alt="Little Lemon logo"
            className="nav-image"
          ></img>
        </Link>
      )}
      <Link className="hover-effect" to="/">
        <h2>Home</h2>
      </Link>
      <Link className="hover-effect" to="/about">
        <h2>About</h2>
      </Link>
      <Link className="hover-effect" to="/reservation">
        <h2>Reservations</h2>
      </Link>
    </menu>
  );
}