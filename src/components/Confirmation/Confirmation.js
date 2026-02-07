import React from "react";
import { Link } from "react-router-dom";
import { CheckmarkIcon } from "../icons";
import "./Confirmation.css";

function Confirmation() {
  return (
    <div className="confirmation">
      <h2 className="section-title">Table Reserved</h2>
      <div className="confirmation-divider"></div>

      <div className="confirmation-card">
        <h3 className="confirmation-heading">
          The Table Has Been Reserved Successfully!
        </h3>
        <p className="confirmation-text">
          You Will Get A Confirmation And Reminder With The Contact Method
          Selected By You
        </p>

        <div className="confirmation-checkmark">
          <CheckmarkIcon size={100} />
        </div>
      </div>

      <Link to="/" className="btn btn-primary return-btn">
        Return to home
      </Link>
    </div>
  );
}

export default Confirmation;
