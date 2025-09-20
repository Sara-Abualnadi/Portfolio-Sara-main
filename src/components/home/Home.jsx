import React, { useState, useEffect, useRef } from "react";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import "./home.css";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const modelRef = useRef(null);

  // Load 3D model only when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsVisible(entry.isIntersecting));
      },
      { threshold: 0.3 }
    );

    const model = modelRef.current; // copy ref to local variable
    if (model) observer.observe(model);

    return () => {
      if (model) observer.unobserve(model);
    };
  }, []);

  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          {/* Social Links Component */}
          <Social />

          {/* Interactive 3D Avatar */}
          <div className="home__img" ref={modelRef}>
            {isVisible && (
              <iframe
                src="https://my.spline.design/avatarcopy-VojVzvqcCtPL90ONqoA7zZcY/"
                frameBorder="0"
                width="100%"
                height="100%"
                title="Spline 3D"
              ></iframe>
            )}
          </div>

          {/* Hero Text Component */}
          <Data />
        </div>

        {/* Scroll Down positioned under the content */}
        <div
          className="scrolldown-wrapper"
          style={{ display: "flex", justifyContent: "flex-start", marginTop: "2rem" }}
        >
          <ScrollDown />
        </div>
      </div>
    </section>
  );
};

export default Home;



