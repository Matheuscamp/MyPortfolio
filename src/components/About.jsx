import ImagensFlutuantes from "./ImagensFlutuantes";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      

      <div className="text-container">
        <h1>About</h1>

        <p className="text">
          I'm an intern at Investi Minas and Software Engineering student at PUC Minas, building a
          solid foundation with React, JavaScript and MySQL. My focus is
          Information Security: pentesting, vulnerability analysis and
          understanding how systems work under the hood, from networking and
          Linux to code. I care about the details that matter: clean code,
          continuous learning and software people can trust.
        </p>
      </div>
      <div className="left-container">
        <h1 className="likes-title">Somethings I like</h1>

        <ImagensFlutuantes />
      </div>
    </div>
  );
}

export default About;
