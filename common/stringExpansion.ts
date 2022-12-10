interface String {
  splitToArray(by: string): Array<string>;
  halve(): Array<string>;
}

String.prototype.splitToArray = function (by: string) {
  const arr: Array<string> = this.split(by);
  arr.forEach((el, i, arr) => (arr[i] = el.trim()));
  return arr;
};

String.prototype.halve = function () {
  const arr: Array<string> = new Array<string>();
  arr.push(this.trim().slice(0, this.length / 2));
  arr.push(this.trim().slice(this.length / 2));
  return arr;
};
