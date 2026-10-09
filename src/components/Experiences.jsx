import "./Experiences.css";
function Experiences() {
  return (
    <div className="Experiences-container">
      <h1>Experiences</h1>
      <div className="flex-container">
        <div className="experience-card">
          <p> 2026 Agu. - at moment</p>
          <div>
            <h3>Invest Minas</h3>
            <p>TI Support</p>
          </div>
        </div>
        <div className="experience-card">
          <p> 2025 Fev. - 2025 Dec</p>
          <div>
            <h3>Brazilian Army</h3>
            <p>Student</p>
          </div>
        </div>
        <div className="experience-card">
          <p> 2024 May. - 2025 Fev</p>
          <div>
            <h3>
              Sem Rumo - Projetos Audiovisuais
            </h3>
            <p>Web Developer (Low-code)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Experiences;
