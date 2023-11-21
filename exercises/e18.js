import { maxBy } from './e17';
/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  if (!data.asteroids || data.asteroids.length === 0){
    return undefined;
  }

  const discoveryCountByYear = {};

  data.asteroids.forEach((asteroid) => {
    const discoveryYear = asteroid.discoveryYear;
    discoveryCountByYear[discoveryYear] = (discoveryCountByYear[discoveryYear] || 0) + 1;
  });

  const yearWithMostDiscoveries = maxBy(Object.keys(discoveryCountByYear), (year) => discoveryCountByYear[year]);

  return parseInt(yearWithMostDiscoveries);
  
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
