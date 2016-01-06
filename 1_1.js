//Implement an algorithm to determine if a string has all unique characters. 
//What if you cannot use additional data structures?


var isUniqueChars = function(str) {
	if(str.length > 26){
		return false;
	}
	var char_set = [];

	for (var i = 0; i < str.length; i++) {
		var char = str[i];

		if(char_set[char]) 
			return false;
		
		char_set[char] = true;
	}

	return true;
}

var str = ['a','b','c','f','e'];

if(isUniqueChars(str))
	console.log('This ' + str + ' has all unique characters.');
else 
	console.log('This ' + str + ' has not all unique characters.');
