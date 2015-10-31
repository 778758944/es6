/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-10-31 19:48:38
 * @version $Id$
 */
"use strict";

let arrayLike={
	"0":"a",
	"1":"b",
	"2":"c",
	length:3
};

var ff=function(){
	console.log([...arguments]);//扩展运算符
}

// ff(1,2,3,4,5);

console.log(Array.from(arrayLike));//类数组对象转化为数组

// console.log([...document.querySelectAll("div")]);


// console.log(Array.from([1,2,,3,,4],(n) => n||0));

// console.log(Array.of(1,2,3,4,5));//组合数组

// console.log([1,2,3,4,5].copyWithin(0,3,4));//在数组内部覆盖数据


// console.log([1,4,-5,10].find((n)=>n<0));//返回第一个匹配项目
// console.log([1,2,3].find(function(value,pos,arr){
// 	console.log(value);
// 	console.log(pos);
// 	console.log(arr);
// 	return true;
// }));


console.log(["a","b","c"].fill(7));//以给定制填充数组


// key,entries,values返回一个可以遍历的对象
// for(let index of ["a","b"].keys()){
// 	console.log(index);
// }
// for(let index of ["a","b"].values()){
// 	console.log(index);
// }
// for(let index of ["a","b"].entries()){
// 	console.log(index);//以数组的形式返回键支队
// }

// console.log([1,2,3].includes(2));

var arr2=new Array(3);

console.log(0 in [1]);

var a5=[1,2,3,4];
// var a6=[for (i of a1) i*2];
// console.log(a6)

console.log(Array.observe);


































