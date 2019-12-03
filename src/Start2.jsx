import React from 'react';
import Clock from "./components/clock";

function Start2() {

  return(
    <header className="App-header">

      <p>
      Hello
      </p>
      <Clock now={'Now'} />
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>

    </header>
  )
}



export default Start2;
