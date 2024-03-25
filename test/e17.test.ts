import { beforeEach, describe, expect, it } from "vitest";
import { maxBy, minBy } from "../exercises/e17";
import { Equal } from "../test-utils";

type Person = {
  name: string;
  age: number;
};

describe("minBy", () => {
  let people: Person[] = [];
  beforeEach(() => {
    people = [
      { name: "jon", age: 29 },
      { name: "peter", age: 30 },
      { name: "andrey", age: 22 },
      { name: "rachel", age: 25 },
    ];
  });
  it("minBy should return the youngest person", () => {
    const returnVal = minBy(people, (person) => person.age);
    expect(returnVal).toEqual({
      name: "andrey",
      age: 22,
    });
    type A = Equal<Person | undefined, typeof returnVal>;
  });

  it("It should find the person with the least alphabetical name (starts with a in this case)", () => {
    const returnVal = minBy(people, (person) => person.name);
    expect(returnVal).toEqual({
      name: "andrey",
      age: 22,
    });
  });

  it("if 2 minimums are the same, it should be the first one in the array", () => {
    people.push({ name: "joey", age: 22 });
    const returnVal = minBy(people, (person) => person.age);
    expect(returnVal).toEqual({
      name: "andrey",
      age: 22,
    });
  });

  it("should get the youngest other than just at the first or second position", () => {
    const people = [
      { name: "jon", age: 12 },
      { name: "tyson", age: 10 },
      { name: "rachel", age: 9 },
      { name: "peter", age: 14 },
    ];
    const returnVal = minBy(people, (person) => person.age);
    expect(returnVal).toEqual({
      name: "rachel",
      age: 9,
    });
  });

  it("should return undefined if no elements in array", () => {
    const returnVal = minBy([] as Person[], (person) => person.age);
    expect(returnVal).toEqual(undefined);
  });
  it("should work with an array of numbers", () => {
    const returnVal = minBy([2, 1, 3, 4], (num) => num);
    expect(returnVal).toEqual(1);
    type ShouldReturnNumber1 = Equal<number | undefined, typeof returnVal>;
  });
});

describe("maxBy", () => {
  let people: Person[] = [];
  beforeEach(() => {
    people = [
      { name: "jon", age: 29 },
      { name: "peter", age: 30 },
      { name: "andrey", age: 22 },
      { name: "rachel", age: 25 },
    ];
  });
  it("maxBy should return the oldest person", () => {
    const returnVal = maxBy(people, (person) => person.age);
    expect(returnVal).toEqual({
      name: "peter",
      age: 30,
    });

    type ShouldReturnPerson = Equal<Person | undefined, typeof returnVal>;
  });

  it("maxBy should return the third person if the third person is the oldest", () => {
    people.unshift({ name: "first", age: 20 });
    const returnVal = maxBy(people, (person) => person.age);
    expect(returnVal).toEqual({
      name: "peter",
      age: 30,
    });
  });

  it("if 2 maximums are the same, it should be the first one in the array", () => {
    people.push({ name: "joey", age: 30 });
    const returnVal = maxBy(people, (person) => person.age);
    expect(returnVal).toEqual({
      name: "peter",
      age: 30,
    });
  });

  it("It should find the person with the longest name", () => {
    const returnVal = maxBy(people, (person) => person.name.length);
    expect(returnVal).toEqual({
      name: "andrey",
      age: 22,
    });
  });

  it("should return undefined if no elements in array", () => {
    const returnVal = maxBy([] as Person[], (person) => person.age);
    expect(returnVal).toEqual(undefined);
  });

  it("should work with an array of numbers", () => {
    const returnVal = maxBy([2, 4, 3, 1], (num) => num);
    expect(returnVal).toEqual(4);
    type ShouldReturnNumber = Equal<number | undefined, typeof returnVal>;
  });
});
