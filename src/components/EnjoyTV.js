import React from "react";
import "./EnjoyTv.css";

const EnjoyTv = () => {
  const features = [
    {
      id: 1,
      title: "Enjoy on your TV",
      description:
        "Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
      image: "tv.png",
    },
    {
      id: 2,
      title: "Download your shows to watch offline",
      description: "Save your favorites easily and always have something to watch.",
      image: "mobile.jpg",
    },
    {
      id: 3,
      title: "Watch everywhere",
      description: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
      image: "device-pile.png",
    },
    {
      id: 4,
      title: "Create profiles for kids",
      description:
        "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
      image: "kids.png",
    },
  ];

  return (
    <div className="enjoy-container">
      <h2 className="enjoy-title">More Reasons to Join</h2>
      <div className="enjoy-card-section">
        {features.map((feature) => (
          <div className="enjoy-card" key={feature.id}>
            <div className="enjoy-text">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
            <img
              src={`/assets/${feature.image}`}
              alt={feature.title}
              className="enjoy-img"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnjoyTv;

