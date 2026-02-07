import React from "react";
import { Link } from "react-router-dom";
import { restaurantInfo } from "../../data/menuData";
import "./Hero.css";

function Hero({ minimal = false }) {
  return (
    <section className={`hero ${minimal ? "hero--minimal" : ""}`}>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title display-title text-yellow">
            {restaurantInfo.name}
          </h1>
          <p className="hero-subtitle subtitle text-white">
            {restaurantInfo.location}
          </p>

          {!minimal && (
            <>
              <p className="hero-description lead-text text-white">
                {restaurantInfo.tagline}
              </p>
              <Link to="/reserve" className="btn btn-primary hero-cta">
                Reserve a table
              </Link>
            </>
          )}
        </div>

        {!minimal && (
          <div className="hero-image">
            <img
              src="/assets/images/restaurant-food.jpg"
              alt="Delicious Mediterranean food"
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default Hero;
