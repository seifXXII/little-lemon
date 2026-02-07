import React from "react";
import { GuestsIcon } from "../../icons";
import "./GuestsInput.css";

function GuestsInput({ adults, children, onChange, error }) {
  return (
    <fieldset className="form-group">
      <legend className="visually-hidden">Number of Guests</legend>
      <div className="form-icon" aria-hidden="true">
        <GuestsIcon />
      </div>
      <div className="form-inputs-row">
        <div className="input-wrapper">
          <label htmlFor="adults" className="input-label">
            Adults *
          </label>
          <select
            id="adults"
            name="adults"
            value={adults}
            onChange={onChange}
            className={`input-field ${error ? "input-error" : ""}`}
            aria-required="true"
            aria-invalid={error ? "true" : "false"}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <option key={n} value={n}>
                {n} Adult{n > 1 ? "s" : ""}
              </option>
            ))}
          </select>
        </div>
        <div className="input-wrapper">
          <label htmlFor="children" className="input-label">
            Children
          </label>
          <select
            id="children"
            name="children"
            value={children}
            onChange={onChange}
            className="input-field"
          >
            {[0, 1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n}>
                {n} Child{n !== 1 ? "ren" : ""}
              </option>
            ))}
          </select>
        </div>
      </div>
      {error && (
        <span className="error-message guests-error" role="alert">
          {error}
        </span>
      )}
    </fieldset>
  );
}

export default GuestsInput;
