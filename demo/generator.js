/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-11-04 20:24:52
 * @version $Id$
 */
function* helloWorldGenerator(){//Generator生成方式
	yield "hello";
	yield "world";
	return "ending";
}
var hw=helloWorldGenerator();//生成一个遍历器
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
console.log(a.next());
console.log(a.next(12));
console.log(a.next(13));






























