import React from "react";
import "./styles.css";
import Navbar from "./components/navbar/Navbar";
import Tasklist from "./components/tasklist/Tasklist";
import Task from "./interface/Task";
import {
  typOnTaskAdd,
  typOnTaskUpdate,
  typOnTaskDelete,
} from "./types/TaskTypes";

let idAcc = 0;

const generateId = () => {
  idAcc += 1;
  return idAcc;
};

export default function App() {
  const [tasks, setTasks] = React.useState<Task[]>([]);

  const addTask: typOnTaskAdd = (title: string, taskState: string) => {
    // console.log("função sendo chamada em App");
    const newTask: Task = {
      id: generateId(),
      title,
      taskState,
      onTaskUpdate: updateTask,
      onTaskDelete: deleteTask,
    };

    setTasks((existingTasks) => [...existingTasks, newTask]);
  };

  const updateTask: typOnTaskUpdate = (
    id: number,
    title: string,
    taskState: string
  ) => {
    setTasks((existingTasks) =>
      existingTasks.map((task) =>
        task.id === id ? { ...task, title, taskState } : task
      )
    );
  };

  const deleteTask: typOnTaskDelete = (id: number) => {
    setTasks((existingTasks) => existingTasks.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Tasklist
          title="Pendente"
          taskState="Pendente"
          onAddTask={addTask}
          tasks={tasks.filter((t) => t.taskState === "Pendente")}
          onTaskUpdate={updateTask}
          onTaskDelete={deleteTask}
        />
        <Tasklist
          title="Fazendo"
          taskState="Fazendo"
          onAddTask={addTask}
          tasks={tasks.filter((t) => t.taskState === "Fazendo")}
          onTaskUpdate={updateTask}
          onTaskDelete={deleteTask}
        />
        <Tasklist
          title="Completa"
          taskState="Completa"
          onAddTask={addTask}
          tasks={tasks.filter((t) => t.taskState === "Completa")}
          onTaskUpdate={updateTask}
          onTaskDelete={deleteTask}
        />
      </div>
    </div>
  );
}
