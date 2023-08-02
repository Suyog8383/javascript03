let obj = { name: "suyog" };
const fullName = function (a, b) {
  return a + this.name + b;
};
Function.prototype.myCall = function (scope, ...args) {
  scope._this = this;
  return scope._this(...args);
};
console.log(fullName.myCall(obj, "Hello ", " Nagawade"));

Function.prototype.myApply = function (scope, args) {
  scope._this = this;
  return scope._this(...args);
};
console.log(fullName.myApply(obj, ["hello ", " Nagawade"]));

Function.prototype.myBind = function (scope, ...args) {
  scope._this = this;
  return function () {
    return scope._this(...args);
  };
};
let test = fullName.myBind(obj, "Hello ", " Nagawade");
console.log(test());
