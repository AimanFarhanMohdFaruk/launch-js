let words = ["go", "ahead", "and", "jump"];
words.sort((a, b) => a.length - b.length);
console.log(words);

// sort by default converts elements to string
// and then sorts them.
