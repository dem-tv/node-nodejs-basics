import * as path from "path";
import {getFileData, getPathInfo} from "../utils.js";
import fsp from 'node:fs/promises';

const copy = async () => {
  const {__dirname} = getFileData(import.meta.url);
  const filesDirPath = path.resolve(__dirname, './files')
  const filesCopyDirPath = path.resolve(__dirname, './files_copy')
  const {isFileExist: isFilesDirExist} = await getPathInfo(filesDirPath)
  const {isFileExist: isFilesCopyDirExist} = await getPathInfo(filesCopyDirPath)
  if (!isFilesDirExist || isFilesCopyDirExist) {
    throw new Error('FS operation failed')
  }
  await fsp.cp(filesDirPath, filesCopyDirPath, {recursive: true})
};

await copy();
