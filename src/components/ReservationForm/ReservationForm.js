import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  PolicyIcons,
  DateTimeInput,
  GuestsInput,
  ConfirmationOptions,
} from "./components";
import { submitBooking } from "../../utils/bookingApi";
import { validateBookingForm } from "../../utils/formValidation";
import "./ReservationForm.css";

function ReservationForm({ availableTimes, updateTimes, isLoading }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    adults: 1,
    children: 0,
    specialRequests: "",
    confirmSMS: true,
    confirmEmail: true,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when field is updated
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleDateChange = (selectedDate) => {
    // Reset time when date changes
    setFormData((prev) => ({ ...prev, time: "" }));
    // Clear date error
    setErrors((prev) => ({ ...prev, date: null }));
    // Fetch available times for new date
    if (updateTimes) {
      updateTimes(selectedDate);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    const validation = validateBookingForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);

    try {
      const success = submitBooking(formData);

      if (success) {
        console.log("Reservation submitted successfully:", formData);
        navigate("/confirmation");
      } else {
        setErrors({
          submit: "Failed to submit reservation. Please try again.",
        });
      }
    } catch (error) {
      console.error("Reservation error:", error);
      setErrors({ submit: "An error occurred. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className="reservation-form"
      onSubmit={handleSubmit}
      noValidate
      aria-label="Table reservation form"
    >
      <h2 className="section-title">Reserve a Table</h2>
      <div className="form-divider" role="separator"></div>

      <PolicyIcons />

      <DateTimeInput
        date={formData.date}
        time={formData.time}
        availableTimes={availableTimes}
        onChange={handleChange}
        onDateChange={handleDateChange}
        isLoading={isLoading}
        errors={{ date: errors.date, time: errors.time }}
      />

      <GuestsInput
        adults={formData.adults}
        children={formData.children}
        onChange={handleChange}
        error={errors.guests}
      />

      <fieldset className="special-requests">
        <legend className="visually-hidden">Special Requests</legend>
        <textarea
          name="specialRequests"
          value={formData.specialRequests}
          onChange={handleChange}
          placeholder="Special Requests:"
          className="input-field textarea"
          rows="3"
          aria-label="Special requests"
        />
      </fieldset>

      <ConfirmationOptions
        confirmSMS={formData.confirmSMS}
        confirmEmail={formData.confirmEmail}
        onChange={handleChange}
      />

      {errors.submit && (
        <p className="error-message submit-error" role="alert">
          {errors.submit}
        </p>
      )}

      <button
        type="submit"
        className="btn btn-primary submit-btn"
        disabled={isSubmitting}
        aria-busy={isSubmitting}
      >
        {isSubmitting ? "Reserving..." : "Reserve a table"}
      </button>
    </form>
  );
}

export default ReservationForm;
