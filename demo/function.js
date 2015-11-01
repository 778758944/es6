/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-11-01 10:29:27
 * @version $Id$
 */



//参数设定默认值
// function log(x,y = "world"){
// 	console.log(x,y);
// }

// // log("hello");

// //参数可以析构赋值
// function foo({x,y}){
// 	console.log(x,y);
// }

// // foo({y:10});

// function kk(a,b,c,d,e=0){
// 	console.log(arguments.length);
// }
// console.log(kk.length);//设置默认值的参数不会计入length

// // let x=10;

// function aa(x,y=x){//在函数调用时的函数内部变量
// 	let x=3;
// 	console.log(y);
// }

// aa();

//reset参数

// function add(...values){
// 	var sum=0;
// 	for(var val of values){
// 		sum+=val;
// 	}

// 	console.log(sum);
// }


// add(1,2,3);//6

// //reset逆运算
// console.log(...[1,2,3]);

// console.log(Math.max(...[1,2,3]));

// var arr1=[1,2,3];
// var arr2=[4,5,6];
// console.log([...arr1,...arr2]);


// console.log(add.name);//返回函数名

// var kaka=function (){

// }

// console.log(kaka.name);

var f = v => v;
/*
箭头函数
var f=function(v){
	return v;
}
*/

var f2=()=>5//表示函数不需要或需要多个参数
var f3=(num1,num2)=>{
	num1=num1*2;
	num2=num2*2;
	return {sum:num1+num2}.sum;
}

var f4=({x,y})=>x+y;


console.log(f(1));
console.log(f2());
console.log(f3(1,2));
console.log(f4({x:1,y:2}));

id=10;
function foo2(){
	setTimeout(()=>{
		console.log("id:",this.id);
	})
}

foo2({id:5});

















