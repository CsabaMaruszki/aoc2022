interface Number {
  between(low: number, high: number): boolean;
  betweenOrEqual(low: number, high: number): boolean;
}

Number.prototype.between = function (low: number, high: number) {
  if (this > low && this < high) {
    return true;
  } else {
    return false;
  }
};

Number.prototype.betweenOrEqual = function (low: number, high: number) {
  if (this >= low && this <= high) {
    return true;
  } else {
    return false;
  }
};
