//Given two strings, write a method to decide if one is a permutation of the other.

var permutation = function(array1, array2) {
	var letter_check = [];

	if (array1.length != array2.length) {
		console.log('not a permutaion.');
		return false;
	}

	for(var i = 0; i < array1.length; i++) {
		letter_check[array1[i]] = 1;
	}

	for(i = 0; i < array2.length; i++) {
		if(letter_check[array2[i]] != 1) {
			console.log('not a permutation.');
			return false;
		}
	}

	console.log('permutation.');
	return true;
}


var array1 = ['d','o','g','!'];
var array2 = ['d','g','o'];

permutation(array1, array2);