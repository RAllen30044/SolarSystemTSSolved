// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902
// Hint: use a Map data structure instead of an object if you want typescript to be happy

import { Asteroid } from "../data/data";

export function getGreatestDiscoveryYear(asteroids: Asteroid[]): number {
  const discoveryCountByYear: Record<number, number> = {};

  // Populate the discoveryCountByYear object
  asteroids.forEach((asteroid) => {
    const year = asteroid.discoveryYear;
    if (!discoveryCountByYear[year]) {
      discoveryCountByYear[year] = 0;
    }
    discoveryCountByYear[year]++;
  });
  // Find the year with the most discoveries

  const yearOfMaxCount = Object.entries(discoveryCountByYear).reduce(
    (acc, [year, count]) => {
      if (count > acc.maxCount) {
        return { maxYear: parseInt(year), maxCount: count };
      }
      return acc;
    },
    { maxYear: 0, maxCount: 0 }
  ).maxYear;

  return yearOfMaxCount;
}
// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
