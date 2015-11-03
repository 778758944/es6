/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-11-03 19:47:01
 * @version $Id$
 */
var obj=new Proxy({},{
	get:function(target,key,receiver){
		console.log(`getting ${key}!`);
		return Reflect.get(target,key,receiver);
	},
	set:function(target,key,value,receiver){
		console.log(`setting ${key}!`);
		return Reflect.set(target,key,value,receiver);
	}
});
// obj.count=1
// ++obj.count;
// ++obj.count;

var proxy=new Proxy({},{
	get:function(target,property){
		return 35;
	}
});

console.log(proxy.time);

// var validator={
// 	set:function(obj,prop,value){
// 		if(!Number.isInteger(value)){
// 			console.log("error");
// 			return;
// 			// throw new TypeError("the age wrong");
// 		}
// 		if(value>200){
// 			console.log("error2");
// 			return;
// 			// throw new RangeError("the age seems invaid");
// 		}
// 		obj[prop]=value;
// 	}
// }

// var person=new Proxy({},validator);
// person.age=500;
// console.log(person.age);


var handle2={
	has(target,key){
		if(key[0]==="_"){
			return false;
		}
		return key in target
	}
}


var target={_prop:"foo",prop:"foo"};
var proxy3=new Proxy(target,handle2);
console.log("_prop" in proxy3);

























