import fs from "fs";
import path from "path";
import {getFileData} from "../utils.js";


const write = async () => {
  const {__dirname} = getFileData(import.meta.url);
  const pathToFile = path.resolve(__dirname, 'files/fileToWrite.txt')
  const writable = fs.createWriteStream(pathToFile)
  process.stdin.pipe(writable)
};

await write();