/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-11-04 19:18:48
 * @version $Id$
 */
var m=new Map();//构建可以用任何基本类型作为健的对象
var o={p:"Hello World"};

m.set(o,"content");
// console.log(m.get(o));

// console.log(m.has(o));

m.delete(o);

// console.log(m.has(o));
var map2=new Map([["name","jack"],["title","Author"]]);

console.log(map2.size)//返回map的大小
// console.log(map2.get("name"));
map2.set("name","lucy");
// console.log(map2.get("name"));


map2.set(["s"],"hahah");
// console.log(map2.get(["s"]));
for(var key of map2.keys()){//遍历器生成函数
	// console.log(key);
}

for(var value of map2.values()){
	// console.log(value);
}


for(var entri of map2.entries()){
	// console.log(entri);
}


var map3=new Map().set(true,7).set({foo:3},["abc"]);
console.log(map3);

console.log([...map3].length);


























