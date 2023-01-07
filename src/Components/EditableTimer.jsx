//renders either the timer or the timer edit form
import React from "react";
import Timer from "./Timer";
import TimerForm from "./TimerForm";
function EditableTimer({
  editFormOpen,
  title,
  project,
  elapsed,
  runningSince,
}) {
  return (
    <div>
      {editFormOpen ? (
        <TimerForm title={title} project={project} />
      ) : (
        <Timer
          title={title}
          project={project}
          elapsed={elapsed}
          runningSince={runningSince}
        />
      )}
    </div>
  );
}

export default EditableTimer;
