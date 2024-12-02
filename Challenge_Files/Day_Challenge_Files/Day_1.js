import fs from "fs";

const file_read = () => {
    let file_contents = fs.readFileSync("../../Input_Files/Input_01.txt", "utf8");
    return file_contents;
}

