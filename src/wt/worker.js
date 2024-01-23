import {
  Worker, isMainThread, parentPort, workerData,
} from 'node:worker_threads'
import {getFileData} from "../utils.js";
import path from "path";

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

// This function sends result of nthFibonacci computations to main thread
const sendResult = () => {
  const {__dirname} = getFileData(import.meta.url);
  if (isMainThread) {
    const workerPromise = new Promise((resolve, reject) => {
      const worker = new Worker(path.resolve(__dirname, 'worker.js'), {
        workerData: 20,
      });
      worker.on('message', resolve);
      worker.on('error', reject);
      worker.on('exit', (code) => {
        if (code !== 0)
          reject(new Error(`Worker stopped with exit code ${code}`));
      });
    })

    workerPromise.then((data) => {
      console.log(`${data.fibonacciN}th Fibonacci number - ${data.fibonacciResult}`)
    }).catch(err => {
      console.log(err)
    });
  } else {
    parentPort.postMessage({
        fibonacciResult: nthFibonacci(workerData),
        fibonacciN: workerData,
      }
    )
  }
};

sendResult();