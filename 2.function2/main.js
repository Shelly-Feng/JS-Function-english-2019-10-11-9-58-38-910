function palindrome(str){
    let newStr = str.split("").reverse().join("");
    console.log(str === newStr)
    return str === newStr;
}
palindrome('hello'); 
palindrome('abcba');
