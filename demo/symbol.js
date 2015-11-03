/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-11-03 19:13:42
 * @version $Id$
 */
var s=Symbol();//制造独一无二的属性名

// console.log(typeof s);

var s2=Symbol("foo");
// console.log(s2.toString());

var mysymbol=Symbol();
var a={};
a[mysymbol]="hello";

console.log(a[mysymbol]);
var s3=Symbol();
var s5=Symbol();
var obj={
	[s3](a,b){
		console.log(a+b);
	},
	a:"kaka",
	[s5]:"jaja"
}

obj[s3](1,2);
console.log(Object.getOwnPropertyNames(obj));
console.log(Object.getOwnPropertySymbols(obj));//遍历symbol属性返回一个数组
// console.log(Reflect.ownKeys(obj));

var s6=Symbol.for("for");//新建相同的sympol
var s7=Symbol.for("for");
console.log(s6===s7);

console.log(Symbol.keyFor(s6));//返回已经登记的for




















