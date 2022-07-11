function countWords(str){
    str = str.replace(/(^\s*)|(\s*$)/gi,"");
     str = str.replace(/[ ]{2,}/gi," ");
     str = str.replace(/\n /,"\n");
     console.log(str.split(' ').length)
     return str.split(' ').length;
}
countWords('Good morning, I love JavaScript.');
