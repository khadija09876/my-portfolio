import { useState, useEffect } from "react";

function Skills() {
  const skills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "UI/UX Design", level: 75 },
    { name: "Responsive Design", level: 90 },
  ];

  const [animatedSkills, setAnimatedSkills] = useState(
    skills.map(() => 0)
  );

  useEffect(() => {
    let timeout;
    let index = 0;

    function animate() {
      setAnimatedSkills(prev => {
        const newSkills = [...prev];
        if (newSkills[index] < skills[index].level) {
          newSkills[index] += 1;
        } else if (index < skills.length - 1) {
          index += 1;
        }
        return newSkills;
      });
      timeout = requestAnimationFrame(animate);
    }

    animate();

    return () => cancelAnimationFrame(timeout);
  }, []);

  return (
    <section id="skills" style={{ paddingTop: "40px", paddingBottom: "40px" }}>
      {/* Section Heading */}
      <h2 style={{ textAlign: "center", marginBottom: "15px" }}>Skills</h2>

      {/* Skills Grid */}
      <div
        className="container grid"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "9px",
        }}
      >
        {skills.map((skill, i) => (
          <div
            key={i}
            className="card"
            style={{
              padding: "35px",
              borderRadius: "12px",
              transition: "transform 0.3s, box-shadow 0.3s",
              cursor: "pointer",
            }}
          >
            <h3 style={{ marginBottom: "10px", fontSize: "18px" }}>{skill.name}</h3>

            {/* Animated Skill Bar */}
            <div
              style={{
                width: "100%",
                height: "12px",
                background: "#334155",
                borderRadius: "6px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${animatedSkills[i]}%`,
                  height: "100%",
                  background: "linear-gradient(90deg,#6366f1,#22c55e)",
                  borderRadius: "6px",
                  transition: "width 0.3s ease",
                }}
              ></div>
            </div>

            {/* Percentage Label */}
            <p
              style={{
                marginTop: "6px",
                fontWeight: 500,
                textAlign: "right",
                fontSize: "14px",
              }}
            >
              {animatedSkills[i]}%
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;