import React from "react";
import styles from "./ImageCard.module.css";

type ImageCardProps = {
  src: string;
  alt: string;
  onImageClick: (largeImageURL: string) => void;
  largeImageURL: string;
};

const ImageCard: React.FC<ImageCardProps> = ({
  src,
  alt,
  onImageClick,
  largeImageURL,
}) => {
  return (
    <div className={styles.item} onClick={() => onImageClick(largeImageURL)}>
      <img className={styles.image} src={src} alt={alt} />
    </div>
  );
};

export default ImageCard;

/* import styles from "./ImageCard.module.css";
const ImageCard = ({ src, alt, onImageClick, largeImageURL }) => {
  return (
    <div className={styles.item} onClick={() => onImageClick(largeImageURL)}>
      <img className={styles.image} src={src} alt={alt} />
    </div>
  );
};

export default ImageCard; */
