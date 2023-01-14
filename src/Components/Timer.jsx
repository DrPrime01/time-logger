//renders the timer
import React, { useEffect, useState } from "react";
import TimerActionButton from "./TimerActionButton";
import { FaRegEdit } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import { renderElapsedString } from "../assets/HelperFunctions/helper";

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

      <ElapsedTimer elapsed={elapsed} runningSince={runningSince} />

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

const ElapsedTimer = ({ elapsed, runningSince }) => {
  const [_, forceUpdate] = useState(0);

  useEffect(() => {
    const forceUpdateInterval = setInterval(
      () => forceUpdate(prev => (prev == 2 ? 0 : prev + 1)),
      50
    );
    return () => clearInterval(forceUpdateInterval);
  }, []);

  const elaspedString = renderElapsedString(elapsed, runningSince);
  // console.log("ran", elaspedString);

  return (
    <div className="elapsed text-center fs-3 fw-bold mb-1">{elaspedString}</div>
  );
};

export default Timer;