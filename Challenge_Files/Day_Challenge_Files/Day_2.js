import file_read from "../HelperFunctions/helpers.js"

const file_contents = file_read("Input_02.txt");

const lines_to_array = (data) => {
    let lines = data.replace("\r", "").split("\n").map(line => line.replace("\r", "").split(" "));
    return lines
}

console.log(file_contents);

console.log(lines_to_array(file_contents))