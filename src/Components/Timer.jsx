//renders the timer
import React from "react";
import { ImBin } from "react-icons/im";
import { FaRegEdit } from "react-icons/fa";
import {renderElapsedString} from "../assets/HelperFunctions/helper"

function Timer({ title, project, elapsed }) {
  // const startStopBtn = elapsedIsRunning ? "Stop" : "Start";
  const elaspedString = renderElapsedString(elapsed);
  return (
    <div className="border p-3 border-light-subtle rounded mb-3">
      <div className="title-project text-start mb-1">
        <h3 className="fs-2">{title}</h3>
        <p>{project}</p>
      </div>
      <div className="elapsed text-center fs-3 fw-bold mb-1">{elaspedString}</div>
      <div className="buttons text-end mb-2">
        <ImBin role="button"/>
        <FaRegEdit className="ms-2" role="button"/>
      </div>
      <div className="start-stop-btn d-grid">
        <button className="btn btn-primary">start</button>
      </div>
    </div>
  );
}

export default Timer;
