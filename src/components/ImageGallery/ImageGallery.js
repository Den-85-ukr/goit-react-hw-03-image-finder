import { Component } from 'react';
import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem';

import styles from './ImageGallery.module.css';

class ImageGallery extends Component {
    render() {
        const { images, onToggleModal } = this.props;
        return (
          <ul className={styles.ImageGallery}>
            {images.map(({ id, tags, webformatURL, largeImageURL }) => {
              return (
                <ImageGalleryItem
                  key={id}
                  imgURL={webformatURL}
                  largeImage={largeImageURL}
                  alt={tags}
                  onToggle={onToggleModal}
                />
              );
            })}
          </ul>
        );
    }
}

ImageGallery.defaultProp = {
  images: [],
};

ImageGallery.propTypes = {
  onToggleModal: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }),
  ),
};

export default ImageGallery;