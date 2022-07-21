import './App.css';
import intropic from './intro.png';
import reactpic from './react.png';
import htmlpic from './html.png';
import csspic from './css.png';
import vuepic from './vue.png';
import jspic from './js.png';
import nodepic from './node.png';
import expresspic from './express.png';
import nextpic from './next.png';
import project1 from './project1.png';
import project2 from './project2.png';
import project3 from './project3.png';
import webpic from './website.svg';
import githubpic from './github.svg';
import { Link } from 'react-router-dom';


function Landing() {
  
  function scrolltoTop() {
    window.scrollTo(0, 0);
  }

  function fakeLink(linkString) {
    alert("Pretend this opened a new tab for the " + linkString)
  }

  return (
    <div className="container">
      <span className="intro">
        <div className="row">
          <div className="col">
            <h2>A brief introduction</h2>
            <p>Hello, welcome to my portfolio website! I am Alumni from the University of Ottawa where I studied Computer Science. I am currently learning all there is to know about web development. I pride myself on my attention to detail when it comes to user experiences and design. <br></br> <br></br>You can learn more about what I do and what projects I've worked on by exploring the site!</p>
          </div>
          <div className="col">
            <img className="pic" src={intropic} alt='picture of developer' width="500px" height="auto"></img>
          </div>
        </div>
        <div className="row">
          <h2 className="header-text">Tools and Technologies</h2>
          <div id="carouselExampleIndicators" class="carousel slide" data-bs-xride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="d-flex justify-content-center">
                <a href="https://www.w3schools.com/TAgs/default.asp" target="_blank"><img src={htmlpic} alt='intro picture' width="200px" height="200px"></img></a>
                <a href="https://www.w3schools.com/cssref/" target="_blank"><img src={csspic} alt='intro picture' width="auto" height="200px" className="techpics"></img></a> 
                <a href="https://www.w3schools.com/cssref/" target="_blank"><img src={jspic} alt='intro picture' width="auto" height="200px" className="techpics"></img></a> 
                </div>
              </div>
              <div class="carousel-item">
                <div class="d-flex justify-content-center">
                  <a href="https://reactjs.org/docs/getting-started.html" target="_blank"><img src={reactpic} width="230px" height="200px" ></img></a>
                  <a href="https://vuejs.org/guide/introduction.html" target="_blank" data-toggle="tooltip" data-placement="right" title="Tooltip on right"><img src={vuepic} alt='intro picture' width="auto" height="200px" className="techpics"></img></a>
                </div>
              </div>
              <div class="carousel-item">
                <div class="d-flex justify-content-center">
                  <span class="tbd d-flex justify-content-center align-items-center">
                    <a href="https://www.w3schools.com/TAgs/default.asp" target="_blank"><img src={expresspic} width="230px" height="200px"></img></a>
                    <a href="https://www.w3schools.com/cssref/" target="_blank"><img src={nextpic} width="230" height="200px" className="techpics"></img></a> 
                    <a href="https://www.w3schools.com/cssref/" target="_blank"><img src={nodepic} width="230" height="200px" className="techpics"></img></a> 
                  </span>
                </div>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only arrow-left">{"<"}</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only arrow-right">{">"}</span>
            </a>
          </div>
        </div>
        <div className="row">
          <span className="header-duo">
            <h2>Featured Projects</h2>
            <Link onClick={() => scrolltoTop()} to="/projects"><h6 class="subtext">View All</h6></Link>
          </span>
          <div className="row pic-background">
            <div className="col">
              <img className="pic-projects" src={project1} alt='intro picture' width="500px" height="auto"></img>
            </div>
            <div className="col">
            <h4>Todo List</h4>
            <p>This Todo List is a front end and design project made with <b>React</b>. The user is able to create, read, update and delete any todo that the user has in mind. Use the links below to checkout the app and the code.</p>
            <Link to="/" onClick={() => {scrolltoTop(); fakeLink("Todo List Application")}}><img src={webpic} alt='intro picture' width="30px" height="30px"></img></Link>
            <Link to="/" className="ml-5" onClick={() => {scrolltoTop(); fakeLink("Todo List GitHub")}}><img src={githubpic} alt='intro picture' width="30px" height="30px"></img></Link>
            </div>
          </div>
        </div>
        <div className="row pic-background"> 
          <div className="col">
            <img className="pic-projects" src={project2} alt='intro picture' width="500px" height="auto"></img>
          </div>
          <div className="col">
          <h4>Twitter Clone</h4>
          <p>This Twitter Clone is a full stack project made with <b>Vue</b>, <b>Node JS</b>, <b>Express JS</b>, and <b>MongoDB</b>. The user is able to create posts, read posts, update and delete any post that they wish. Use the links below to checkout the app and the code.</p>
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
          <p>This Real-time Messaging app is a full stack project made with <b>React</b>, <b>Node JS</b>, <b>Express JS</b>, <b>Supabase</b>, and <b>socket.io</b>. The user is able to create messages to one or more users in real-time, read, and delete messages. Use the links below to checkout the app and the code.</p>
          <Link to="/" onClick={() => {scrolltoTop(); fakeLink("Real-Time Messaging App")}}><img src={webpic} alt='intro picture' width="30px" height="30px"></img></Link>
          <Link to="/" className="ml-5" onClick={() => {scrolltoTop(); fakeLink("Real-Time Messaging App GitHub")}}><img src={githubpic} alt='intro picture' width="30px" height="30px"></img></Link>
          </div>
        </div>
      </span>
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



export default Landing;