import { useState } from "react";

function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 10%",
        height: "90px",            // fixed height to match scroll-padding-top
        background: "#020617",
        position: "sticky",
        top: "0",
        zIndex: 1000,              // keep navbar on top of other elements
      }}
    >
      <h2 style={{ color: "#22c55e", margin: 0, lineHeight: "90px" }}>
        DesignPulse
      </h2>

      <ul
        style={{
          display: "flex",
          gap: "25px",
          listStyle: "none",
        }}
      >
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;