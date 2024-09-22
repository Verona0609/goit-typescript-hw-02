import React from 'react';
import ImageCard from './ImageCard';
import styles from './ImageGallery.module.css';

type Image = {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
};

type ImageGalleryProps = {
  images: Image[];
  onImageClick: (largeImageURL: string) => void;
};

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick }) => {
  return (
    <ul className={styles.list}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard
            src={image.urls.small}
            alt={image.alt_description}
            largeImageURL={image.urls.regular}
            onImageClick={onImageClick}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;

