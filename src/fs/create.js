import * as path from "path";
import {getFileData, getPathInfo} from "../utils.js";
import fsp from 'node:fs/promises';

const create = async () => {
  const {__dirname} = getFileData(import.meta.url);
  const pathToFile = path.resolve(__dirname, './files/fresh.txt')
  const {isFileExist} = await getPathInfo(pathToFile)
  if (isFileExist) {
    throw new Error('FS operation failed')
  }
  await fsp.appendFile(pathToFile, 'I am fresh and young')
};

await create();