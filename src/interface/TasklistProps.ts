import Task from "./Task";
import TaskTypeStates from "../types/TaskTypeStates";

// Define a interface para as props
export default interface TasklistProps {
  title: string;
  taskState: TaskTypeStates;
  onAddTask: (title: string, state: string) => void;
  tasks: Task[];
  onTaskUpdate: (id: number, title: string, taskState: string) => void;
  onTaskDelete: (id: number) => void;
}
