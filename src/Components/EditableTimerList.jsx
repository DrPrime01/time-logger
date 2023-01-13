//renders EditableTimer

import React from "react";
import EditableTimer from "./EditableTimer";
function EditableTimersList({ editableTimerData, handleFormSubmit }) {
  
  return (
    <div>
      {editableTimerData.map((editableTimerDatum) => {
        return (
          <EditableTimer
            key={editableTimerDatum.id}
            id={editableTimerDatum.id}
            title={editableTimerDatum.title}
            project={editableTimerDatum.project}
            elapsed={editableTimerDatum.elapsed}
            runningSince={editableTimerDatum.runningSince}
            handleFormSubmit={handleFormSubmit}
          />
        );
      })}
    </div>
  );
}

export default EditableTimersList;
