module.exports = function check(str, bracketsConfig) {
    let  obj = Object.fromEntries(arguments[1]),
        openBracket = Object.keys(Object.fromEntries(arguments[1])),
        closeBracket = Object.values(Object.fromEntries(arguments[1])),
        sameBracket = openBracket.map((el,i)=>el==closeBracket[i]?el:null).filter(el=>el),
        temp = [];

    str = str.split('');

    for (let i=0;i<str.length;i++) {
        if (openBracket.includes(str[i]) && !closeBracket.includes(str[i])) {
            temp.push(str[i]);
        } else if (closeBracket.includes(str[i]) && !openBracket.includes(str[i])) {
            if (obj[temp[temp.length-1]] == str[i]) {temp.pop()} else {return false};
        } else if (sameBracket.includes(str[i])) {
            if (temp[temp.length-1] != str[i]) {temp.push(str[i])} else {temp.pop()}
        }
    }
    if (temp.length!=0) {return false}
    return true;
}
