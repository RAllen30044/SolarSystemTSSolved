export function minBy<element>(
  array: element[],
  cb: (element: element) => number | string
): element | undefined {
  let min: element | undefined;
  let temp: number | string;
  array.forEach((element) => {
    if (!temp || cb(element) < temp) {
      temp = cb(element);
      min = element;
    }
  });

  return min;
}

export function maxBy<element>(
  array: element[],
  cb: (element: element) => number | string
): element | undefined {
  let max: element | undefined;
  let temp: number | string;
  array.forEach((element) => {
    if (!temp || cb(element) > temp) {
      temp = cb(element);
      max = element;
    }
  });
  return max;
}
