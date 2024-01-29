import * as zlib from "zlib";
import fs from "fs";
import path from "path";
import {getFileData} from "../utils.js";

const decompress = async () => {
  try {
    const {__dirname} = getFileData(import.meta.url);
    const pathToUncompress = path.resolve(__dirname, './files/archive.gz');
    const pathToOutput = path.resolve(__dirname, './files/fileToCompress.txt')
    const decomposeStream = zlib.createBrotliDecompress()
    const readableStream = fs.createReadStream(pathToUncompress)
    const writableStream = fs.createWriteStream(pathToOutput)
    readableStream.pipe(decomposeStream).pipe(writableStream)
  } catch (err) {
    console.log(err)
  }
};

await decompress();