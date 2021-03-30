import axios from 'axios';

/**
 * Request Wrapper with default success/error actions
 */
import {END_POINT_API} from '../common/constants';

const request = async function(options) {

  const client = axios.create({
    baseURL: END_POINT_API,
    headers: {'Content-Type': 'application/json'},
  });

  const onSuccess = function(response) {

    return response.data;
  };

  const onError = function(error) {
    console.log('Request Failed:', error
    );

    if (error.response) {
      // Request was made but server responded with something
      // other than 2xx
      console.log('Status:', error.response.status);
      console.log('Data:', error.response.data);
      console.log('Headers:', error.response.headers);
    } else {
      // Something else happened while setting up the request
      // triggered the error
      console.log('Error Message:', error.message);
    }

    return Promise.reject(error.response.data);
  };

  return client(options)
    .then(onSuccess)
    .catch(onError);
};

export default request;
