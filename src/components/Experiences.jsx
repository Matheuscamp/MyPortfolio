import "./Experiences.css";

const experiencias = [
  {
    periodo: "2026 Aug. - at moment",
    empresa: "Invest Minas",
    cargo: "TI Support",
    atual: true,
  },
  {
    periodo: "2025 Feb. - 2025 Dec.",
    empresa: "Brazilian Army",
    cargo: "Student",
  },
  {
    periodo: "2024 May. - 2025 Feb.",
    empresa: "Sem Rumo - Projetos Audiovisuais",
    cargo: "Web Developer (Low-code)",
  },
];

function Experiences() {
  return (
    <section id="experiences" className="section">
      <div className="container">
        <h1 className="section-title" data-reveal>
          Experiences
        </h1>
        <div className="experience-list">
          {experiencias.map((exp, i) => (
            <div
              key={exp.empresa}
              className="experience-card"
              data-reveal
              style={{ "--reveal-delay": `${i * 120}ms` }}
            >
              <p className="experience-period">
                {exp.atual && <span className="pulse" aria-hidden="true" />}
                {exp.periodo}
              </p>
              <div>
                <h3>{exp.empresa}</h3>
                <p className="experience-role">{exp.cargo}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experiences;
