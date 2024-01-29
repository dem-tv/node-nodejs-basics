import {getFileData} from "../utils.js"
import fs from "fs"
import path from "path";
import crypto from "crypto";

const calculateHash = async () => {
  try{
    const {__dirname} = getFileData(import.meta.url);
    const fullPathToFile = path.resolve(__dirname, 'files/fileToCalculateHashFor.txt')
    const fd = fs.createReadStream(fullPathToFile);
    const hash = crypto.createHash('sha256');
    hash.setEncoding('hex');
    process.stdout.write(`Calculated hash for file ${fullPathToFile}:\n`)
    fd.pipe(hash).pipe(process.stdout);
  } catch(err){

  }
};

await calculateHash();