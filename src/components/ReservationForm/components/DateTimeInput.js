import React from "react";
import { CalendarIcon } from "../../icons";
import "./DateTimeInput.css";

function DateTimeInput({
  date,
  time,
  availableTimes,
  onChange,
  onDateChange,
  isLoading,
  errors = {},
}) {
  const handleDateChange = (e) => {
    onChange(e);
    // Notify parent to update available times for new date
    if (onDateChange) {
      const selectedDate = new Date(e.target.value);
      onDateChange(selectedDate);
    }
  };

  // Get today's date in YYYY-MM-DD format for min attribute
  const today = new Date().toISOString().split("T")[0];

  return (
    <fieldset className="form-group datetime-group">
      <legend className="visually-hidden">Date and Time</legend>
      <div className="form-icon" aria-hidden="true">
        <CalendarIcon />
      </div>
      <div className="form-inputs-row">
        <div className="input-wrapper">
          <label htmlFor="date" className="input-label">
            Date *
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={handleDateChange}
            min={today}
            className={`input-field ${errors.date ? "input-error" : ""}`}
            required
            aria-required="true"
            aria-invalid={errors.date ? "true" : "false"}
            aria-describedby={errors.date ? "date-error" : undefined}
          />
          {errors.date && (
            <span id="date-error" className="error-message" role="alert">
              {errors.date}
            </span>
          )}
        </div>
        <div className="input-wrapper">
          <label htmlFor="time" className="input-label">
            Time *
          </label>
          <select
            id="time"
            name="time"
            value={time}
            onChange={onChange}
            className={`input-field ${errors.time ? "input-error" : ""}`}
            required
            disabled={
              isLoading || !availableTimes || availableTimes.length === 0
            }
            aria-required="true"
            aria-invalid={errors.time ? "true" : "false"}
            aria-describedby={errors.time ? "time-error" : undefined}
          >
            <option value="">
              {isLoading ? "Loading..." : "Select a time"}
            </option>
            {availableTimes &&
              availableTimes.map((timeSlot) => (
                <option key={timeSlot} value={timeSlot}>
                  {timeSlot}
                </option>
              ))}
          </select>
          {errors.time && (
            <span id="time-error" className="error-message" role="alert">
              {errors.time}
            </span>
          )}
        </div>
      </div>
    </fieldset>
  );
}

export default DateTimeInput;
