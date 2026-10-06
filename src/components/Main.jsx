import "./Main.css";
import EfeitoEscrita from "./EfeitoEscrita";
import videoFundo from "../assets/imgs/mylivewallpapers-com-Lake-Foggy-Mountains-4K.mp4";
import photoMe from "../assets/imgs/photo-me.jpeg";

function Main() {
  return (
    <div className="container-main">
      <video
        className="video-fundo"
        src={videoFundo}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="content-main">
        <div className="content-main-left">
          <div>
            <h4>Olá, eu sou</h4>
            <h2>Matheus Campos</h2>
          </div>

          <div className="efeito-escrita">
            <EfeitoEscrita />
          </div>
        </div>

        <img className="photo-me" src={photoMe} alt="Foto de Matheus Campos" />
      </div>
    </div>
  );
}

export default Main;
