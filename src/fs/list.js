import {getFileData} from "../utils.js";
import path from "path";
import fs from "fs";

const {__dirname} = getFileData(import.meta.url);

const list = async (filesDirPath) => {
  try{
    const files = fs.readdirSync(filesDirPath)
    files.forEach(file => {
      console.log(`${file}`)
    })
  } catch (err){
    throw new Error('FS operation failed')
  }
};

await list(path.resolve(__dirname, './files'));