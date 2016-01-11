/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-11-10 20:07:32
 * @version $Id$
 */
function timeout(ms){
	return new Promise((a,b)=>{
		setTimeout(a,ms,"done");
	});
}

timeout(100).then((value)=>{
	// console.log(value);
});

//promise对象返回promise的状态由最后一个promise决定
var p1=new Promise(function(resolve,reject){
	setTimeout(()=>reject(new Error("fail")),3000);
});

var p2=new Promise(function(resolve,reject){
	setTimeout(()=>resolve(p1),1000);
});

// console.log(p1);


// p2.then((result) => console.log(result),(error)=>console.log(error));

//catch方法,捕获错误
var p3=new Promise(function(resolve,reject){
	// throw new Error("test");
})

// p3.catch((error)=>{console.log(error)});
// var jsPromise=Promise.resolve($.get("http://v2.foodinzen.inzen.com.cn/menu2.json"));
// //返回状态为resolve的promise
// jsPromise.then(function(data){
// 	console.log(data);
// })

var p=Promise.resolve("Hello");
p.then(function(txt){
	// console.log(txt);
});

function* gen(){
	var result=yield fetch("http://v2.foodinzen.inzen.com.cn/menu.json");
	// console.log(result);
}

// var g=gen();
// var result=g.next();
// // console.log(result);

// result.value.then(function(data){
// 	g.next(data.json());
// },function(){
// 	console.log("error");
// });

var ajaxPromise=function(url){
	return new Promise(function(resolve,rejected){
		$.get(url,function(data){
			resolve(data);
		})
	})
}

var asyncData=async function(){
	var f1=await ajaxPromise("http://v2.foodinzen.inzen.com.cn/menu.json");
	console.log(f1);
}


asyncData();






















