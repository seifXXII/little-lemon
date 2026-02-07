import React from "react";
import "./MenuCard.css";

function MenuCard({ item }) {
  return (
    <article className="menu-card">
      <div className="menu-card-content">
        <h3 className="menu-card-title card-title">{item.name}</h3>
        <p className="menu-card-description paragraph">{item.description}</p>
        <p className="menu-card-price highlight-text">{item.price}</p>
      </div>
      <div className="menu-card-image">
        <img src={item.image} alt={item.name} />
      </div>
    </article>
  );
}

export default MenuCard;
