import { useEffect, useState } from "react";
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
  const [rolou, setRolou] = useState(false);

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 10);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  const irParaSecao = (evento, id) => {
    evento.preventDefault();
    const secao = document.getElementById(id);
    if (!secao) return;

    const offset = 64;
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
    <header className={`site-header${rolou ? " is-scrolled" : ""}`}>
      <div className="container header-inner">
        <RelogioLocal />
        <nav className="nav-header">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="options-header"
              onClick={(evento) => irParaSecao(evento, link.id)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
