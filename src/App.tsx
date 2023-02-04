import { Form } from './components/Form';
import { Header } from './components/Header';
import { Task } from './Types'

import styles from './App.module.css';
import './styles.css';
import { useState } from 'react';
import { TaskList } from './components/TaskList';
import { v4 as uuid } from 'uuid';

export function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {id: uuid(), title: 'task top', isCompleted: false}
  ]);

  function handleAddNewTask(newTask: Task) {
    setTasks([...tasks, newTask]);
  }

  function handleTaskToggle(task_id: string) {
    const newTasks = tasks.map(task => {
      if (task.id === task_id) return { ...task, isCompleted: !task.isCompleted }
      return task;
    })
    setTasks(newTasks);
  }

  function handleDeleteTask(task: Task){
    let newTasks = [...tasks];

    const index = tasks.indexOf(task);

    if(index === -1) return;
    
    newTasks.splice(index, 1)
    setTasks(newTasks)
  }

  return (
    <div>
      <Header />

      <main className={styles.container}>
        <Form addNewTask={handleAddNewTask} />

        <TaskList tasks={tasks} handleTaskToggle={handleTaskToggle} handleDeleteTask={handleDeleteTask} />
      </main>

    </div>
  )
}