function alphabetSort(str){
    var a = str.split("");
    var a1 = a.sort();
    var s = a1.join("");
    console.log(s)
    return s;
    }
    alphabetSort('hello');
