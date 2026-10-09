import RelogioLocal from "./RelogioLocal";
import "./Header.css";

const easeInOutCubic = (t) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

function rolarSuave(destinoY, duracao = 1200) {
  const inicioY = window.scrollY;
  const distancia = destinoY - inicioY;
  let inicioTempo = null;

  function animar(tempoAtual) {
    if (inicioTempo === null) inicioTempo = tempoAtual;
    const progresso = Math.min((tempoAtual - inicioTempo) / duracao, 1);

    window.scrollTo(0, inicioY + distancia * easeInOutCubic(progresso));

    if (progresso < 1) requestAnimationFrame(animar);
  }

  requestAnimationFrame(animar);
}

function Header() {
  const irParaSecao = (id) => {
    const secao = document.getElementById(id);
    if (!secao) return;

    const offset = 80;
    const y = secao.getBoundingClientRect().top + window.scrollY - offset;

    rolarSuave(y, 1200);
  };

  const links = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "stacks", label: "Stacks" },
    { id: "experiences", label: "Experiences" },
    { id: "contacts", label: "Contacts" },
  ];

  return (
    <header>
      <div className="container-header">
        <RelogioLocal />
      </div>
      <div className="container-header">
        {links.map((link) => (
          <span
            key={link.id}
            className="options-header"
            onClick={() => irParaSecao(link.id)}
          >
            {link.label}
          </span>
        ))}
      </div>
    </header>
  );
}

export default Header;