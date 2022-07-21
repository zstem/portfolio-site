import './App.css';
import Nav from './Nav.js';
import intropic from './intro.png';




function Projects() {
  return (
    <div className="Projects">
      <Nav />
      <div className='container'>
        <h1>Projects I've worked on</h1>
        <div className="row">
          <div className="col">
            <img className="pic" src={intropic} alt='intro picture' width="500px" height="auto"></img>
          </div>
          <div className="col">
          <p>Hello, welcome to my portfolio website! I am an Alumni from the University of Ottawa currently learning all there is to know about web development </p>
          </div>
        </div>
        <div className="row"> 
          <div className="col">
            <img className="pic-featured-projects" src={intropic} alt='intro picture' width="500px" height="auto"></img>
          </div>
          <div className="col">
          <p>Hello, welcome to my portfolio website! I am an Alumni from the University of Ottawa currently learning all there is to know about web development </p>
          </div>
        </div>
        <div className="row"> 
          <div className="col">
            <img className="pic-featured-projects" src={intropic} alt='intro picture' width="500px" height="auto"></img>
          </div>
          <div className="col">
          <p>Hello, welcome to my portfolio website! I am an Alumni from the University of Ottawa currently learning all there is to know about web development </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img className="pic" src={intropic} alt='intro picture' width="500px" height="auto"></img>
          </div>
          <div className="col">
          <p>Hello, welcome to my portfolio website! I am an Alumni from the University of Ottawa currently learning all there is to know about web development </p>
          </div>
        </div>
        <div className="row"> 
          <div className="col">
            <img className="pic-featured-projects" src={intropic} alt='intro picture' width="500px" height="auto"></img>
          </div>
          <div className="col">
          <p>Hello, welcome to my portfolio website! I am an Alumni from the University of Ottawa currently learning all there is to know about web development </p>
          </div>
        </div>
        <div className="row"> 
          <div className="col">
            <img className="pic-featured-projects" src={intropic} alt='intro picture' width="500px" height="auto"></img>
          </div>
          <div className="col">
          <p>Hello, welcome to my portfolio website! I am an Alumni from the University of Ottawa currently learning all there is to know about web development </p>
          </div>
        </div>
      </div>
      
      
      <footer>
        <p class="copyright">Bob's Portfolio Page © 2022 <a href="#nav" className="top">Back to Top</a></p>
      </footer>
    </div>
  );
}

export default Projects;
