import {file_read} from "../HelperFunctions/helpers.js";


const file_contents = file_read("Input_03.txt");

const mul_regex = /mul\(\d+,\d+\)/g;

const muls = file_contents.match(mul_regex);

const multiply_mul = (mul) => {
    const [num_1, num_2] = mul.replace(/([mul\(\)])/g, "").split(",");
    return num_1 * num_2; 
}

let total = 0;

for(let mul of muls){
    total+= multiply_mul(mul);
}

const enhanced_mul_regex = /mul\(\d+,\d+\)|(do\(\))|don't\(\)/g
const enhanced_muls = file_contents.match(enhanced_mul_regex); 

const handle_enhanced_muls = (muls) => {
    let enabled = true;
    let total = 0;
    const do_regex = /do\(\)/
    const do_dont_regex = /do\(\)|don't\(\)/g;

    for(let mul of muls){
        if(mul.match(do_dont_regex)){
            if(mul.match(do_regex)){
                enabled = true;
            } else {
                enabled = false
            }
            continue;
        }

        if(enabled){
            total += multiply_mul(mul);
        }
    }

    return total;
}

console.log(handle_enhanced_muls(enhanced_muls));



