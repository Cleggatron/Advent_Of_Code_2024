import {file_read} from "../HelperFunctions/helpers.js";


const file_contents = file_read("Input_03.txt");

const mul_regex = /mul\(\d+,\d+\)/g;

const muls = file_contents.match(mul_regex);

const multiply_mul = (mul) => {
    const [num_1, num_2] = mul.replace(/([mul\(\)])/g, "").split(",");
    return num_1 * num_2; 
}


