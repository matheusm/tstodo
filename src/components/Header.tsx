import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <p className={styles.title}><span>TS</span> todo</p>
    </header>
  )
}