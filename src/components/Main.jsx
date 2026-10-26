import "./Main.css";
import EfeitoEscrita from "./EfeitoEscrita";
import videoFundo from "../assets/imgs/hero-bg.mp4";
import posterFundo from "../assets/imgs/hero-poster.webp";
import photoMe from "../assets/imgs/photo-me.webp";

function Main() {
  return (
    <section className="container-main">
      <video
        className="video-fundo"
        src={videoFundo}
        poster={posterFundo}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <div className="container content-main">
        <div className="content-main-left">
          <h2 className="hero-item" style={{ "--d": "150ms" }}>
            Hi, I'm
          </h2>
          <h1 className="hero-item hero-name" style={{ "--d": "300ms" }}>
            Matheus Campos
          </h1>

          <div className="efeito-escrita hero-item" style={{ "--d": "450ms" }}>
            <EfeitoEscrita />
          </div>
        </div>

        <div className="photo-wrapper hero-item" style={{ "--d": "600ms" }}>
          <img
            className="photo-me"
            src={photoMe}
            alt="Foto de Matheus Campos"
            width="600"
            height="800"
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </div>

      <a href="#about" className="scroll-indicator" aria-label="Rolar para About">
        <span />
      </a>
    </section>
  );
}

export default Main;
