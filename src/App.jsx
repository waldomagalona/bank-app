import "./App.scss";
import React from "react";
import {useEffect, useState} from "react";

import { Login, Register } from "./components/login/index";

const App = (props) => {
  const [isLogginActive] = useState(false);
  const current = isLogginActive ? "Register" : "Login";
  const currentActive = isLogginActive ? "login" : "register";
  const componentDidMount = () => {
    RightSide.rightSide.classList.add("right");
  }

  const changeState = () => {
    const { isLogginActive } = useState;
    if (isLogginActive) {
      RightSide.rightSide.classList.remove("right");
      RightSide.rightSide.classList.add("left");
    } 
    else {
      RightSide.rightSide.classList.remove("left");
      RightSide.rightSide.classList.add("right");
    }
    isLogginActive.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));

  }
  return (
    <div className="App">
      <div className="login">
        <div className="container" ref={ref => (RightSide.container = ref)}>
          {isLogginActive && (
            <Login containerRef={ref => (current = ref)} />
          )}
          {!isLogginActive && (
            <Register containerRef={ref => (current = ref)} />
          )}
        </div>
        <RightSide
          current={current}
          currentActive={currentActive}
          containerRef={ref => (RightSide.rightSide = ref)}
          onClick={useState.changeState}
        />
      </div>
    </div>
  );
}
  const RightSide = (props) => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
}

export default App;
