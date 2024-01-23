import {createHash} from "node:crypto"
import {getFileData} from "../utils.js"
import fs from "fs"
import path from "path";

const {__dirname} = getFileData(import.meta.url);

const calculateHash = async (pathToFile) => {
  try {
    const hash = createHash('sha256')
    const text = fs.readFileSync(pathToFile)
    hash.update(text)
    console.log(hash.digest('hex'))
  } catch (err) {
    console.log(err)
  }
};

await calculateHash(path.resolve(__dirname, 'files/fileToCalculateHashFor.txt'));