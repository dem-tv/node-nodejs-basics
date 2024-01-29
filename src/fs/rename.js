import path from "path";
import {getFileData, getPathInfo} from "../utils.js";
import fsp from "node:fs/promises";

const rename = async () => {
  const {__dirname} = getFileData(import.meta.url);
  const oldFullPath = path.resolve(__dirname, 'files/wrongFilename.txt')
  const newFullPath = path.resolve(__dirname, 'files/properFilename.md')
  const {isFileExist: isOldFileExist} = await getPathInfo(oldFullPath)
  const {isFileExist: isNewFileExist} = await getPathInfo(newFullPath)
  if (!isOldFileExist || isNewFileExist) {
    throw new Error('FS operation failed')
  }
  await fsp.rename(oldFullPath, newFullPath)
};

await rename();