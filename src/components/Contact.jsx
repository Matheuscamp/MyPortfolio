import "./Contact.css";
import mail from "../assets/imgs/mail-icon.webp";
import linkedin from "../assets/imgs/linkedin-icon.webp";
import github from "../assets/imgs/github-icon.webp";

const contatos = [
  { label: "E-mail", href: "mailto:matheus.camp32@gmail.com", icone: mail },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/matheus-campos-356085278/",
    icone: linkedin,
    externo: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/Matheuscamp",
    icone: github,
    externo: true,
  },
];

function Contact() {
  return (
    <footer id="contacts" className="section contact-section">
      <div className="container contact-inner">
        <h1 className="section-title" data-reveal>
          Let's create together
        </h1>

        <div className="links-contacts">
          {contatos.map((contato, i) => (
            <a
              key={contato.label}
              className="contact-item"
              href={contato.href}
              data-reveal="zoom"
              style={{ "--reveal-delay": `${i * 100}ms` }}
              {...(contato.externo && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
            >
              <span className="btn-imagem">
                <img
                  src={contato.icone}
                  alt=""
                  width="30"
                  height="30"
                  loading="lazy"
                  decoding="async"
                />
              </span>
              <span>{contato.label}</span>
            </a>
          ))}
        </div>

        <div className="footer-note">Matheus Campos Pereira - 2026</div>
      </div>
    </footer>
  );
}

export default Contact;
