import './App.css';
import Nav from './Nav.js';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import reactpic from './react.png';
import vuepic from './vue.png';
import jspic from './js.png';
import nodepic from './node.png';
import expresspic from './express.png';
import nextpic from './next.png';



function Collaborate() {

  const [frontEnd, handleFrontEnd] = useState("Pick a Front End");

  const [backEnd, handleBackEnd] = useState("Pick a Back End");

  const [frontPic, setFrontPic] = useState();
  const [backPic, setBackPic] = useState();

  const [frontCardTitle, setFrontCardTitle] = useState("Pick a Front End");
  const [backCardTitle, setBackCardTitle] = useState("Pick a Back End");

  const [statusText, setStatus] = useState("");

  const [count, setCount] = useState(0);

  useEffect(() => {
    checkStatus();
  },[]);

  

  function checkStatus() {
    if (document.getElementById('collab-email').value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) && document.getElementById('collab-message').value !== "") {
      document.getElementById('submit-btn').classList.remove("disabled");
    }
    else{
      setStatus("");
      document.getElementById('submit-btn').classList.add("disabled");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  function clearForms() {
    document.getElementById('collab-email').value = "";
    document.getElementById('collab-message').value = "";
    handleBackEnd("Pick a Back End");
    handleFrontEnd("Pick a Front End");
  }

  

  return (
    <div className="collaborate-page">
      <Nav />
      <div className='container'>
        <h1>Collaborate with me</h1>
        <div class="row">
          <div class="col">
          <form class="form-group" onMouseOver={() => checkStatus()}>
        <input type="email" class="form-control collab-email" aria-describedby="emailHelp" id="collab-email" placeholder="Enter Email"></input><span>(required)</span>
        <div class="dropdown">
            <button onChange={() => setFrontCardTitle({frontEnd})} class="btn btn-primary dropdown-toggle italic" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {frontEnd}
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" onFocus={() => setCount(count + 1)} onClick={() => {handleFrontEnd("React"); setFrontCardTitle("React"); setFrontPic(reactpic)}} href="#">React</a>
              <a class="dropdown-item" onClick={() => {handleFrontEnd("Vue"); setFrontCardTitle("Vue"); setFrontPic(vuepic)}} href="#">Vue</a>
              <a class="dropdown-item" onClick={() => {handleFrontEnd("Vanilla JS"); setFrontCardTitle("Vanilla JS"); setFrontPic(jspic)}} href="#">Vanilla JS</a>
            </div>
          </div>
          <div class="dropdown dropdown2">
            <button class="btn btn-primary dropdown-toggle italic" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {backEnd}
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" onClick={() => {handleBackEnd("Node JS"); setBackCardTitle("Node JS"); setBackPic(nodepic)}} href="#">Node JS</a>
              <a class="dropdown-item" onClick={() => {handleBackEnd("Next JS"); setBackCardTitle("Next JS"); setBackPic(nextpic)}} href="#">Next JS</a>
              <a class="dropdown-item" onClick={() => {handleBackEnd("Express JS"); setBackCardTitle("Express JS"); setBackPic(expresspic)}} href="#">Express JS</a>
            </div>
          </div>
          <textarea class="form-control collab-message" id="collab-message" placeholder="Enter Message"></textarea><span>(required)</span>
          <div>
            <button onClick={() => {setStatus("Email sent sucessfully with your inquiry"); checkStatus(); clearForms()}} id="submit-btn" class="btn btn-primary submit-btn italic">Submit</button>
            <h6 id="status-text">{statusText}</h6>
          </div>
          
        </form>
          </div>
          <div class="col col-front">
            
            <div class="card mx-auto">
              <img src={frontPic} class="backEndCardPhoto" alt='' onerror="this.onerror=null" width="230px" height="200px" ></img>
              <div class="card-body">
                <h5>{frontCardTitle} - Front End</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            
            {/* <img src={frontPic} alt='' onerror="this.onerror=null" width="230px" height="200px" ></img>
            <hr class="solid"></hr>
            <img src={backPic} alt='' onerror="this.onerror=null" width="230px" height="200px" ></img> */}
          </div>
          <div class="col">
            <div class="card">
              <img src={backPic} alt='' class="backEndCardPhoto" onerror="this.onerror=null" width="230px" height="200px" ></img>
              <div class="card-body">
                <h5 class="">{backCardTitle} - Back End</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            
            {/* <img src={frontPic} alt='' onerror="this.onerror=null" width="230px" height="200px" ></img>
            <hr class="solid"></hr>
            <img src={backPic} alt='' onerror="this.onerror=null" width="230px" height="200px" ></img> */}
          </div>
        </div>
        
      </div>
      <footer>
        <p class="copyright">Bob's Portfolio Page © 2022</p>
        <Link to="/"><p className="custom-link footer-text">Home</p></Link>
        <Link to="/projects"><p className="custom-link footer-text">Projects</p></Link>
        <Link to="/collaborate"><p className="custom-link footer-text">Collaborate</p></Link>
        <p className="footer-text"><a href="#nav">Back to Top</a></p>
      </footer>
    </div>
  );
}

export default Collaborate;
