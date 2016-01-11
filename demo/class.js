/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-11-11 20:03:44
 * @version $Id$
 */
 "use strict";
class Point{
	constructor(x,y){//构造方法
		this.x=x;
		this.y=y;
	}

	toString(){
		return "("+this.x+","+this.y+")";
	}
}

// console.log(typeof Point);
// console.log(Object.keys(Point.prototype));//不可枚举不能被keys
// console.log(Object.getOwnPropertyNames(Point.prototype));//获取只属性与自身的属性名
var point=new Point(1,2);//实例化对象

// console.log(point);

// console.log(Point.name);

var MyClass=class Me{
	getClassName(){
		return Me.name;
	}
}

//简写形式
var MyClass=class {

}

var myc=new MyClass();

//类的继承
class ColorPoint extends Point {
	constructor(x,y,color){
		super(x,y);//调用父类的constructor,必须调用
		this.color=color;
	}

	toString(){
		return this.color+" "+super.toString();//调用父类的toString()
	}
}
var colorp=new ColorPoint(3,5,"red");
console.log(colorp);


class A extends Object {

}

console.log(A.__proto__==Object);
console.log(A.prototype.__proto__===Object.prototype);
//从子类获取父类
console.log(Object.getPrototypeOf(ColorPoint));

//get set方法
class MyClass2{
	constructor(){
		this.prop="kaka";
	}

	get prop(){
		return "getter";
	}

	set prop(value){
		console.log("setter:"+value);
	}
}

var myc2=new MyClass2();
myc2.prop=123;
console.log(myc2.prop);

//generator方法
// class Foo{
// 	constructor(...args){
// 		this.args=args;
// 	}
// 	*[Symbol.iterator](){
// 		for(var s of this.args){
// 			yield s;
// 		}
// 	}
// }

// for(var ss of new Foo("hello","world")){
// 	console.log(ss);
// }

//静态方法
class Foo{
	static classMrthod(){
		return "hello";
	}
}

console.log(Foo.classMrthod());

//new.target

function Person(name){
	console.log(new.target);
}

new Person();


























