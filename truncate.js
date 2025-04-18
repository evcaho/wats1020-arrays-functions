// This is the file where you will write the Truncate Words function and related code.

var truncateWords = function(longText, numWords) {
	// 1. Use the split() function to split the String into an Array
	var words = longText.split(" ");
	// 2. Use the length attribute to find the number of words in the Array
	var length = words.length;
	// 3. Determine how many words should be removed from the String
	// 4. Remove those words from the Array
	var shorter = words.slice(0, numWords)
	// 6. Use the join() function to convert the Array back into a String
	shortArray = shorter.join(' ')
	// 7. Return the truncated String from the Function
	// 5. Add an additional String item to the Array to put an ellipses in: "..."
	var shortText = shortArray + "..."
	return shortText
}

// This portion of the script is meant to call and display the result of your Function.
// You do not need to change the following lines, but you may change them if you 
// are experimenting further or pursuing stretch goals.
var originalText = "There are two hard things in Computer Science: Cach invalidation, naming things, and off-by-one errors.";
var wordLimit = 8;
var shortText = truncateWords(originalText, wordLimit);
console.log('originalText: ' + originalText);
console.log('shortText: ' + shortText);
