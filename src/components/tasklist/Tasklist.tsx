import "./Tasklist.css";
import TasklistProps from "../../interface/TasklistProps";
import TaskItem from "../taskItem/TaskItem";
import plusIcon from "../../image/plus-icon.svg";

const Tasklist: React.FC<TasklistProps> = ({
  title,
  taskState,
  onAddTask,
  tasks,
  onTaskUpdate,
  onTaskDelete,
}) => {
  const addTask = () => {
    // console.log("função sendo chamada em TaskList");
    onAddTask("Nova Tarefa", taskState);
  };

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              taskState={task.taskState}
              onTaskUpdate={onTaskUpdate}
              onTaskDelete={onTaskDelete}
            />
          );
        })}
        {tasks.length === 0 && <div className="empty-list">Lista Vazia</div>}
        <button onClick={addTask} className="btn">
          <img src={plusIcon} alt="plus" />
          Adicionar Tarefa
        </button>
      </div>
    </div>
  );
};

export default Tasklist;
