import './App.css';
import intropic from './intro.png';
import reactpic from './react.png';
import htmlpic from './html.png';
import csspic from './css.png';
import vuepic from './vue.png';
import { Link } from 'react-router-dom';


function Landing() {
  
  return (
    <div className="container">
      <span className="intro">
        <div className="row">
          <div className="col">
            <h2>A brief introduction</h2>
            <p>Hello, welcome to my portfolio website! I am an Alumni from the University of Ottawa currently learning all there is to know about web development </p>
          </div>
          <div className="col">
            <img className="pic" src={intropic} alt='intro picture' width="500px" height="auto"></img>
          </div>
        </div>
        <div className="row">
          <h2 className="header-text">Tools and Technologies</h2>
          <span className="techpics-row">
            
            <a href="https://reactjs.org/docs/getting-started.html" target="_blank"><img src={reactpic} alt='intro picture' width="230px" height="200px" ></img></a>
            <a href="https://www.w3schools.com/TAgs/default.asp" target="_blank"><img src={htmlpic} alt='intro picture' width="200px" height="200px" className="techpics"></img></a>
            <a href="https://www.w3schools.com/cssref/" target="_blank"><img src={csspic} alt='intro picture' width="auto" height="200px" className="techpics"></img></a>
            <a href="https://vuejs.org/guide/introduction.html" target="_blank" data-toggle="tooltip" data-placement="right" title="Tooltip on right"><img src={vuepic} alt='intro picture' width="auto" height="200px" className="techpics"></img></a>
          </span>
        </div>
        <div className="row">
          <span className="header-duo">
            <h2>Featured Projects</h2>
            <Link to="/projects"><h6 class="subtext">View All</h6></Link>
          </span>
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
      </span>
    </div>
    
  );
}



export default Landing;