class A{
	constructor(){
		this.age=12;		
	}

}

var a=new A();

console.log(a.age);
var x={name:"jack"};
var y={age:12};
var c={};

Object.assign(c,x,y);

console.log(c);
