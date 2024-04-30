export default function updateUniqueItems(groceryMap) {
  // Check if the argument is a map
  if (!(groceryMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterate over each entry in the map
  for (const [item, quantity] of groceryMap.entries()) {
    // Check if the quantity is 1
    if (quantity === 1) {
      // Update the quantity to 100
      groceryMap.set(item, 100);
    }
  }

  return groceryMap;
}
