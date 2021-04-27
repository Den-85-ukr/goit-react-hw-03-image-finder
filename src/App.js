import { Component } from 'react';

import Loader from 'react-loader-spinner';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import imagesApi from './components/services/image-api';
import Modal from './components/Modal';

import styles from './App.module.css';

class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    //showModal: false,
    selectImage: {},
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      images: [],
      error: null,
    });
  };

  fetchImages = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { searchQuery, currentPage };

    this.setState({ isLoading: true });

    imagesApi
      .fetchImages(options)
      .then(images => {
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  toggleModal = (url, alt) => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      selectImage: { url, alt },
    }));
  };

  render() {
    const {
      showModal,
      images,
      isLoading,
      error,
      selectImage: { url, alt },
    } = this.state;

    const shouldRenderLoadMoreButton = images.length > 0 && !isLoading;

    return (
      <div className={styles.App}>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={url} alt={alt} />
          </Modal>
        )}

        {error && <p>Uups Error! {error.message}</p>}

        <Searchbar onSubmit={this.onChangeQuery} />

        <ImageGallery images={images} onToggleModal={this.toggleModal} />

        {isLoading && (
          <div className={styles.Loader}>
            <Loader type="TailSpin" color="#3f51b5" height={80} width={80} />
          </div>
        )}

        {shouldRenderLoadMoreButton && (<Button loadMore={this.fetchImages} />
           
        )}
      </div>
    );
  }
}

export default App;