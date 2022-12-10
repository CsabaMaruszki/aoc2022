interface Math {
  rangeBetween(base: Array<number>, to: Array<number>): boolean;
  rangeBetweenOrEqual(base: Array<number>, to: Array<number>): boolean;
  rangeOverlap(range1: Array<number>, range2: Array<number>): boolean;
}

Math.rangeBetween = function (base: Array<number>, to: Array<number>) {
  if (base[0] > to[0] && base[1] < to[1]) {
    return true;
  } else {
    return false;
  }
};

Math.rangeBetweenOrEqual = function (base: Array<number>, to: Array<number>) {
  if (base[0] >= to[0] && base[1] <= to[1]) {
    return true;
  } else {
    return false;
  }
};

Math.rangeOverlap = function (range1: Array<number>, range2: Array<number>) {
  if (
    range1[0] > range2[1] ||
    range1[1] < range2[0] ||
    range2[0] > range1[1] ||
    range2[1] < range1[0]
  ) {
    return false;
  } else {
    return true;
  }
};
