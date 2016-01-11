/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-11-12 19:34:19
 * @version $Id$
 */
//引入模块
import {firstName,lastName,year} from "./profile";
console.log(firstName,lastName,year);

//重命名
import {firstName as name} from "./profile";

//整体加载
import * as circle form "./profile";

//module加载
module circle from "./circle";

//默认输出,对应的import不需要使用大括号
export default function foo(){
	console.log("foo");
}





















