//renders both the EditableTimersList and the ToggleableTimerForm

import React, { useState } from "react";
import EditableTimerList from "./EditableTimerList";
import ToggleableTimerForm from "./ToggleableTimerForm";
import { v4 as uuidv4 } from "uuid";
import { newTimer } from "../assets/HelperFunctions/helper";

function TimersDashboard() {
  const [editableTimerData, setEditableTimerData] = useState([
    {
      title: "Learn React",
      id: uuidv4(),
      project: "Web Domination",
      elapsed: "8986300",
      runningSince: null,
    },
    {
      title: "Learn Vue",
      id: uuidv4(),
      project: "Web Domination",
      elapsed: "5464772",
      runningSince: null,
    },
  ]);

  // function for handling new timer "Single Responsibility Principle"
  function handleCreateFormSubmit(timer) {
    createTimer(timer);
  }

  // function for creating new Timer "Single Responsibility Principle"
  function createTimer(timer) {
    const t = newTimer(timer);
    setEditableTimerData(editableTimerData.concat(t));
  }
  // function to call the updateTime function
  function handleEditFormSubmit(attrs) {
    updateTimer(attrs);
  }
  // function to update the timer
  function updateTimer(attrs) {
    console.log(attrs);
    setEditableTimerData(
      editableTimerData.map((editableTimerDatum) => {
        if (editableTimerDatum.id === attrs.id) {
          return Object.assign({}, editableTimerDatum, {
            title: attrs.title,
            project: attrs.project,
          });
        } else {
          return editableTimerDatum;
        }
      })
    );
  }
  //function to deleteForm
  function deleteForm(id) {
    setEditableTimerData(
      editableTimerData.filter((editableTimerDatum) => {
        return editableTimerDatum.id !== id;
      })
    );
  }
  //function to handle form delete
  function handleDeleteForm(id) {
    deleteForm(id);
  }

  //function to handle the startTimer functionn
  function handleStartClick(id) {
    startClick(id);
  }
//function to start the timer
  function startClick(id) {
    const now = Date.now();
    setEditableTimerData(
      editableTimerData.map(editableTimerDatum => {
        if (editableTimerDatum.id === id) {
          return Object.assign({}, editableTimerDatum, {
            runningSince: now,
          })
        } else {
          return editableTimerDatum;
        }
      })
    )
  }

  //function to handle the stopTimer function
  function handleStopClick(id) {
    stopClick(id);
  }
//function to stop the timer
  function stopClick(id) {
    const now = Date.now();
    setEditableTimerData(
      editableTimerData.map(editableTimerDatum => {
        if (editableTimerDatum.id === id) {
          const lastElapsed = now - editableTimerDatum.runningSince;
          return Object.assign({}, editableTimerDatum, {
            elapsed: lastElapsed + editableTimerDatum.elapsed,
            runningSince: null
          })
        } else {
          return editableTimerDatum;
        }
      })
    )
  }
  return (
    <div className="d-flex flex-column mx-auto my-5 justify-content-center align-items-center">
      <EditableTimerList
        editableTimerData={editableTimerData}
        handleFormSubmit={handleEditFormSubmit}
        onDeleteForm={handleDeleteForm}
        onStartClick={handleStartClick}
        onStopClick={handleStopClick}
      />
      <ToggleableTimerForm handleFormSubmit={handleCreateFormSubmit} />
    </div>
  );
}

export default TimersDashboard;
