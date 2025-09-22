export default interface Task {
  id: number;
  title: string;
  taskState: string;
  onTaskUpdate: (id: number, title: string, taskState: string) => void;
  onTaskDelete: (id: number) => void;
}
