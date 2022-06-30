import './App.css';
import Nav from './Nav.js';
import React, { useState, useEffect } from 'react';

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

  const [statusText, setStatus] = useState("");

  const [count, setCount] = useState(0);

  useEffect(() => {
    checkStatus();
  },[]);

  function checkStatus() {
    console.log(document.getElementById('collab-email').value, document.getElementById('collab-message').value);
    if (document.getElementById('collab-email').value != "" && document.getElementById('collab-message').value != "") {
      document.getElementById('submit-btn').classList.remove("disabled");
    }
    else{
      setStatus("");
      document.getElementById('submit-btn').classList.add("disabled");
    }
  }

  

  

  return (
    <div className="Collaborate">
      <Nav />
      <div className='container'>
        <h1>Collaborate with me</h1>
        <div class="row">
          <div class="col">
          <form onMouseOver={() => checkStatus()}>
        <input type="text" id="collab-email" className="collab-email" placeholder="Email"></input><span>(required)</span>
        <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {frontEnd}
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" onFocus={() => setCount(count + 1)} onClick={() => {handleFrontEnd("React"); setFrontPic(reactpic)}} href="#">React</a>
              <a class="dropdown-item" onClick={() => {handleFrontEnd("Vue"); setFrontPic(vuepic)}} href="#">Vue</a>
              <a class="dropdown-item" onClick={() => {handleFrontEnd("Vanilla JS"); setFrontPic(jspic)}} href="#">Vanilla JS</a>
            </div>
          </div>
          <div class="dropdown dropdown2">
            <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {backEnd}
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" onClick={() => {handleBackEnd("Node JS"); setBackPic(nodepic)}} href="#">Node JS</a>
              <a class="dropdown-item" onClick={() => {handleBackEnd("Next JS"); setBackPic(nextpic)}} href="#">Next JS</a>
              <a class="dropdown-item" onClick={() => {handleBackEnd("Express JS"); setBackPic(expresspic)}} href="#">Express JS</a>
            </div>
          </div>
          <input type="text" className="collab-message" id="collab-message" placeholder="Message"></input><span>(required)</span>
          <div>
            <button type="submit" onClick={() => {setStatus("Email sent sucessfully with your inquiry"); checkStatus()}} id="submit-btn" class="btn btn-primary submit-btn">Submit</button>
            <h6 id="status-text">{statusText}</h6>
          </div>
          
        </form>
          </div>
          <div class="col">
            <h4>Your Custom Stack</h4>
            <img src={frontPic} alt='Pick a Front End' width="230px" height="200px" ></img>
            <p>------------------------------------</p>
            <img src={backPic} alt='Pick your Back End' width="230px" height="200px" ></img>
          </div>
        </div>
        
      </div>
      <footer>
        <p class="copyright">Bob's Portfolio Page © 2022 <a href="#nav" className="top">Back to Top</a></p>
      </footer>
    </div>
  );
}

export default Collaborate;
