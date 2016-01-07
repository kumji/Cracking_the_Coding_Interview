//Write a method to replace all spaces in a string with '%20'. 
//You may assume that the string has sufficient space at the end of the string to hold the additional characters,
//and that you are gicen the "true" length of the string.(Note: if implementing in Java, Please use a character array so that you can perform this operation in place.)

//EXAMPLE 
//Input: "Mr John Smith    ", 13
//Output: "Mr%20John%20Smith"

var replaceBlank = function(array) {
	var i = 0, j = 0;
	var result = [];

	while(i < array.length) {

		if (array[i] != ' ') {
			result[j] = array[i];
			i++,j++;
		}

		while(array[i] == ' ') {
			if(array[i+1] != ' ' && array[i+1] != undefined) {
				console.log(array[i+1]);
				result[j++] = '%';
				result[j++] = '2';
				result[j++] = '0';
			}
			i++;
		}

	}

	return result;

}



var array = [1,2,3,' ',' ',4,5,' ',6,' ',' ',' '];
console.log(replaceBlank(array));
