import {getFileData, getPathInfo} from "../utils.js";
import path from "path";
import fsp from 'node:fs/promises';

const remove = async () => {
  const {__dirname} = getFileData(import.meta.url);
  const pathToFile = path.resolve(__dirname, 'files/fileToRemove.txt')
  const {isFileExist} = await getPathInfo(pathToFile)
  if (!isFileExist) {
    throw new Error('FS operation failed')
  }
  await fsp.unlink(pathToFile)

};

await remove();