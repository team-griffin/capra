const groupBy = <T>(
  arr: T[],
  fn: (t: T) => string | number
): {
  [key: string]: T[],
} => {
  return arr.reduce((acc, t) => {
    const key = fn(t);
    let group = acc[key];
    if (!group) {
      acc[key] = group = [];
    }
    group.push(t);
    return acc;
  }, {} as { [key: string]: T[] });
};

export default groupBy;
