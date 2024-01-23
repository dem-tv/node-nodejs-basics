import path from "path";
import {getFileData} from "../utils.js";
import * as zlib from "zlib";
import fs from "fs";

const {__dirname} = getFileData(import.meta.url);

const compress = async (pathToInput, pathToOutput) => {
  try {
    const compressStream = zlib.createBrotliCompress();
    const readableStream = fs.createReadStream(pathToInput)
    const writableStream = fs.createWriteStream(pathToOutput)
    readableStream.pipe(compressStream).pipe(writableStream)
  } catch(err){
    console.log(err)
  }
};

await compress(path.resolve(__dirname, './files/fileToCompress.txt'), path.resolve(__dirname, './files/archive.gz'));