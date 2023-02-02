import { Form } from './components/Form';
import { Header } from './components/Header';

import styles from './App.module.css';
import './styles.css';

export function App() {
  return (
    <div>
      <Header />

      <main className={styles.container}>
        <Form />
      </main>

    </div>
  )
}