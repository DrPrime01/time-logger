//renders both the EditableTimersList and the ToggleableTimerForm

import React from 'react'
import EditableTimerForm from './EditableTimerList'
import ToggleableTimerForm from './ToggleableTimerForm'

function TimersDashboard() {
  return (
    <div  className='d-flex flex-column mx-auto my-5 justify-content-center align-items-center'>
      <EditableTimerForm />
      <ToggleableTimerForm isOpen={true}/>
    </div>
  )
}

export default TimersDashboard
