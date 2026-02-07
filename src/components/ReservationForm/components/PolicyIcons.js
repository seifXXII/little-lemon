import React from "react";
import {
  NoPetsIcon,
  NoAlcoholIcon,
  NoSmokingIcon,
  NoCreditCardIcon,
} from "../../icons";
import "./PolicyIcons.css";

function PolicyIcons() {
  return (
    <div className="policy-icons">
      <div className="policy-icon" title="No pets allowed">
        <NoPetsIcon />
      </div>
      <div className="policy-icon" title="No alcohol">
        <NoAlcoholIcon />
      </div>
      <div className="policy-icon" title="No smoking">
        <NoSmokingIcon />
      </div>
      <div className="policy-icon" title="Cash only">
        <NoCreditCardIcon />
      </div>
    </div>
  );
}

export default PolicyIcons;
