// Challenge

// Using the JavaScript language, have the function SnakeCase(str) take the str parameter being
//  passed and return it in proper snake case format where each word is lowercased and separated
//  from adjacent words via an underscore. The string will only contain letters and some
//  combination of delimiter punctuation characters separating each word.

// For example: if str is "BOB loves-coding" then your program should return the string
//  bob_loves_coding.

// Sample Test Cases
// Input:"cats AND*Dogs-are Awesome"

// Output:"cats_and_dogs_are_awesome"

// Input:"a b c d-e-f%g"

// Output:"a_b_c_d_e_f_g"

/* jshint esversion:6 */
function SnakeCase(str) {
	let myStr = str.toLowerCase();
	myStr = myStr.match(/[a-z]+/gi, function(char) {
		return char;
	});
	myStr = myStr.join('_');
	return myStr;
}

// console.log(SnakeCase("cats AND*Dogs-are awesome"));
console.log(SnakeCase('a b c d-e-f%g'));
