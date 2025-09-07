import styles from "./search.module.scss";

export const Search = () => {
  return (
    <div>
      <div className={styles.searchWrapper}>
        <input
          className={styles.search}
          type="text"
          name="search"
          placeholder="Поиск..."
        />
      </div>
    </div>
  );
};
