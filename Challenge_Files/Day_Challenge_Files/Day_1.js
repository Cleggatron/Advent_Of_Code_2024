import file_read from "../HelperFunctions/helpers.js"


//Takes the string and splits by line break, then by spaces, and returns the two arrays
//ToDo: Fix Regex for split
const format_file_contents = (file_text) => {
    let arr1 = [];
    let arr2 = [];
    let lines = file_text.replaceAll("\r","").split("\n");
    for(let line of lines){
        let [num1, num2] = line.split("   ");
        arr1.push(num1);
        arr2.push(num2);
    }
    arr1.sort((a,b) => a-b);
    arr2.sort((a,b) => a-b);
    const paired_array = arr1.map((val, index) => [val, arr2[index]]);
    return paired_array;
}


//Take the sorted arrays and reduce through to calculate the distance between the values
const calcuate_distance = (num_arrays) => {
    let total_distance = num_arrays.reduce((acc, [num1, num2]) => {
        return acc + Math.max(num2 - num1, num1 - num2);
    }, 0);
    return total_distance;
}

//calculate the occurences of number in array
const count_occurences = (arr_nums) => {
    const counter = {}
    for(let [num1, num2] of arr_nums){
     if(counter[num2]) {
         counter[num2]++;
     } else {
         counter[num2] = 1;
     }
    }
    return counter
 }

  //calculate result for day 2
  const day2_solution = (arr_nums, counter) => {
    let total = 0;

    for(let [num1] of arr_nums){
        if(counter[num1]){
            total += (num1 * counter[num1])
        }
    }
    return total;
}

const data = file_read("Input_01.txt");
const formatted_data =  format_file_contents(data);
const counter = count_occurences(formatted_data);
const solution = day2_solution(formatted_data, counter);
console.log(solution);


 
