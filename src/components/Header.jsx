import RelogioLocal from "./RelogioLocal";
import "./Header.css";
function Header() {
  return (
    <header>
        <div className="container-header">
            <p>Belo Horizonte, MG</p>
            <RelogioLocal/>
        </div>
        <div className="container-header">
            <span className="options-header">About</span>
            <span className="options-header">Work</span>
            <span className="options-header">Experience</span>
            <span className="options-header">Contact</span>
        </div>

      
    </header>
  );
}

export default Header;