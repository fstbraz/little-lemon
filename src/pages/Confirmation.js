import HeroImage from "../assets/food/food5.jpeg";
import { Link } from "react-router-dom";

export default function Confirmation() {
  return (
    <header className="confirmation-header">
      <img
        className="confirmation-image"
        src={HeroImage}
        alt="Little Lemon Ingredients"
      ></img>
      <section className="reserve-header-text">
        <h2>Your Reservation is Confirmed!</h2>
        <h4>Thanks for dining with us!</h4>
      </section>

    </header>
  );
}