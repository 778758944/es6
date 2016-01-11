"use strict";
var babel=require("babel-core");
console.log(babel.transformFile);

babel.transformFile("test2.js",function(err,data){
     console.log(data.code);
     console.log(data.map);
     console.log(data.ast);
});
