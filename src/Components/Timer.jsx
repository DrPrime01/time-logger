//renders the timer
import React, { useEffect, useState } from "react";
import { ImBin } from "react-icons/im";
import { FaRegEdit } from "react-icons/fa";
import { renderElapsedString } from "../assets/HelperFunctions/helper";
import TimerActionButton from "./TimerActionButton";

function Timer({
  title,
  project,
  elapsed,
  editFormTrue,
  onDeleteForm,
  id,
  runningSince,
  onStartClick,
  onStopClick
}) {
  // const startStopBtn = elapsedIsRunning ? "Stop" : "Start";
  const [_, forceUpdate] = useState();
  useEffect(() => {
    const forceUpdateInterval = setInterval(() => forceUpdate(), 50);
    return () => clearInterval(forceUpdateInterval);
  }, []);
  const elaspedString = renderElapsedString(elapsed, runningSince);
  //function to open the form for editing
  function handleOpenEditForm() {
    editFormTrue();
  }

  function handleDeleteForm() {
    onDeleteForm(id);
  }

  function handleStartClick() {
    onStartClick(id);
  }

  function handleStopClick() {
    onStopClick(id);
  }
  return (
    <div className="border p-3 border-light-subtle rounded mb-3">
      <div className="title-project text-start mb-1">
        <h3 className="fs-2">{title}</h3>
        <p>{project}</p>
      </div>
      <div className="elapsed text-center fs-3 fw-bold mb-1">
        {elaspedString}
      </div>
      <div className="buttons text-end mb-2">
        <span onClick={handleDeleteForm}>
          <ImBin role="button" />
        </span>
        <span className="ms-2" onClick={handleOpenEditForm}>
          <FaRegEdit role="button" />
        </span>
      </div>
      <TimerActionButton
        onStartClick={handleStartClick}
        onStopClick={handleStopClick}
        timerIsRunning={!!runningSince}
      />
    </div>
  );
}

export default Timer;
