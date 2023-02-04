import styles from './TaskList.module.css';

import { Task } from "../Types";

type TaskListProps = {
  tasks: Task[];
  handleTaskToggle: (task_id: string) => void;
  handleDeleteTask: (task:Task) => void;
}

export function TaskList({ tasks, handleTaskToggle, handleDeleteTask }: TaskListProps) {
  return (
    <form>
      <ul className={styles.list}>
        {tasks.map(task => (
          <li key={task.id} className={styles.listItem}>
            <input 
              className={styles.listItem__input}
              type="checkbox" 
              id={task.id} 
              checked={task.isCompleted}
              onChange={() => handleTaskToggle(task.id)}
            />
            <label 
              className={styles.listItem__title} 
              htmlFor={task.id}
            >
              {task.title}
            </label>

            <button 
              className={styles.listItem__delete} 
              type="button" 
              onClick={() => handleDeleteTask(task)}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </form>
  )
}
