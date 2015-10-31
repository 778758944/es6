/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-10-31 11:43:22
 * @version $Id$
 */
"use strict";

for(var codepoint of "foo"){
	// console.log(codepoint);
}

// console.log("abc".charAt(0));
// console.log("𠮷".charAt(0));
// console.log("𠮷".at(0));

var s="hello world";
// console.log(s.startsWith("hello"));
// console.log(s.endsWith("d"));
// console.log(s.includes("o"));

console.log("x".repeat(3));

// var div1=document.getElementById("div1");
// div1.innerHTML=`<h1>${s}</h1>`;

var aa=5;
var bb=10;


function tag(s,t1,t2){
	console.log(s);
	console.log(t1);
	console.log(t2);

	return "OK";
}


// console.log(tag `hello ${aa+bb} world ${aa*bb}`);
console.log(String.raw`hi\n${2+3}`);
























