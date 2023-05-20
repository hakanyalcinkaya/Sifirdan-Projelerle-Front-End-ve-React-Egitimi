import TaskListItemIcon from "./TaskListItemIcon"

function TaskListItem({ task }) {
  return (
    <li className="list-group-item">
      {
        task.priority &&
        <span className="badge text-bg-secondary me-2">
          <TaskListItemIcon />
        </span>}
      {task.task}
      <div className="btn-group float-end" role="group">
        <button
          className="btn btn-sm btn-info"
          onClick={() => editTask(task.uuid)}
        >
          Duzenle
        </button>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => removeTask(task.uuid)}
        >
          Sil
        </button>
      </div>
    </li>
  )
}

export default TaskListItem