/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-11-03 20:41:37
 * @version $Id$
 */
var set=new Set();//不会重复，并拥有可以遍历的属性,新数据结构
[1,2,3,4,1,2,3,4].map(x=>set.add(x));
var name="Jack";
var str=`hello,${name}`;
console.log(str);

// console.log(set);
// for(var i of set){
// 	console.log(i);
// }

// var set2=new Set([1,2,3,4,1,2,3,4]);//接受数组
// // console.log([...set2]);//转化为数组
// var set3=new Set().add(1).add(1).add(2);

// console.log(set3.size);
// console.log(set3.has(1));
// console.log(set3.has(2));
// console.log(set3.has(3));
// set3.delete(2);
// console.log(set3.has(2));
// set3.clear();
// console.log(set3);


// var arr1=[1,2,3];
// var arr2=[2,3,4];

// //并集
// var union=new Set([...arr1,...arr2]);
// console.log(union);
// //交集
// var interset=new Set([...arr1].filter(x=>arr2.has(x)));
// conosole.log(interset);



























