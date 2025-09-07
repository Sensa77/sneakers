import { Banner } from '@/widgets/banner'
import styles from './main.module.scss'
import { Catalog } from '@/widgets/catalog'

export const Main = () => {
  return (
    <div className={styles.main}>
      <Banner />
      <Catalog />
    </div>
  )
}