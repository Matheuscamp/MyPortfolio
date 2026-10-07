import "./Stack.css";
function Stack() {
  return (
    <div className="container-stack">
      <div class="stack-content">
        <div className="texts-section">
          <h1>Stacks</h1>
          <p>Some of the tools I use day to day and somthings I study</p>
        </div>
        <div className="grid-section">
          <article className="section">
            <h3>FRONTEND</h3>
            <ul>
              <li>React.js</li>
              <li>Thymeleaf</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
            </ul>
          </article>
          <article className="section">
            <h3>BACKEND</h3>
            <ul>
              <li>Spring Boot</li>
              <li>MySQL</li>
            </ul>
          </article>
          <article className="section">
            <h3>CYBER SECURITY</h3>
            <ul>
              <li>Kali Linux</li>
              <li>Network</li>
              <li>Infrastructure</li>
            </ul>
          </article>
          <article className="section">
            <h3>TOOLS</h3>
            <ul>
              <li>GitHub</li>
              <li>Git</li>
              <li>Excel</li>
              <li>Power BI</li>
            </ul>
          </article>
        </div>
      </div>
    </div>
  );
}
export default Stack;
