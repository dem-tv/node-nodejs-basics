import fs from "fs";
import {getFileData} from "../utils.js";
import path from "path";


const read = async () => {
  try {
    const {__dirname} = getFileData(import.meta.url);
    const pathToFile = path.resolve(__dirname, 'files/fileToRead.txt')
    const readable = fs.createReadStream(pathToFile)
    readable.pipe(process.stdout)
  } catch (err) {
    console.log(err)
  }
};

await read();