/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-11-03 20:20:19
 * @version $Id$
 */
var buf=new ArrayBuffer(32);//建立存储二进制数据的一段内存
// console.log(buf);

var dataView=new DataView(buf);
// console.log(dataView.getUint8(buf));

var buffer=new ArrayBuffer(300);
// console.log(buffer.byteLength);

var b=new ArrayBuffer(8);
var v1=new Int32Array(b);//从头到尾
var v2=new Uint8Array(b,2);//开始与2
var v3=new Int16Array(b,2,2);//开始与2，长度为2

console.log(v1);
console.log(v2);
console.log(v3);
































