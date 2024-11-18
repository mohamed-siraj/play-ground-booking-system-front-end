import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8001/api',
  timeout: 10000,
});

axiosInstance.interceptors.response.use(
  (response) => {
    // Return the response if the request is successful
    return response;
  },
  (error) => {
    // Handle response errors here
    if (error.response) {
      // The request was made, and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('Response Error:', error.response.data);
      console.error('Status:', error.response.status);
      console.error('Headers:', error.response.headers);

      // Customize the error handling based on the status code
      switch (error.response.status) {
        case 400:
          // Handle Bad Request
          alert('Bad Request: ' + error.response.data.message);
          break;
        case 401:
          // Handle Unauthorized
          alert('Unauthorized: Please login again.');
          // Optionally redirect to the login page
          break;
        case 403:
          // Handle Forbidden
          alert('Forbidden: You do not have permission.');
          break;
        case 404:
          // Handle Not Found
          alert('Resource Not Found: ' + error.response.data.message);
          break;
        case 500:
          // Handle Internal Server Error
          alert('Server Error: Please try again later.');
          break;
        default:
          alert('An unexpected error occurred.');
      }
    } else if (error.request) {
      // The request was made but no response was received
      console.error('No response received:', error.request);
      alert('No response from server. Please check your connection.');
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Axios Error:', error.message);
      alert('Error: ' + error.message);
    }

    // Optionally, you can return a specific error object or reject the promise
    return Promise.reject(error);
  }
);

export default axiosInstance;