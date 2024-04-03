function solution(inputString) {
    let reverseStr = "";
    for (let i=inputString.length-1; i >= 0; i--) {
        reverseStr += inputString[i];
    }
    if (inputString === reverseStr) {
        return true;
    } else {
        return false;
    }
}
