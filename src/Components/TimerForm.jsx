//for either adding new timer in ToggleableTimerForm or editing existing Timer in Timer
import React, {useState} from 'react'

function TimerForm({title, project, handleFormClose, handleFormSubmit, id, handleCloseEditForm}) {
  const submitText = id ? "update" : "create";
  //set default form title as in editableTimer or empty value as in ToggleableTimerForm
  const [formTitle, setFormTitle] = useState(title || "");
  //set default form project as in editableTimer or empty value as in ToggleableTimerForm
  const [formProject, setFormProject] = useState(project || "");
  //change the title value as the user types in a new value
  function handleTitleChange(e) {
    setFormTitle(e.target.value);
  }
  //change the project value as the user types in a new value
  function handleProjectChange(e) {
    setFormProject(e.target.value);
  }
  //close the form when user clicks "cancel" button in the toggleabletimerform
  function closeForm() {
    handleFormClose();
  }
  function closeEditForm() {
    handleCloseEditForm();
  }
  //submit the form
  function submitForm() {
    handleFormSubmit({
      id,
      title: formTitle,
      project: formProject,
    });
  }
  //submit edit form

  return (
    <div className='border p-3 border-light-subtle rounded mb-3'>
      <div className='title field'>
        <p><label for="title" className=''>Title</label></p>
        <p><input type="text" name="title" value={formTitle} onChange={handleTitleChange}/></p>
      </div>
      <div className='project field'>
        <p><label for="project" className=''>Project</label></p>
        <p><input type="text" name="project" value={formProject} onChange={handleProjectChange}/></p>
      </div>
      <div className='buttons d-flex justify-content-between'>
        <span><button className='btn btn-primary' onClick={submitForm}>{submitText}</button></span>
        <span><button className='btn btn-danger' onClick={id ? closeEditForm : closeForm}>cancel</button></span>
      </div>
    </div>
  )
}

export default TimerForm
