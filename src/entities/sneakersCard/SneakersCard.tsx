import styles from './sneakersCard.module.scss'
import logo from "@/assets/header/logo.png";
import plus from '@/assets/card/plus.svg';

export const SneakersCard = () => {
  return (
    <div className={styles.card}>
      <img className={styles.picture} alt='sneakers' src={logo} width={133} height={112} />
      <p className={styles.name}>Мужские Кроссовки Nike Blazer Mid Suede</p>
      <div className={styles.buyBlock}>
        <div className={styles.priceBlock}>
          <span className={styles.title}>Цена:</span>
          <span className={styles.price}>12 999 руб.</span>
        </div>
        <button type='button' className={styles.button}>
          <img src={plus} alt="plus" width={11} height={11}/>
        </button>
      </div>
    </div>
  )
}