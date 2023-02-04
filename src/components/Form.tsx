import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import { Task } from '../Types';
import styles from './Form.module.css';

type FormProps = {
  addNewTask: (task: Task) => void;
}

export function Form({ addNewTask }: FormProps) {
  const [taskTitle, setTaskTitle] = useState('');

  return (
    <form className={styles.taskForm}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        className={styles.taskInput}
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <button
        type="submit" 
        className={styles.taskButton} 
        onClick={(e) => {
          e.preventDefault();
          addNewTask({
            id: uuid(),
            title: taskTitle,
            isCompleted: false
          })
          setTaskTitle('')
        }}
      >
        Criar
      </button>
    </form>
  )
}
