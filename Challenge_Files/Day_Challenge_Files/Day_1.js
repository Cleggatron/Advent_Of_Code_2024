import fs from "fs";

const file_read = () => {
    let file_contents = fs.readFileSync("../../Input_Files/Input_01.txt", "utf8");
    return file_contents;
}


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



console.log(calcuate_distance(format_file_contents(file_read())));
