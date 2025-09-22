import React from "react";
import Task from "../../interface/Task";
import "./TaskItem.css";

const TaskItem: React.FC<Task> = ({
  id,
  title,
  taskState,
  onTaskUpdate,
  onTaskDelete,
}) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [editableTitle, seteditableTitle] = React.useState(title);
  const [previousTitle, setPreviousTitle] = React.useState(editableTitle);

  const onTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = event.target.value;
    seteditableTitle(newTitle);
  };

  const onKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // console.log(`Key pressed: ${event.key}`);

    if (event.key === "Enter") {
      setIsEditing(false);

      if (editableTitle.length === 0) onTaskDelete(id);
    } else if (event.key === "Escape") {
      seteditableTitle(previousTitle);
      setIsEditing(false);
    }
  };

  const onTaskStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onTaskUpdate(id, title, event.target.value);
  };

  if (isEditing) {
    return (
      <div className="task-item">
        <input
          id={id.toString()}
          type="text"
          value={editableTitle}
          onChange={onTitleChange}
          onKeyUp={onKeyUp}
          onFocus={() => setPreviousTitle(editableTitle)}
        />
      </div>
    );
  } else {
    return (
      <div className="task-item">
        <div onClick={() => setIsEditing(true)}>{editableTitle}</div>
        <select onChange={onTaskStateChange} value={taskState}>
          <option value="Pendente">Pendente</option>
          <option value="Fazendo">Fazendo</option>
          <option value="Completa">Completa</option>
        </select>
      </div>
    );
  }
};

export default TaskItem;
