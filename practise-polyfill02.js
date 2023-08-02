let arr = [1, 2, 3, 4, 5];

// forEach polyfill

/* Array.prototype.myEach = function (callBack) {
  for (let i = 0; i < this.length; i++) {
    callBack(this[i], this, i);
  }
};
arr.myEach((item) => {
  console.log("@SN ", item);
}); */

//map polyfill

/* Array.prototype.myMap = function (callBack) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(callBack(this[i], i, this));
  }
  return arr;
};

let data = arr.myMap((item) => {
  return item * 2;
});
console.log(data); */

//filter polyfill

/* Array.prototype.myFilter = function (callBackFun, context) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if (callBackFun.call(context, this[i], this, i)) {
      arr.push(this[i]);
    }
  }
  return arr;
};

let data = arr.myFilter((item) => {
  return item > 1;
});
console.log(data); */

//reduce polyfill
// Array.prototype.myReduce = function (callBackFun, initialVal) {
//   let accum = initialVal;
//   for (let i = 0; i < this.length; i++) {
//     if (accum) {
//       accum = callBackFun.call(undefined, accum, this[i], i, this);
//     } else {
//       accum = this[i];
//     }
//   }
//   return accum;
// };

// let data = arr.myReduce((a, b) => {
//   return a + b;
// });
// console.log(data);
