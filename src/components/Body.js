import React from "react";
import "./Body.css";

function Body() {
  return (
    <section className="body">
      <div className="body__overlay" />
      <div className="body__content">
        <h1 className="body__title">Unlimited movies, TV shows, and more</h1>
        <h2 className="body__subtitle">Watch anywhere. Cancel anytime.</h2>
        <p className="body__text">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className="body__input-row">
          <input
            className="body__input"
            type="email"
            placeholder="Email address"
          />
          <button className="body__cta">Get Started &gt;</button>
        </div>
      </div>
    </section>
  );
}

export default Body;



