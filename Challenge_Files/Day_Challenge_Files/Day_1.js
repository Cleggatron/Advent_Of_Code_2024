import fs from "fs";

const file_read = () => {
    let file_contents = fs.readFileSync("../../Input_Files/Input_01.txt", "utf8");
    return file_contents;
}


//Takes the string and splits by line break, then by spaces, and returns the two arrays
const format_file_contents = (file_text) => {
    let arr1 = [];
    let arr2 = [];
    let lines = file_text.replaceAll("\r","").split("\n");
    for(let line of lines){
        let [num1, num2] = line.split("   ");
        arr1.push(num1);
        arr2.push(num2);
    }
    return [arr1, arr2]
}




