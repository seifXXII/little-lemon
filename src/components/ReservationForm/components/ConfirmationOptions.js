import React from "react";
import { SmsIcon, EmailIcon } from "../../icons";
import "./ConfirmationOptions.css";

function ConfirmationOptions({ confirmSMS, confirmEmail, onChange }) {
  return (
    <div className="confirmation-section">
      <p className="confirmation-title">Confirmation & Reminder</p>
      <div className="confirmation-options">
        <label className={`confirmation-option ${confirmSMS ? "active" : ""}`}>
          <input
            type="checkbox"
            name="confirmSMS"
            checked={confirmSMS}
            onChange={onChange}
          />
          <div className="option-icon">
            <SmsIcon />
          </div>
          <span className="option-label">SMS</span>
          <span className="option-check">✓</span>
        </label>

        <label
          className={`confirmation-option ${confirmEmail ? "active" : ""}`}
        >
          <input
            type="checkbox"
            name="confirmEmail"
            checked={confirmEmail}
            onChange={onChange}
          />
          <div className="option-icon">
            <EmailIcon />
          </div>
          <span className="option-label">Email</span>
          <span className="option-check">✓</span>
        </label>
      </div>
    </div>
  );
}

export default ConfirmationOptions;
