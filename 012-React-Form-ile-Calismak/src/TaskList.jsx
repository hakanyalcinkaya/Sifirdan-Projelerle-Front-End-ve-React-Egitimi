export default function TaskList({tasks, removeTask}) {
  if (tasks.length === 0) {
    return <></>
  }
  return (
    <>
    <p className="lead">Gorevler:</p>
    <ul className="list-group my-3">
      {tasks.map(
        (item) => 
        <li className="list-group-item" key={item.uuid}>{item.task} 
          <span className="btn btn-sm btn-danger float-end" onClick={() => removeTask(item.uuid)}>Sil</span>
        </li>
        )}
    </ul>
    </>
  )
}