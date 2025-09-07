import { SneakersCard } from "@/entities/sneakersCard";
import styles from "./catalog.module.scss";
import { Search } from "@/features/search";

export const Catalog = () => {
  return (
    <div className={styles.catalog}>
      <div className={styles.searchBlock}>
        <h2 className={styles.title}>Все кроссовки</h2>
        <Search />
      </div>
      <div className={styles.list}>
        <SneakersCard />
        <SneakersCard />
        <SneakersCard />
        <SneakersCard />
        <SneakersCard />
        <SneakersCard />
        <SneakersCard />
        <SneakersCard />
      </div>
    </div>
  );
};
