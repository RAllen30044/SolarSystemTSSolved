import { AllData, data } from "../data/data";

 function getPlanetNames(planets: AllData): string[] {
  return planets.planets.map((planet) => planet.name);
}
console.log(getPlanetNames(data));
