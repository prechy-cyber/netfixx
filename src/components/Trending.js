import React, { useRef } from "react";
import "./Trending.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const movies = [
  { id: 1, img: "https://image.tmdb.org/t/p/w500/8YFL5QQVPy3AgrEQxNYVSgiPEbe.jpg" },
  { id: 2, img: "https://image.tmdb.org/t/p/w500/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg" },
  { id: 3, img: "https://image.tmdb.org/t/p/w500/3mInKjYGMmGOGvOM5yFwShxK9Q4.jpg" },
  { id: 4, img: "https://image.tmdb.org/t/p/w500/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg" },
  { id: 5, img: "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg" },
  { id: 6, img: "https://image.tmdb.org/t/p/w500/jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg" },
  { id: 7, img: "https://image.tmdb.org/t/p/w500/sv1xJUazXeYqALzczSZ3O6nkH75.jpg" },
  { id: 8, img: "https://image.tmdb.org/t/p/w500/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg" },
  { id: 9, img: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg" },
  { id: 10, img: "https://image.tmdb.org/t/p/w500/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg" }
];

const Trending = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <section className="trending">
      <h2>Trending Now</h2>
      <div className="trending-wrapper">
        <button className="scroll-btn left" onClick={scrollLeft}>
          <FaChevronLeft />
        </button>

        <div className="trending-carousel" ref={carouselRef}>
          {movies.map((movie, index) => (
            <div className="trending-card" key={movie.id}>
              <span className="trend-number">{index + 0}</span>
              <img src={movie.img} alt={`Movie ${index + 1}`} />
            </div>
          ))}
        </div>

        <button className="scroll-btn right" onClick={scrollRight}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Trending;
