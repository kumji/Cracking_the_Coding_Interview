//Implement a method to perform basic string compression using the counts of repeated characters. 
//For example, the string aabcccccaaa would become a2b1c5a3. 
//If the "compressed" string would not become smaller than the original string, your method should return
//the original string. You can assume the string has only upper and lower case letters(a-z).

var compression = function(array) {
	var tempChar, result = [];
	result[0] = tempChar = array[0];
	var i = j = count = 1;
	

	while(i < array.length) {

		if(array[i] == tempChar) {
			count++;
		}
		else {
			result[j++] = count;
			count = 1;
			result[j++] = tempChar = array[i];
		}
		i++;
	}

	result[j] = count;

	if(i < j) 
		return array;
	else
		return result;
}

var array = ['c','c','c','c','b','b','b','e'];
console.log(compression(array));