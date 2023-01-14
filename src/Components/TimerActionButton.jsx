import React from "react";

function TimerActionButton({ timerIsRunning, onStopClick, onStartClick }) {
  return timerIsRunning ? (
    <div className="start-stop-btn d-grid">
      <button className="btn btn-danger" onClick={onStopClick}>
        Stop
      </button>
    </div>
  ) : (
    <div className="start-stop-btn d-grid">
      <button className="btn btn-success" onClick={onStartClick}>
        Start
      </button>
    </div>
  );
}

export default TimerActionButton;
