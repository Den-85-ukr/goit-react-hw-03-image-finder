import { Component } from 'react';
import styles from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  render() {
    const { imgURL, alt, largeImage, onToggle } = this.props;
    return (
      <li
        className={styles.ImageGalleryItem}
        onClick={() => onToggle(largeImage, alt)}
      >
        <img
          src={imgURL}
          alt={alt}
          className={styles.ImageGalleryItem_image}
        />
      </li>
    );
  }
}

export default ImageGalleryItem;