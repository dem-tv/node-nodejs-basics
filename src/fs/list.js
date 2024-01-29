import {getFileData, getPathInfo} from "../utils.js";
import path from "path";
import fsp from 'node:fs/promises';

const list = async () => {
  const {__dirname} = getFileData(import.meta.url);
  const filesDirPath = path.resolve(__dirname, './files')
  const {isFileExist} = await getPathInfo(filesDirPath)
  if (!isFileExist) {
    throw new Error('FS operation failed')
  }
  const files = await fsp.readdir(filesDirPath)
  files.forEach(file => {
    console.log(`${file}`)
  })
};

await list();