import axios from 'axios';

const myApiKey = '20406911-f22ead56d7a6718c622225634';
axios.defaults.baseURL = 'https://pixabay.com/api/';

const fetchImages = ({ searchQuery = '', currentPage = 1, pageSize = 12 }) => {
  return axios
    .get(
      `?key=${myApiKey}&q=${searchQuery}&pageSize=${pageSize}&page=${currentPage}`,
    )
    .then(({ data }) => data.hits);
};

const fetch = { fetchImages };

export default fetch;