"use strict";
//支持块级作用域
{
  let a=10;//定义的变量只在大括号内有效
  var b=8;
}
// console.log(a);
// console.log(b);


var arr=[];

for(let i=0;i<10;i++){
	arr[i]=function(){
		console.log(i);
	}
}

// arr[6]();


var tmp="jjj";
if(true){
	// tmp="ll";因为当前区块内有let，无法进行命名提升，暂时性死区
	let tmp;
}


function ss(){
	// let aa=10;
	var aa=1;//不能在函数重新声明变量
	// let aa=10;
}
// ss();

function f1(){
	let n=5;
	if(true){
		let n=10;
	}
	console.log(n);
}

// f1();

function f(){
	console.log("i am outside!");
}

(function(){
	if(false){
		function f(){console.log("i am inside");}
	}

	f();
}());

{
	let a="secret";
	function f3(){
		return a;
	}
}

// f3();

// let f4;

// {
// 	let ss="secret",//开启块级模式
// 	// f4=function (){
// 	// 	console.log(ss);
// 	// }
// }

// // f4();

//const

const pi=3.14159;

// console.log(pi);


// pi=22;

const foo={};

foo.prop=123;
console.log(foo.prop);

// foo={};

//冻结对象
const foo2=Object.freeze({});
foo2.prop=123;





























