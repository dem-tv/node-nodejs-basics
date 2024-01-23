import fs from "fs";
import {getFileData} from "../utils.js";
import path from "path";

const {__dirname} = getFileData(import.meta.url);

const read = async (pathToFile) => {
  try{
    const readable = fs.createReadStream(pathToFile)
    readable.pipe(process.stdout)
  } catch(err){
    console.log(err)
  }
};

await read(path.resolve(__dirname, 'files/fileToRead.txt'));