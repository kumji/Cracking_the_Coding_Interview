//Assumed you have a method isSubstring which checks if one word is a substring of another.
//Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring
//e.g., "waterbottle" is a rotation of "erbottlewat"


var isSubstring = function(s1, s2) {
	if(s1.length == s2.length) {
		var s1s1 = s1+s1;
		console.log(s1s1.indexOf(s2));
		if(s1s1.indexOf(s2) != -1) 
			return true;
		else
			return false;
	}
	return false;
}

var s1 = 'waterbottle';
var s2 = 'erbottlewat';

if(isSubstring(s1,s2))
	console.log('It is rotated.');
else
	console.log('It is not rotated.');

