"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var A = function A() {
	_classCallCheck(this, A);

	this.age = 12;
};

var a = new A();

console.log(a.age);
var x = { name: "jack" };
var y = { age: 12 };
var c = {};

Object.assign(c, x, y);

console.log(c);

