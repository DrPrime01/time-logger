//for either adding new timer in ToggleableTimerForm or editing existing Timer in Timer
import React from 'react'

function TimerForm({title, project}) {
  const submitText = title ? "update" : "create";
  return (
    <div className='border p-3 border-light-subtle rounded mb-3'>
      <div className='title field'>
        <p><label for="title" className=''>Title</label></p>
        <p><input type="text" name="title" defaultValue={title}/></p>
      </div>
      <div className='project field'>
        <p><label for="project" className=''>Project</label></p>
        <p><input type="text" name="project" defaultValue={project}/></p>
      </div>
      <div className='buttons d-flex justify-content-between'>
        <span><button className='btn btn-primary'>{submitText}</button></span>
        <span><button className='btn btn-danger'>cancel</button></span>
      </div>
    </div>
  )
}

export default TimerForm
