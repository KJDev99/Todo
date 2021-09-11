function Task({id, text, completed, changeStatus, deleteTask }) {
  const handleDelete = () =>  deleteTask(id)
  const handleChangeStatus = () =>  changeStatus(id)
    return (
      <li className="task">
        <span>{id+1}</span>
        <p className={completed ? "completed" : ""}>{text}</p>
        <input
          onChange={handleChangeStatus}
          type="checkbox"
          checked={completed}
        />
        <button onClick={ handleDelete}>Delete</button>
      </li>
    );
  }

  export default Task; 