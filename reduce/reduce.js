//@ts-check

//Reduce Functions
function extractValue(arr, key){
    return arr.reduce(function(accumulator, nextValue){
        accumulator.push(nextValue[key]);
        return accumulator;
    }, []);
}

function vowelCount(str){
    let vowels = "aeiou";
    str = str.toLowerCase();
    return str.split('').reduce(function(accumulator, nextValue){
        if(vowels.indexOf(nextValue) !== -1){
            if(nextValue in accumulator){
                accumulator[nextValue]++;
            } else {
                accumulator[nextValue] = 1;
            }
        }
        return accumulator;
    }, {});
 }

 function addKeyAndValue(arr, key, value){
    return arr.reduce(function(accumulator, nextValue){
        nextValue[key] = value;
        accumulator.push(nextValue);
        return accumulator;
    }, []);
}

function partition(arr, callback){
    return arr.reduce(function(accumulator, nextValue){
        if(callback(nextValue)){
            accumulator[0].push(nextValue);
        } else {
            accumulator[1].push(nextValue);
        }
        return accumulator;
    }, [[], []])
}