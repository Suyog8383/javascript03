let arr = [1, 2, 3, 4, 5];
let arr2 = arr.reduce((total, num) => total + num);
console.log("@SN ", arr2);

Array.prototype.suyog = function (callbackFun, initialVal) {
  let accum = initialVal;
  for (let i = 0; i < this.length; i++) {
    if (accum) {
      accum = callbackFun.call(undefined, accum, this[i], i, this);
    } else {
      accum = this[i];
    }
  }
  return accum;
};

let arr3 = arr.suyog((a, b) => a + b);
console.log("@SN ", arr3);
