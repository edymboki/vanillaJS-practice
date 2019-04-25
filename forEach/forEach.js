//@ts-check

function vowelCount(str){
    let splitArr = str.split("");
    let obj = {};
    let vowels = "aeiou";

    splitArr.forEach(function(letter){
        if(vowels.indexOf(letter.toLowerCase()) !== -1){
            if(letter.toLowerCase() in obj){
                obj[letter.toLowerCase()]++
            } else {
                obj[letter.toLowerCase()] = 1;
            }
        }
    });
    return obj;
}