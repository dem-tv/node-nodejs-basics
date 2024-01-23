import * as zlib from "zlib";
import fs from "fs";
import path from "path";
import {getFileData} from "../utils.js";

const {__dirname} = getFileData(import.meta.url);

const decompress = async (pathToUncompress, pathToOutput) => {
  try {
    const decomposeStream = zlib.createBrotliDecompress()
    const readableStream = fs.createReadStream(pathToUncompress)
    const writableStream = fs.createWriteStream(pathToOutput)
    readableStream.pipe(decomposeStream).pipe(writableStream)
  } catch (err) {
    console.log(err)
  }
};

await decompress(path.resolve(__dirname, './files/archive.gz'), path.resolve(__dirname, './files/fileToCompress.txt'));