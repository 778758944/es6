/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-11-01 11:31:49
 * @version $Id$
 */
var foo="kkk";
var obj={foo};
console.log(obj.foo);


var o={
	method(){
		return "hello es6";
	}
}

console.log(o.method());


var obj2={
	["a"+"bc"]:"world",
	["s"+"ay"](){
		return "hello world"
	}
}
console.log(obj2);

console.log(Object.is(obj2,obj2));//比较两个对象是否严格相等
console.log(Object.is({},{}));

var target={a:1};
var source1={b:2};
var source2={c:3};

Object.assign(target,source1,source2);//将原对象的可枚举属性放入目标对象
//嵌套的属性直接替换

console.log(target);

console.log(Object.assign([1,2,3],[4,5]));


//获取属性的描述对象(Descriptor)
console.log(Object.getOwnPropertyDescriptor(obj,"foo"));
console.log(Object.getOwnPropertyDescriptor([],"length").enumerable);

console.log(Object.keys(obj));//返回对象自身的属性
console.log(Object.getOwnPropertyNames(obj));


console.log(obj.__proto__);

Object.setPrototypeOf(obj,null);//改变一个对象的原型
console.log(Object.getPrototypeOf(obj));


var user={
	name:"kaka",
	age:11
};

Object.observe(user,function(changes){
	console.log(changes);
},["delete"]);


user.name="jack";
user.age=12;

let {x,y,...z}={x:1,y:2,a:3,b:4};

console.log(x,y,z);




























