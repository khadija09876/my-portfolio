import { useState } from "react";

function Projects() {
  const projects = [
    {
      title: "Ecommerce Website",
      desc: "Modern ecommerce UI with React",
      category: "Web Development",
      tech: ["React", "CSS", "php"],
    },
    {
      title: "Portfolio Website",
      desc: "Personal developer portfolio",
      category: "UI/UX Design",
      tech: ["React", "JS", "Responsive Design"],
    },
    {
      title: "Dashboard UI",
      desc: "Admin dashboard design",
      category: "Web Application",
      tech: ["React", "TailwindCSS"],
    },
  ];

  return (
    <section id="projects">
      <h2 style={{ textAlign: "center", marginBottom: "40px" }}>Projects</h2>

      <div
        className="container grid"
        style={{
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "25px",
        }}
      >
        {projects.map((project, i) => (
          <div
            key={i}
            className="card"
            style={{
              padding: "25px",
              borderRadius: "10px",
              background: "#1e293b",
              transition: "transform 0.3s, box-shadow 0.3s, background 0.3s",
              cursor: "pointer",
            }}
          >
            <h3 style={{ marginBottom: "10px" }}>{project.title}</h3>
            <p style={{ marginBottom: "10px", color: "#94a3b8" }}>{project.desc}</p>

            {/* Category Badge */}
            <span
              style={{
                display: "inline-block",
                padding: "4px 10px",
                background: "#6366f1",
                color: "white",
                borderRadius: "6px",
                fontSize: "12px",
                marginBottom: "12px",
              }}
            >
              {project.category}
            </span>

            {/* Tech Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "15px" }}>
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  style={{
                    fontSize: "12px",
                    background: "#22c55e",
                    padding: "4px 8px",
                    borderRadius: "5px",
                    color: "#0f172a",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            <button
              className="btn"
              style={{
                marginTop: "10px",
                background: "linear-gradient(45deg,#6366f1,#22c55e)",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={e => {
                e.target.style.transform = "scale(1.05)";
                e.target.style.boxShadow = "0 8px 25px rgba(0,0,0,0.4)";
              }}
              onMouseLeave={e => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "none";
              }}
            >
              View Project
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;