import { useState } from "react"
import {v4 as uuidv4} from 'uuid';
import TaskList from "./TaskList"

export default function TaskForm() {
  const emptyForm = {task: "", priority: false, }
  const [formData, setFormData ] = useState(emptyForm)
  const [tasks, setTasks] = useState([]) 

  function removeTask(uuid) {
    console.log(uuid)
    setTasks(prev => prev.filter(item => item.uuid !== uuid))
  }

  function handleInputChange(event) {
    setFormData(prev => {
      return {
        ...prev,
        [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
      }
    })
    
  }

  function handleFormSubmit(event) {
    event.preventDefault()
    console.log(formData)
    if (formData.task.length > 3) {
      formData.uuid = uuidv4()
      setTasks(
        prev => 
        [formData, ...prev]
      )
      setFormData(emptyForm)
      event.target.reset()
    }
  }

  return (
    <>
      <TaskList tasks={tasks} removeTask={removeTask} />
      <form onSubmit={handleFormSubmit}>
        <div className="row mb-3">
          <label htmlFor="task" className="col-sm-2 col-form-label">Task</label>
          <div className="col-sm-10">
            <input 
              type="text" className="form-control" 
              id="task" name="task" 
              onChange={handleInputChange} 
            />
          </div>
        </div>
        
        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
              <input 
                className="form-check-input" 
                type="checkbox" id="priority" name="priority" 
                onChange={handleInputChange} 
              />
                <label className="form-check-label" htmlFor="priority">
                  Oncelikli
                </label>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Kaydet</button>
      </form>
    </>
  )
}