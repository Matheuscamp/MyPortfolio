import "./Stack.css";

const grupos = [
  {
    titulo: "FRONTEND",
    itens: ["React.js", "Thymeleaf", "HTML", "CSS", "Bootstrap"],
  },
  { titulo: "BACKEND", itens: ["Spring Boot", "MySQL"] },
  {
    titulo: "CYBER SECURITY",
    itens: ["Kali Linux", "Network", "Infrastructure"],
  },
  { titulo: "TOOLS", itens: ["GitHub", "Git", "Excel", "Power BI"] },
];

function Stack() {
  return (
    <section id="stacks" className="section">
      <div className="container">
        <div data-reveal>
          <h1 className="section-title">Stacks</h1>
          <p className="section-subtitle">
            Some of the tools I use day to day and some things I study
          </p>
        </div>
        <div className="stack-grid">
          {grupos.map((grupo, i) => (
            <article
              key={grupo.titulo}
              className="stack-group"
              data-reveal
              style={{ "--reveal-delay": `${i * 100}ms` }}
            >
              <h3>{grupo.titulo}</h3>
              <ul>
                {grupo.itens.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stack;
