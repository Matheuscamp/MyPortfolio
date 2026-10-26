import ImagensFlutuantes from "./ImagensFlutuantes";
import "./About.css";

function About() {
  return (
    <section id="about" className="section">
      <div className="container about-container">
        <div className="text-container" data-reveal="left">
          <h1 className="section-title">About</h1>

          <p className="text">
            I'm an intern at Invest Minas and Software Engineering student at PUC
            Minas, building a solid foundation with React, JavaScript and MySQL.
            My focus is Information Security: pentesting, vulnerability analysis
            and understanding how systems work under the hood, from networking
            and Linux to code. I care about the details that matter: clean code,
            continuous learning and software people can trust.
          </p>
        </div>
        <div className="left-container" data-reveal="right">
          <h2 className="likes-title">Some things I like</h2>

          <ImagensFlutuantes />
        </div>
      </div>
    </section>
  );
}

export default About;
