import styles from './Form.module.css';

export function Form() {
  return (
    <form className={styles.taskForm}>
      <input 
        type="text" 
        placeholder="Adicione uma nova tarefa"
        className={styles.taskInput}
      />
      <button type="submit" className={styles.taskButton}>Criar</button>
    </form>
  )
}
