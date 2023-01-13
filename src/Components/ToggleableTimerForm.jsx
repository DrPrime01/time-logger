//renders either the + icon or the add new timer form

import React, {useState} from "react";
import TimerForm from "./TimerForm";
import { VscDiffAdded } from "react-icons/vsc";

function ToggleableTimerForm({handleFormSubmit}) {
  const [isFormOpen, setIsFormOpen] = useState(false)
  function handleFormOpen() {
    setIsFormOpen(true);
  }
  function handleFormClose() {
    setIsFormOpen(false);
  }
  function handleSubmit(timer) {
    handleFormSubmit(timer);
    setIsFormOpen(false);
  }

  return (
    <div>
      {isFormOpen ? (
        <TimerForm handleFormClose={handleFormClose} handleFormSubmit={handleSubmit}/>
      ) : (
        <div className="addBtn">
          <button onClick={handleFormOpen}>
            <VscDiffAdded />
          </button>
        </div>
      )}
    </div>
  );
}

export default ToggleableTimerForm;
