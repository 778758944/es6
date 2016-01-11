/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-11-05 11:36:13
 * @version $Id$
 */
var express=require("express");
var fs=require("fs");
var app=express();

app.set("port",process.env.PORT||3000);

app.use(require("body-parser")());

app.get("/",function(req,res){
	var read=fs.createReadStream(__dirname+"/demo/fetch.html");
	read.pipe(res);
});

app.get("/getdata",function(req,res){
	res.json({
		name:"jack",
		age:12
	})
});

app.get("/test.html",function(req,res){
	console.log("kkk");
	var read=fs.createReadStream(__dirname+"/test.html");
	read.pipe(res);
});

app.post("/getdata",function(req,res){
	console.log(req.body);
	res.json(req.body);
})



app.listen(3000,function(){
	console.log("start at 3000");
});




























