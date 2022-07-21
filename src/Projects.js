import './App.css';
import Nav from './Nav.js';
import intropic from './intro.png';
import project1 from './project1.png';
import project2 from './project2.png';
import project3 from './project3.png';
import project4 from './project4.png';
import project5 from './project5.png';
import webpic from './website.svg';
import githubpic from './github.svg';
import { Link } from "react-router-dom";




function Projects() {

  function scrolltoTop() {
    window.scrollTo(0, 0);
  }

  function fakeLink(linkString) {
    alert("Pretend this opened a new tab for the " + linkString)
  }


  return (
    <div className="Projects">
      <Nav />
      <div className='container'>
        <h1 class="title">Projects I've worked on</h1>
        <div className="row pic-background">
          <div className="col">
            <img className="pic-projects" src={project1} alt='intro picture' width="500px" height="auto"></img>
          </div>
          <div className="col">
          <h4>Todo List</h4>
          <p>Hello, welcome to my portfolio website! I am an Alumni from the University of Ottawa currently learning all there is to know about web development </p>
          <Link to="/" onClick={() => {scrolltoTop(); fakeLink("Todo List Application")}}><img src={webpic} alt='intro picture' width="30px" height="30px"></img></Link>
          <Link to="/" className="ml-5" onClick={() => {scrolltoTop(); fakeLink("Todo List GitHub")}}><img src={githubpic} alt='intro picture' width="30px" height="30px"></img></Link>
          </div>
        </div>
        <div className="row pic-background"> 
          <div className="col">
            <img className="pic-projects" src={project2} alt='intro picture' width="500px" height="auto"></img>
          </div>
          <div className="col">
          <h4>Twitter Clone</h4>
          <p>Hello, welcome to my portfolio website! I am an Alumni from the University of Ottawa currently learning all there is to know about web development </p>
          <Link to="/" onClick={() => {scrolltoTop(); fakeLink("Twitter Clone App")}}><img src={webpic} alt='intro picture' width="30px" height="30px"></img></Link>
          <Link to="/" className="ml-5" onClick={() => {scrolltoTop(); fakeLink("Twitter Clone GitHub")}}><img src={githubpic} alt='intro picture' width="30px" height="30px"></img></Link>
          </div>
        </div>
        <div className="row pic-background"> 
          <div className="col">
            <img className="pic-projects" src={project3} alt='intro picture' width="500px" height="auto"></img>
          </div>
          <div className="col">
          <h4>Real-Time Messaging App</h4>
          <p>Hello, welcome to my portfolio website! I am an Alumni from the University of Ottawa currently learning all there is to know about web development </p>
          <Link to="/" onClick={() => {scrolltoTop(); fakeLink("Real-Time Messaging App")}}><img src={webpic} alt='intro picture' width="30px" height="30px"></img></Link>
          <Link to="/" className="ml-5" onClick={() => {scrolltoTop(); fakeLink("Real-Time Messaging App GitHub")}}><img src={githubpic} alt='intro picture' width="30px" height="30px"></img></Link>
          </div>
        </div>
        <div className="row pic-background">
          <div className="col">
            <img className="pic-projects" src={project4} alt='intro picture' width="500px" height="auto"></img>
          </div>
          <div className="col">
          <h4>Notes App</h4>
          <p>Hello, welcome to my portfolio website! I am an Alumni from the University of Ottawa currently learning all there is to know about web development </p>
          <Link to="/" onClick={() => {scrolltoTop(); fakeLink("Notes App")}}><img src={webpic} alt='intro picture' width="30px" height="30px"></img></Link>
          <Link to="/" className="ml-5" onClick={() => {scrolltoTop(); fakeLink("Notes App GitHub")}}><img src={githubpic} alt='intro picture' width="30px" height="30px"></img></Link>
          </div>
        </div>
        <div className="row pic-background"> 
          <div className="col">
            <img className="pic-projects" src={project5} alt='intro picture' width="500px" height="auto"></img>
          </div>
          <div className="col">
          <h4>Pong</h4>
          <p>Hello, welcome to my portfolio website! I am an Alumni from the University of Ottawa currently learning all there is to know about web development </p>
          <Link to="/" onClick={() => {scrolltoTop(); fakeLink("Pong Web App")}}><img src={webpic} alt='intro picture' width="30px" height="30px"></img></Link>
          <Link to="/" className="ml-5" onClick={() => {scrolltoTop(); fakeLink("Pong App GitHub")}}><img src={githubpic} alt='intro picture' width="30px" height="30px"></img></Link></div>
        </div>
      </div>
      <footer>
        <p class="copyright">Bob's Portfolio Page © 2022</p>
        <Link onClick={() => scrolltoTop()} to="/"><p className="custom-link footer-text">Home</p></Link>
        <Link onClick={() => scrolltoTop()} to="/projects"><p className="custom-link footer-text">Projects</p></Link>
        <Link onClick={() => scrolltoTop()} to="/collaborate"><p className="custom-link footer-text">Collaborate</p></Link>
        <p className="footer-text"><a href="#nav">Back to Top</a></p>
      </footer>
    </div>
  );
}

export default Projects;
