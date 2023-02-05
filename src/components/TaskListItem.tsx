import { Task } from '../Types';
import styles from './TaskListItem.module.css';

type TaskListItemProps = {
  task: Task;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

export function TaskListItem({ deleteTask, toggleTask, task }: TaskListItemProps) {
  return (
    <li key={task.id} className={styles.listItem}>
      <input
        className={styles.listItem__input}
        type="checkbox"
        id={task.id}
        checked={task.isCompleted}
        onChange={() => toggleTask(task.id)}
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
        onClick={() => deleteTask(task.id)}
      >
        delete
      </button>
    </li>
  )
}