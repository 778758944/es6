/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-11-04 20:24:52
 * @version $Id$
 */
function* helloWorldGenerator(){//Generator生成方式
	console.log("hello");
	yield "hello";
	yield "world";
	return "ending";
}
var hw=helloWorldGenerator();//生成一个遍历器,赋值操作不执行，调用next才执行
// console.log(hw.next());
// console.log(hw.next());
// console.log(hw.next());
// console.log(hw.next());


function* gen(){
	var ss;
	console.log("first");
	yield ss=1+2;
	      console.log(ss);
	yield console.log("third");
}

var ss=gen();
// console.log(ss.next());
// ss.next();
function* f(){
	for(var i=0;true;i++){
		var reset=yield i;
		if(reset){
			i=-1;
			console.log("kkkkkk");
		}
	}
}

var g=f();
// console.log(g.next());
// console.log(g.next());
// console.log(g.next(true));
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());

function* foo(x){
	var y=2*(yield(x+1));
	var z=yield(y/3);
	return (x+y+z);
}

var a=foo(5);
// console.log(a.next());
// console.log(a.next(12));
// console.log(a.next(13));

function* gen2(){

}

var g=gen2();
// console.log(g[Symbol.iterator]()===g);

function* gun3(){
	yield 1;
	yield 2;
	yield 3;
	yield 4;
	yield 5;
	return 6;
}

for(var v of gun3()){
	// console.log(v);
}

function* numbers(){
	yield 1;
	yield 2;
	return 3;
	yield 4;
}

// console.log([...numbers()]);
// var [x,y]=numbers();
// console.log(x,y);


//throw方法，在函数外部抛出错误，内部接受错误

var g3=function* (){
	while(true){
	try{
		yield;
	}
	catch(e){
		if(e != "a") throw e;
		// console.log("内部捕获",e);
	}
}
}

var ii=g3();
ii.next();

try{
	ii.throw("a");
	ii.throw("b");
}catch(e){
	// console.log("外部捕获",e);
}

// return 结束函数的执行

function* gen5(){
	yield 1;
	yield 2;
	yield 3;
}

var g5=gen5();

// console.log(g5.next());
// console.log(g5.return("kkk"));



//在generator内部调用generator函数
function* foo3(){
	yield "a";
	yield "b";
}

function* bar3(){
	yield "x";
	yield* foo3();
	yield "y";
}

for (var m of bar3()){
	// console.log(m);
}

function* foo5(){
	yield 2;
	yield 3;
	return "foo";
}

function* bar5(){
	yield 1;
	var v=yield* foo5();
	console.log("v:"+v);
	yield 4;
}

var it=bar5();

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());































