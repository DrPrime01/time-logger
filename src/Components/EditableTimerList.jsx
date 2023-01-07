//renders EditableTimer

import React from "react";
import EditableTimer from "./EditableTimer";
function TimersList() {
  return (
    <div>
      <EditableTimer
        title="Learn React"
        project="Web Domination"
        elapsed="8986300"
        runningSince={null}
        editFormOpen={false}
      />
      <EditableTimer
        title="Learn Vue"
        project="Web Mastery"
        elapsed="9868030"
        runningSince={null}
        editFormOpen={true}
      />
    </div>
  );
}

export default TimersList;
