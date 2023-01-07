//renders either the + icon or the add new timer form

import React from "react";
import TimerForm from "./TimerForm";
import { VscDiffAdded } from "react-icons/vsc";

function ToggleableTimerForm({ isOpen }) {
  return (
    <div>
      {isOpen ? (
        <TimerForm />
      ) : (
        <div className="addBtn">
          <button>
            <VscDiffAdded />
          </button>
        </div>
      )}
    </div>
  );
}

export default ToggleableTimerForm;
