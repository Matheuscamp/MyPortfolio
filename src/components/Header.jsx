import RelogioLocal from "./RelogioLocal";
import "./Header.css";
function Header() {
  return (
    <header>
        <div className="container-header">
            <RelogioLocal/>
        </div>
        <div className="container-header">
            <span className="options-header">About</span>
            <span className="options-header">Projects</span>
            <span className="options-header">Stacks</span>
            <span className="options-header">Experiences</span>
            <span className="options-header">Contacts</span>
        </div>

      
    </header>
  );
}

export default Header;