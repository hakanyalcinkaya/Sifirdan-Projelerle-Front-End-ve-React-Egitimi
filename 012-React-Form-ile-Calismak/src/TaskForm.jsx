import { useRef } from "react";

export default function TaskForm() {
  const form = useRef()

  function handleFormSubmit(event) {
    event.preventDefault()
    console.log(event.target.elements)
    const items = Array.from(event.target.elements).filter(item => item.name)
    
    console.log(items[1].checked)
  }

  return (
    <>
      <form onSubmit={handleFormSubmit} ref={form}>
        <div className="row mb-3">
          <label htmlFor="task" className="col-sm-2 col-form-label">Task</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="task" name="task" />
          </div>
        </div>
        
        
        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="priority" name="priority" />
                <label className="form-check-label" htmlFor="priority">
                  Oncelikli
                </label>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Sign in</button>
      </form>
    </>
  )
}