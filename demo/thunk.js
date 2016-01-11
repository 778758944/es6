/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-11-11 19:18:33
 * @version $Id$
 */
// var thunkify=require("thunkify");
// var fs=require("fs");
// var co=require("co");


// //thunk函数的用法

// var readFile=thunkify(fs.readFile);

// // read("let.js")(function(err,str){
// // 	console.log(str.toString());
// // });

// //thunk函数和generator函数结合
// var gen=function* (){
// 	var r1=yield readFile("a.txt");
// 	console.log(r1.toString());
// 	var r2=yield readFile("b.txt");
// 	console.log(r2.toString());
// }

// // var g=gen();
// // var r1=g.next();
// // r1.value(function(err,data){
// // 	if(err) throw err;
// // 	var r2=g.next(data);
// // 	r2.value(function(err,data){
// // 		if(err) throw err;
// // 		g.next(data);
// // 	})
// // })
// function run(fn){
// 	var gen=fn();
// 	function next(err,data){
// 		var result=gen.next(data);
// 		if(result.done) return;
// 		result.value(next);
// 	}
// 	next();
// }

// co(gen);

//async
var readFile2=function(fileName){
	return new Promise(function(resolve,reject){
		fs.readFile(fileName,function(error,data){
			if(error) reject(error);
			resolve(data);
		});
	});
};

var asyncReadFile=async function(){
	var f1=await readFile2("a.txt");
	var f2=await readFile2("b.txt");
	console.log(f1.toString());
	console.log(f1.toString());
}

asyncReadFile();


























