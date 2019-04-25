//@ts-check

//Some and Every Functions
function hasOddNumber(arr){
    return arr.some(function(val){
        return val % 2 !== 0;
    });
}

function hasAZero(num){
    return (num +'').split('').some(function(val){
        return val === '0';
    });
}

function hasOnlyOddNumbers(arr){
    return arr.every(function(val){
        return val !== 0;
    });
}

function hasNoDuplicates(arr){
    return arr.some(function(val){
        return !(val in arr);
    });
}

function hasCertainKey(arr, key){
    return arr.every(function(val){
        return val[key];
    });
}

function hasCertainValue(arr, key, searchValue){
    return arr.every(function(val){
        return val[key] === searchValue;
    });
}