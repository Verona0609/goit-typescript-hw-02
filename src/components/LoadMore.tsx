import React from "react";
import styles from "./LoadMore.module.css";

interface LoadMoreProps {
  onClick: () => void; // Тип функції без аргументів, яка не повертає значення
}

const LoadMore: React.FC<LoadMoreProps> = ({ onClick }) => {
  return (
    <div className={styles.containerlm}>
      <button className={styles.buttonloadmore} onClick={onClick}>
        LOAD MORE
      </button>
    </div>
  );
};

export default LoadMore;

