function cycleSortString(s) {
    if (!s || s.length <= 1) {
        return s;
    }

    const n = s.length;
    const arr = s.split('');

    // Traverse the array to find the maximum element
    let max = arr[0];
    for (let ch of arr) {
        if (ch > max) {
            max = ch;
        }
    }

    // Create a count array to store the frequency of each character
    const countArray = Array.from({ length: max.charCodeAt(0) + 1 }, () => 0);
    for (let ch of arr) {
        countArray[ch.charCodeAt(0)]++;
    }

    // Reconstruct the array based on the count array
    let index = 0;
    for (let i = 0; i <= max.charCodeAt(0); i++) {
        while (countArray[i] > 0) {
            arr[index] = String.fromCharCode(i);
            index++;
            countArray[i]--;
        }
    }

    return arr.join('');
}

// Example usage:
const inputString = "abcdeedcba";
console.log("intput value : " , inputString);
const sortedString = cycleSortString(inputString);
console.log("result value : ",sortedString);
