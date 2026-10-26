import "./Projects.css";
import listasupermercado from "../assets/imgs/App-Lista-Supermercado.webp";
import ordemChegada from "../assets/imgs/Ordem-de-chegada-app.webp";
import dashboardFinanceiro from "../assets/imgs/Dashboard-financeiro.webp";
import painelProtege from "../assets/imgs/Painel-Protege.webp";

const projetos = [
  {
    titulo: "Supermarket List",
    link: "https://github.com/Matheuscamp/supermarket-list-frontend",
    imagem: listasupermercado,
    descricao:
      "A shopping list app designed to make grocery planning faster and easier. Organize your shopping simply, quickly, and conveniently.",
    meta: "Own product · 2024",
  },
  {
    titulo: "Order of Arrival",
    link: "https://matheuscamp.github.io/Barbearia-Brothers-Lista-Chegada/",
    imagem: ordemChegada,
    descricao:
      "This is a website for registering customers on a first-come, first-served basis at a barbershop.",
    meta: "Own product · 2024",
  },
  {
    titulo: "Wallet App",
    link: "https://matheuscamp.github.io/wallet-app-frontend/",
    imagem: dashboardFinanceiro,
    descricao:
      "This is an finances management dashboard. The main objective is the user add and delete finances releases, and inform him the balance.",
    meta: "Own product · 2024",
  },
  {
    titulo: "Protege +",
    link: "https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2026-1-ti1-0427200-protege",
    imagem: painelProtege,
    descricao:
      "You are not alone. This website offers a safe space to report domestic violence and find the support you need.",
    meta: "College Project · 2026",
  },
];

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div data-reveal>
          <h1 className="section-title">Projects</h1>
          <p className="section-subtitle">
            A container of projects I've worked on, for college and my own
            products.
          </p>
        </div>

        <div className="grid-section">
          {projetos.map((projeto, i) => (
            <article
              key={projeto.titulo}
              className="card"
              data-reveal
              style={{ "--reveal-delay": `${(i % 2) * 120}ms` }}
            >
              <a
                href={projeto.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card-img"
                tabIndex={-1}
                aria-hidden="true"
              >
                <img
                  src={projeto.imagem}
                  alt=""
                  width="1000"
                  height="500"
                  loading="lazy"
                  decoding="async"
                />
              </a>
              <h3>
                <a
                  href={projeto.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-project"
                >
                  {projeto.titulo} <span className="arrow">↗</span>
                </a>
              </h3>
              <p className="desc">{projeto.descricao}</p>
              <span className="meta">{projeto.meta}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
