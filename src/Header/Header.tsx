import styles from "./Header.module.scss";
import cn from 'classnames'
import logo from "@/assets/logo.png";
import basket from "@/assets/svg/basket.svg";
import like from "@/assets/svg/like.svg";
import profile from '@/assets/svg/profile.svg'

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.brand}>
        <img src={logo} alt="logo" width={40} height={40} />
        <div className={styles.text}>
          <h2 className={styles.name}>REACT SNEAKERS</h2>
          <h3 className={styles.description}>Магазин лучших кроссовок</h3>
        </div>
      </div>
      <nav>
        <ul className={styles.navigationList}>
          <li className={cn(styles.navigationItem, styles.basket)}>
            <img src={basket} alt="basket-icon" />
            <span>1205 руб.</span>
          </li>
          <li className={cn(styles.navigationItem, styles.like)}>
            <img src={like} alt="like-icon" />
            <span>Закладки</span>
          </li>
          <li className={cn(styles.navigationItem, styles.profile)}>
            <img src={profile} alt="profile-icon" />
            <span>Профиль</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};
