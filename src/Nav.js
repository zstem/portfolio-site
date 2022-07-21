import './App.css';
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
        <Link to="/"><h1 className="custom-link" id="nav">Bob's Portfolio</h1></Link>
        <h5 class="subtext">Web Developer</h5>
        <Link class="navtext" to="/"><h4 className="custom-link">Home</h4></Link>
        <Link class="navtext" to="/projects"><h4 className="custom-link">Projects</h4></Link>
        <Link class="navtext" to="/collaborate"><h4 className="custom-link">Collaborate</h4></Link>
    </div>
  );
}

export default Nav;