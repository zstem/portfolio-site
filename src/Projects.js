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
          <p>This Todo List is a front end and design project made with <b>React</b>. The user is able to create, read, update and delete any todo that the user has in mind. Use the links below to checkout the app and the code.</p>
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
        <div className="row pic-background">
          <div className="col">
            <img className="pic-projects" src={project4} alt='intro picture' width="500px" height="auto"></img>
          </div>
          <div className="col">
          <h4>Notes App</h4>
          <p>This Notes app is a unique full stack project made with <b>Vue</b>, <b>Node JS</b>, <b>Next JS</b>, and <b>MongoDB</b>. The user is able to create, read, update, and delete any note that they wish. The user is able to import any text document and it will convert directly into the application with ease. Use the links below to checkout the app and the code.</p>
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
          <p>This Pong web app is a full stack project made with <b>React</b>, <b>Node JS</b>, <b>Express</b>, <b>MongoDB</b>, and <b>socket.io</b>. The user is able to play against a computer, or join a friend using a party link. The app uses a backend to save high scores, making the game extremely competitive amongst friends. Get ready to patch the wall up, because theres gonna be a fist sized hole in it. Use the links below to checkout the app and the code.</p>
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
