/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-11-04 19:47:17
 * @version $Id$
 */
var arr=[1,2,3,4,5];

var iter=arr[Symbol.iterator]();

// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

var iterable={
	0:"a",
	1:"b",
	2:"c",
	length:3,
	[Symbol.iterator]:Array.prototype[Symbol.iterator]//部署遍历接口
}

for(var item of iterable){
	// console.log(item);
}
var str="hello";

for(var o of str){
	// console.log(o);
}

var obj={
	data:"jack",
	age:12,
	[Symbol.iterator](){
		var self=this;
		var index=0;
		var keys=Object.keys(self);
		return {
			next(){
				if(index<keys.length){
					var num=index;
					index++;
					return {
						value:self[keys[num]],
						done:false
					}
				}
				else{
					return {value:undefined,done:true};
				}
			}
		} 
	}
}
for(var value of obj){
	console.log(value);
}
































