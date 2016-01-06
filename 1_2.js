//implement a function 'reverse' which reverse a null-terminated string.

var reverse = function(array) {
	var end = array.length - 2;

	for(var i = end; i > end/2; i--) {
		var temp = array[i];
		array[i] = array [end - i];
		array[end - i] = temp;
	}
	return array;
}


var array = [1,2,3,4,5,6,null];
console.log(reverse(array));