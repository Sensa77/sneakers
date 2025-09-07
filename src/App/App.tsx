import { Header } from '@/widgets/header'
import styles from './app.module.scss'
import { Main } from '@/pages/main'

export const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Main />
    </div>
  )
}
