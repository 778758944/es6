/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-11-12 19:14:26
 * @version $Id$
 */
function testable(target){
	target.isTestable=true;
}

@testable
class MyTestableClass{}

console.log(MyTestableClass.isTestable);
