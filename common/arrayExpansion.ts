interface Array<T> {
  clearEmpty(): Array<string>;
  toIntArray(): Array<number>;
  toSubArrays(by: string): Array<Array<string>>;
  sum(): number;
}

Array.prototype.clearEmpty = function (): Array<string> {
  const arr: Array<string> = this.filter((el) => el !== '');
  return arr;
};

Array.prototype.toIntArray = function (): Array<number> {
  const arr: Array<number> = new Array<number>();
  this.forEach((el: string) => arr.push(parseInt(el, 10)));
  return arr;
};

Array.prototype.toSubArrays = function (by: string): Array<Array<string>> {
  const out: Array<Array<string>> = new Array<Array<string>>();
  let arr: Array<string> = new Array<string>();
  this.forEach((el: string) => {
    if (el !== by) {
      arr.push(el);
    } else {
      out.push(arr);
      arr = new Array<string>();
    }
  });
  return out;
};

Array.prototype.sum = function (): number {
  let sum = 0;
  this.forEach((el) => (sum += el));
  return sum;
};
