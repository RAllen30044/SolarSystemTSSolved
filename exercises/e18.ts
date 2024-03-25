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
    if (discoveryCountByYear[year]) {
      discoveryCountByYear[year]++;
    } else {
      discoveryCountByYear[year] = 1;
    }
  });
  // Find the year with the most discoveries
  let maxCount = 0;
  let yearOfMaxCount = 0;
  for (const year in discoveryCountByYear) {
    const count = discoveryCountByYear[year];
    if (count && count > maxCount) {
      maxCount = count;
      yearOfMaxCount = parseInt(year);
    }
  }

  if (yearOfMaxCount === 0) {
    throw new Error("Unable to determine the greatest discovery year.");
  }

  return yearOfMaxCount;
}
// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
