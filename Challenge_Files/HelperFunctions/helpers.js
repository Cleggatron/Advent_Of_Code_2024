import fs from "fs";

const file_read = (file_path) => {
    let file_contents = fs.readFileSync(`../../Input_Files/${file_path}`, "utf-8");
    return file_contents;
};


export default file_read