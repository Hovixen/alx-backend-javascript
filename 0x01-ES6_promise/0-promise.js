export default function getResponseFromAPI() {
  // Return a new Promise
  return new Promise((resolve, reject) => {
    // Simulate an API call with setTimeout
    setTimeout(() => {
      // Simulate a successful response
      const response = { data: 'This is the API response' };
      // Resolve the promise with the response
      resolve(response);
      // Simulate an error response (uncomment to test)
      reject(new Error('Failed to fetch data from API'));
    }, 2000);
  });
}
