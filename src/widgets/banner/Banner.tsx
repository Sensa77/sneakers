import styles from "./banner.module.scss";
import brands from "@/assets/banner/brands.png";
import frog from '@/assets/banner/frog.png'
import { BaseButton } from "@/shared/ui/baseButton";

export const Banner = () => {
  return (
    <div className={styles.banner}>
      <div>
        <img
          className={styles.brands}
          src={brands}
          alt="brands"
          width={99}
          height={40}
        />
        <div className={styles.buyBlock}>
          <h1 className={styles.text}>
            <span className={styles.name}>Stan Smith</span>,<br /> Forever!
          </h1>
          <BaseButton text="Купить" width={178} />
        </div>
      </div>
      <img src={frog} alt="frog" />
    </div>
  );
};
