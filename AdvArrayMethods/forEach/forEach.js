//@ts-check

//forEach Functions

function doubleValues(arr){
    let newArr = [];
    arr.forEach(function(val){
        newArr.push(val * 2);
    });
    return newArr;
}

function onlyEvenValues(arr){
    let newArr = [];
    arr.forEach(function(val){
        if(val % 2 === 0){
            newArr.push(val);
        } 
    });
    return newArr;
}

function showFirstAndLast(arr){
    let newArr = [];
    arr.forEach(function(val){
        newArr.push(val[0] + val[val.length-1]);
    });
    return newArr;
}

function addKeyAndValue(arr,key,value){
    let newArr = [];
    arr.forEach(function(val){
        val[key] = value;
        newArr.push(val);
    });
    return newArr;
}

function vowelCount(str){
    let splitArr = str.split("");
    let obj = {};
    let vowels = "aeiou";

    splitArr.forEach(function(val){
        if(vowels.indexOf(val.toLowerCase()) !== -1){
            if(val.toLowerCase() in obj){
                obj[val.toLowerCase()]++
            } else {
                obj[val.toLowerCase()] = 1;
            }
        }
    });
    return obj;
}