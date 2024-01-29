import path from "path";
import {getFileData, getPathInfo} from "../utils.js";
import fsp from "node:fs/promises";

const read = async () => {
  const {__dirname} = getFileData(import.meta.url);
  const pathToFile = path.resolve(__dirname, './files/fileToRead.txt')
  const {isFileExist} = await getPathInfo(pathToFile)
  if (!isFileExist) {
    throw new Error('FS operation failed')
  }
  const text = await fsp.readFile(pathToFile, {encoding: "ascii"});
  console.log(text)
};

await read();