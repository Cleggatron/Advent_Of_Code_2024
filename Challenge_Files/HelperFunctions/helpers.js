import fs from "fs";

const file_read = (file_path) => {
    let file_contents = fs.readFileSync(`../../Input_Files/${file_path}`, "utf-8");
    return file_contents;
};

const array_reverse = (arr) => {
    const rev_array = []
    for(let el of arr) {
        rev_array.unshift(el)
    }
    return rev_array;
}


export { file_read, array_reverse}