import { useState, useEffect } from "react";

function About() {
  // Facts / experience
  const facts = [
    { label: "Completed Projects", value: "25+", icon: "💻" },
    { label: "Happy Clients", value: "15+", icon: "😊" },
    { label: "Awards & Recognition", value: "2+", icon: "🏆" },
    { label: "Backend Knowledge", value: "PHP & MySQL", icon: "🖥️" },
  ];

  return (
    <section id="about">
      <h2 style={{ textAlign: "center", marginBottom: "25px" }}>
        About Us
      </h2>

      <div className="container" style={{ maxWidth: "900px", margin: "auto" }}>
        {/* Intro */}
        <p
          style={{
            textAlign: "center",
            maxWidth: "720px",
            margin: "auto 0 30px",
            fontSize: "15px",
            lineHeight: "1.5",
          }}
        >
          A passionate <strong>Web Designer & React Developer</strong> who builds modern, responsive and high-performance websites. I focus on clean UI design, user experience, and scalable front-end architecture. I love turning ideas into beautiful, interactive websites.
        </p>

        {/* Facts Section */}
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "12px",
            marginBottom: "30px",
          }}
        >
          {facts.map((fact, i) => (
            <div
              key={i}
              className="card"
              style={{
                textAlign: "center",
                padding: "15px",
                transition: "0.3s",
                cursor: "default",
              }}
            >
              <div style={{ fontSize: "28px", marginBottom: "8px" }}>
                {fact.icon}
              </div>
              <h3 style={{ fontSize: "20px", color: "#22c55e" }}>{fact.value}</h3>
              <p style={{ marginTop: "4px", fontWeight: 500, fontSize: "13px" }}>{fact.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;