import styles from './TaskList.module.css';

import { Task } from "../Types";
import { TaskListItem } from './TaskListItem';

type TaskListProps = {
  tasks: Task[];
  handleTaskToggle: (task_id: string) => void;
  handleTaskDelete: (task: string) => void;
}

export function TaskList({ tasks, handleTaskToggle, handleTaskDelete }: TaskListProps) {
  return (
    <form>
      <ul className={styles.list}>
        {tasks.map(task => (
          <TaskListItem
            key={task.id}
            task={task}
            deleteTask={handleTaskDelete}
            toggleTask={handleTaskToggle}
          />
        ))}
      </ul>
    </form>
  )
}
