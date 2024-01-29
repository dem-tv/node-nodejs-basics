import path from "path";
import {getFileData} from "../utils.js";
import * as zlib from "zlib";
import fs from "fs";

const compress = async () => {
  try {
    const {__dirname} = getFileData(import.meta.url);
    const pathToInput = path.resolve(__dirname, './files/fileToCompress.txt')
    const pathToOutput = path.resolve(__dirname, './files/archive.gz')
    const compressStream = zlib.createBrotliCompress();
    const readableStream = fs.createReadStream(pathToInput)
    const writableStream = fs.createWriteStream(pathToOutput)
    readableStream.pipe(compressStream).pipe(writableStream)
  } catch (err) {
    console.log(err)
  }
};

await compress();