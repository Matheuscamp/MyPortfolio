import "./Projects.css";
import listasupermercado from "../assets/imgs/App-Lista-Supermercado.png";
import ordemChegada from "../assets/imgs/Ordem-de-chegada-app.png";
import dashboardFinanceiro from "../assets/imgs/Dashboard-financeiro.png";
import painelProtege from "../assets/imgs/Painel-Protege.png";
function Projects() {
  return (
    <div className="container-projects">
      <div className="Texts-section">
        <h1>Projects</h1>
        <p>
          A container of projects I've worked on, for college and my own
          products.
        </p>
      </div>
      <div className="grid-section">
        <article class="card">
          <div className="card-img">
            <img src={listasupermercado} alt="" />
          </div>
          <h3>
            <a
              href="https://github.com/Matheuscamp/supermarket-list-frontend"
              target="_blank"
              rel="noopener noreferrer"
              class="link-project"
            >
              Supermarket List ↗
            </a>
          </h3>
          <p class="desc">
            A shopping list app designed to make grocery planning faster and
            easier. Organize your shopping simply, quickly, and conveniently.
          </p>
          <span class="meta">Own product · 2024</span>
        </article>
        <article class="card">
          <div className="card-img">
            <img src={ordemChegada} alt="" />
          </div>
          <h3>
            <a
              href="https://matheuscamp.github.io/Barbearia-Brothers-Lista-Chegada/"
              target="_blank"
              rel="noopener noreferrer"
              class="link-project"
            >
              Order of Arrival ↗
            </a>
          </h3>
          <p class="desc">
            This is a website for registering customers on a first-come,
            first-served basis at a barbershop.
          </p>
          <span class="meta">Own product · 2024</span>
        </article>
        <article class="card">
          <div className="card-img">
            <img src={dashboardFinanceiro} alt="" />
          </div>
          <h3>
            <a
              href="https://matheuscamp.github.io/wallet-app-frontend/"
              target="_blank"
              rel="noopener noreferrer"
              class="link-project"
            >
              Wallet App ↗
            </a>
          </h3>
          <p class="desc">
            This is an finances management dashboard. The main objective is the
            user add and delete finances releases, and inform him the balance.
          </p>
          <span class="meta">Own product · 2024</span>
        </article>
        <article class="card">
          <div className="card-img">
            <img src={painelProtege} alt="" />
          </div>
          <h3>
            <a
              href="https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2026-1-ti1-0427200-protege"
              target="_blank"
              rel="noopener noreferrer"
              class="link-project"
            >
              Protege + ↗
            </a>
          </h3>
          <p class="desc">
            You are not alone. This website offers a safe space to report
            domestic violence and find the support you need.
          </p>
          <span class="meta">College Project · 2026</span>
        </article>
      </div>
    </div>
  );
}
export default Projects;
