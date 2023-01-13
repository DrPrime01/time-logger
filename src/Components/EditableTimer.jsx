//renders either the timer or the timer edit form
import React, { useState } from "react";
import Timer from "./Timer";
import TimerForm from "./TimerForm";
function EditableTimer({ title, project, elapsed, runningSince, id, handleFormSubmit }) {
  const [editFormOpen, setEditFormOpen] = useState(false);
  function editForm() {
    setEditFormOpen(true);
  }

  function closeEditForm() {
    setEditFormOpen(false);
  }

  function editFormSubmit(timer) {
    handleFormSubmit(timer);
    setEditFormOpen(false);
  }
  return (
    <div>
      {editFormOpen ? (
        <TimerForm title={title} project={project} id={id} handleCloseEditForm={closeEditForm} handleFormSubmit={editFormSubmit}/>
      ) : (
        <Timer
          id={id}
          title={title}
          project={project}
          elapsed={elapsed}
          runningSince={runningSince}
          editFormTrue={editForm}
        />
      )}
    </div>
  );
}

export default EditableTimer;
