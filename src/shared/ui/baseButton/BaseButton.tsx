import styles from "./baseButton.module.scss";

interface BaseButtonProps {
  text: string,
  width: number
}

export const BaseButton = ({text, width}: BaseButtonProps) => {
  return (
    <button type="button" className={styles.button} style={{width: `${width}`}}>
      {text}
    </button>
  );
};
