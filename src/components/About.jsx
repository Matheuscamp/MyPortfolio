import ImagensFlutuantes from "./ImagensFlutuantes";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="left-container">
        <h1 className="likes-title">Somethings I like too</h1>

        <ImagensFlutuantes />
      </div>

      <div className="text-container">
        <h1>About</h1>

        <p className="text">
          I'm a Software Engineering student and intern at PUC Minas, building a
          solid foundation with React, JavaScript and MySQL. My focus is
          Information Security: pentesting, vulnerability analysis and
          understanding how systems work under the hood, from networking and
          Linux to code. I care about the details that matter: clean code,
          continuous learning and software people can trust.
        </p>
      </div>
    </div>
  );
}

export default About;
