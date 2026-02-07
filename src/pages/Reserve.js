import React, { useReducer, useEffect } from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import ReservationForm from "../components/ReservationForm/ReservationForm";
import {
  fetchAvailableTimes,
  timesReducer,
  initialTimesState,
  BOOKING_ACTIONS,
} from "../utils/bookingApi";

function Reserve() {
  const [timesState, dispatch] = useReducer(timesReducer, initialTimesState);

  // Initialize times for today's date on mount
  useEffect(() => {
    initializeTimes();
  }, []);

  /**
   * Initialize available times for today's date
   */
  const initializeTimes = () => {
    dispatch({ type: BOOKING_ACTIONS.SET_LOADING });
    const today = new Date();
    const times = fetchAvailableTimes(today);
    dispatch({ type: BOOKING_ACTIONS.UPDATE_TIMES, payload: times });
  };

  /**
   * Update available times when date changes
   * @param {Date} selectedDate - The selected date
   */
  const updateTimes = (selectedDate) => {
    dispatch({ type: BOOKING_ACTIONS.SET_LOADING });
    const times = fetchAvailableTimes(selectedDate);
    dispatch({ type: BOOKING_ACTIONS.UPDATE_TIMES, payload: times });
  };

  return (
    <div className="page reserve-page">
      <Header />
      <Hero minimal />
      <ReservationForm
        availableTimes={timesState.availableTimes}
        updateTimes={updateTimes}
        isLoading={timesState.loading}
      />
    </div>
  );
}

export default Reserve;
