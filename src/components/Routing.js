import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Booking from "../pages/Booking";
import Confirmation from "../pages/Confirmation";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route path="/reservation" element={<Booking />} />

      <Route path="/confirmation" element={<Confirmation />} />
    </Routes>
  );
}