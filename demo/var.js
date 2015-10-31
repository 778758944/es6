/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-10-31 10:43:24
 * @version $Id$
 */

//变量的解构赋值
//数组的解构赋值
//只有Firefox支持
"use strict";

var [a, b, c] = [1, 2, 3];

// console.log(a,b,c);

var [foo,[[bar],baz]]=[4,[[5],6]];
// console.log(foo,bar,baz);


var [aa,...bb]=[1,2,3,4,5];
// console.log(aa);
// console.log(bb);

//不完全解构
var [a3,[b3],c3]=[1,[2,3],4];

// console.log(a3,b3,c3);

//设置默认值,数组为undenfidy的时候生效
var [a4=2,b4,c4]=[,5,6];
// console.log(a4,a5,a6);
//惰性赋值
function jj(){
	return 2;
}

var [a5=jj(),b5,c5]=[,2,3];
// console.log(a5,b5,c5);


//对象解构
var {foo,bar}={foo:"aaa",bar:"bbb"};
// console.log(foo);
// console.log(bar);

var {foo:a6,bar:b6}={foo:"aaa",bar:"bbb"};
// console.log(foo);
// console.log(bar);

var obj={
	p:[
	   "hello",
	   {y:"world"}
	]
};
var {p:[a7,{y:b7}]}=obj;


// console.log(a7,b7);


var x;
({x}={x:1});
// console.log(x);


//字符串的解构赋值
var [a,b,c,d,e]="hello";
// console.log(a,b,c,d,e);

var {length:len}="hello";

console.log(len);





























