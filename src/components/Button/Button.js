import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ loadMore }) => {
  //  window.scrollTo({
  //    top: document.documentElement.scrollHeight,
  //    behavior: 'smooth',
  //  });
  
  return (
    <button
      tupe="button"
      className={styles.Button}
      onClick={loadMore}
    >
      Load more
    </button>
  );
};

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};

export default Button;