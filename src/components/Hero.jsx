import React from "react";
import developerImage from "../assets/developer.png"; // <-- updated relative path

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div>
          <h1 style={{ fontSize: "25px" }}>
            <span style={{ color: "#22c55e" }}>“Where Creativity Beats in Code.”</span>
          </h1>

          <h3 style={{ marginTop: "10px" }}>Web Designer & React Developer</h3>

          <p style={{ margin: "20px 0", maxWidth: "500px" }}>
            I design and develop modern responsive websites with clean UI and optimized performance.
          </p>

          <button className="btn">Explore More</button>
        </div>

        <div>
          <img
            src={developerImage} // local image
            alt="Web Designer Working"
            style={{ width: "500px", borderRadius: "30px" }}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;