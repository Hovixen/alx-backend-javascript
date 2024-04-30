export const weakMap = new WeakMap();

// Define the queryAPI function
export function queryAPI(endpoint) {
  // Check if the endpoint argument is provided and has required properties
  if (!endpoint || typeof endpoint !== 'object' || !endpoint.protocol || !endpoint.name) {
    throw new Error('Invalid endpoint');
  }

  // Check if the endpoint exists in the weakMap, if not initialize its count to 0
  const endpointCount = weakMap.get(endpoint) || 0;

  // Increment the count for this endpoint
  weakMap.set(endpoint, endpointCount + 1);

  // Check if the count is >= 5, throw an error
  if (endpointCount >= 4) {
    throw new Error('Endpoint load is high');
  }

  // Return some result or perform API query
}
