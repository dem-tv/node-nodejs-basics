import fs from "fs";
import path from "path";
import {getFileData} from "../utils.js";

const {__dirname} = getFileData(import.meta.url);

const write = async (pathToFile) => {
  const writable = fs.createWriteStream(pathToFile)
  process.stdin.pipe(writable)
};

await write(path.resolve(__dirname, 'files/fileToWrite.txt'));