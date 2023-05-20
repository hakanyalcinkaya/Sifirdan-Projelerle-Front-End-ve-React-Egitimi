import { useEffect, useState } from "react"
import TaskListItem from "./TaskListItem"


export default function TaskList({ tasks, removeTask, editTask }) {
  const [priority, setPriority] = useState(false)
  const [filteredTasks, setFilteredTask] = useState(tasks)

  function handlePriorityFilter() {
    const newPriority = !priority
    newPriority ? setFilteredTask(tasks.filter(item => item.priority === newPriority)) : setFilteredTask(tasks)
    setPriority(newPriority)
  }

  /*
    useEffect(() => {// fonc calis..}, []) // ilk component yuklenince..
    useEffect(() => {// fonc calis..}, [eger array bos ise ilk component yuklenince anlamina gelir]) 
    useEffect(() => {// fonc calis..}, [item1, item2]) -> [item1, item2] -> bunlar degisince islem yap..
    // https://react.dev/learn/you-might-not-need-an-effect
  */

  // tasks bilgisi component'e ulasinca filter'a esitle..
  useEffect(() => {
    setFilteredTask(tasks)
  }, [tasks] )

  // https://react.dev/learn/you-might-not-need-an-effect
  // // priority bilgisi degisirse..
  // useEffect(() => {
  //   priority ? setFilteredTask(tasks.filter(item => item.priority === priority)) : setFilteredTask(tasks)
  // }, [priority] )

  if (tasks.length === 0) {
    return <></>
  }

  return (
    <>
      <div className="p-4 bg-light mb-5 border rounded">
        <h4 className="mb-3">Gorevler: 
          <button onClick={handlePriorityFilter}
          className={`btn btn-sm ${!priority ? "btn-info" : "btn-primary"} float-end`}>
            {!priority ? "Oncelikli Olanlari Goster" : "Hepsini Goster.."}
          </button>
        </h4>
        <ul className="list-group">
          {filteredTasks.map(
            (task) =>
              <TaskListItem key={task.uuid} task={task} editTask={editTask} removeTask={removeTask} />
          )}
        </ul>
      </div>
    </>
  )
}