interface String {
  splitToArray(by: string): Array<string>;
}

String.prototype.splitToArray = function (by: string): Array<string> {
  const arr: Array<string> = this.split(by);
  arr.forEach((el, i, arr) => (arr[i] = el.trim()));
  return arr;
};
