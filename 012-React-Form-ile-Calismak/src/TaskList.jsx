export default function TaskList({ tasks, removeTask, editTask }) {
  if (tasks.length === 0) {
    return <></>
  }
  return (
    <>
      <div className="p-4 bg-light mb-5 border rounded">
        <h4 className="">Gorevler:</h4>
        <ul className="list-group">
          {tasks.map(
            (item) =>
              <li className="list-group-item" key={item.uuid}>
                {item.task}
                <div className="btn-group float-end" role="group">
                  <button 
                    className="btn btn-sm btn-info"
                    onClick={() => editTask(item.uuid)}
                  >
                    Duzenle
                  </button>
                  <button 
                    className="btn btn-sm btn-danger"
                    onClick={() => removeTask(item.uuid)}
                  >
                    Sil
                    </button>
                </div>
              </li>
          )}
        </ul>
      </div>
    </>
  )
}