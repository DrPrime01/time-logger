//renders EditableTimer

import React from "react";
import EditableTimer from "./EditableTimer";
function EditableTimersList({ editableTimerData }) {
  
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
          />
        );
      })}
    </div>
  );
}

export default EditableTimersList;
