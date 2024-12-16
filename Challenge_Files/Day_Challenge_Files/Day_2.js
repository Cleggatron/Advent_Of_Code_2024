import {file_read, array_reverse } from "../HelperFunctions/helpers.js"

const file_contents = file_read("Input_02.txt");

const lines_to_array = (data) => {
    let lines = data.replace("\r", "").split("\n").map(line => line.replace("\r", "").split(" "));
    return lines
}

const check_increasing = (arr) => {
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < arr[i-1] || (arr[i] - arr[i-1]) < 1 || (arr[i] - arr[i-1]) > 3){
            console.log(arr)
        
            return false;
        }
    }
    return true;
}

const check_decreasing = (arr) => {
    for(let i = 1; i < arr.length; i++){
        if(arr[i-1] < arr[i] || (arr[i-1] - arr[i]) < 1 || (arr[i-1] - arr[i]) > 3){
            console.log(arr)
            return false;
        }
    }
    return true;
}

const check_validity = (line) => {
    const increasing = line[0] < line[line.length - 1];
    
    if(increasing){
        return check_increasing(line);
    } else {
        return check_decreasing(line);
    }
}

const count_valid = (arr) => {
    let total = 0;
    for(let line of arr) {
        if(check_validity(line)){
            total++;
        }
    }
    return total;
}
console.log(count_valid(lines_to_array(file_contents)));

