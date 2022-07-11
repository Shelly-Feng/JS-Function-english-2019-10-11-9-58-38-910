function reverseString(str){
    let newStr = str.split("").reverse().join("");
    console.log(newStr)
    return newStr;
}
reverseString('hello');
