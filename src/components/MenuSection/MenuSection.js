import React, { useState } from "react";
import { menuItems, menuCategories } from "../../data/menuData";
import MenuCard from "../MenuCard/MenuCard";
import "./MenuSection.css";

function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("mains");

  const filteredItems = menuItems.filter(
    (item) => item.category === activeCategory || activeCategory === "all",
  );

  return (
    <section className="menu-section">
      <div className="menu-container">
        <div className="menu-header">
          <h2 className="section-title">Order for Delivery!</h2>
          <img
            src="/assets/icons/Basket.svg"
            alt=""
            className="menu-delivery-icon"
          />
        </div>

        <div className="menu-categories">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              className={`menu-category-btn ${
                activeCategory === category.id ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="menu-items">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => <MenuCard key={item.id} item={item} />)
          ) : (
            <p className="menu-empty">No items in this category yet.</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default MenuSection;
