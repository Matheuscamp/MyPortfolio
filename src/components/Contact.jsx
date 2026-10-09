import "./Contact.css";
import mail from "../assets/imgs/mail-icon.png";
import linkedin from "../assets/imgs/linkedin-icon.png";
import github from "../assets/imgs/github-icon.png";

function Contact() {
  return (
    <div className="contact-section">
      <h1>Let's create together</h1>

      <div className="links-contacts">
        <a
          className="contact-item"
          href="mailto:matheus.camp32@gmail.com"
        >
          <span className="btn-imagem">
            <img src={mail} alt="E-mail" />
          </span>
          <span>E-mail</span>
        </a>

        <a
          className="contact-item"
          href="https://www.linkedin.com/in/matheus-campos-356085278/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="btn-imagem">
            <img src={linkedin} alt="LinkedIn" />
          </span>
          <span>LinkedIn</span>
        </a>

        <a
          className="contact-item"
          href="https://github.com/Matheuscamp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="btn-imagem">
            <img src={github} alt="GitHub" />
          </span>
          <span>GitHub</span>
        </a>
      </div>

      <div>Matheus Campos Pereira - 2026</div>
    </div>
  );
}

export default Contact;