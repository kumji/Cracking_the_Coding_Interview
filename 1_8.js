var isSubString = function(s1, s2) {
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

if(isSubString(s1,s2))
	console.log('It is rotated.');
else
	console.log('It is not rotated.');

