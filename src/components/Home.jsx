import React from "react";
import StartButton from "./StartButton";
import StopButton from "./StopButton";
import InputTask from "./InputTask";
import "./Home.css";

function Home() {
  return (
    <div className="main-container">
      <div>
        <InputTask />
      </div>
      <StartButton />
      <StopButton />
    </div>
  );
}

export default Home;
