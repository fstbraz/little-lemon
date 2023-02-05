import Header from "../sections/booking/Header";
import ReservationForm from "../sections/booking/BookingForm";
import { useReducer } from "react";
import { fetchAPI } from "../mock-api";

export default function Booking() {
  function updateTimes(date) {
    return fetchAPI(date);
  }

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
    <>
      <Header />
      <ReservationForm availableTimes={availableTimes} updateTimes={dispatch} />
    </>
  );
}