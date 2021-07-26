/* sum of the arr*/
function sum(arr) {
    return arr.reduce((x, y) => x + y, 0);
}

/*multiplication of the arr*/
function mul(arr) {
    return arr.reduce((x, y) => x * y, 1);
}

/* string reverse*/
function reverseString(str) {
    return str.split("").reverse().join("");
}

/*find length of longest word*/
function findLongestWord(words) {
    let maxLength = 0;

    for (const i in words) {
        maxLength = max(maxLength, words[i].length);
    }
    return maxLength;
}

/*Q7finding long words than given length*/
function filterLongWords(words, length) {
    const longWords = [];
    let j = 0;
    for (const i in words) {
        if (words[i].length > length) {
            longWords[j] = words[i];
            j++
        }
    }
    return longWords;
}