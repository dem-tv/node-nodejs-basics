import {getFileData} from "../utils.js";
import {Worker} from "node:worker_threads";
import os from 'os';
import path from "path";

const performCalculations = async () => {
  const {__dirname} = getFileData(import.meta.url);
  const cpuCores = os.cpus().length;
  const promises = new Array(cpuCores).fill(0).map((el, i) => {
    return new Promise((resolve, reject) => {
      const worker = new Worker(path.resolve(__dirname, 'worker.js'), {
        workerData: 10 + i,
      });
      worker.on('message', (data) => {
        // reject()
        resolve(data)
      });
      worker.on('error', reject);
      worker.on('exit', (code) => {
        if (code !== 0) reject(new Error(`Worker stopped with exit code ${code}`));
      });
    })
  })

  Promise.allSettled(promises).then(data => {
    console.log('data', data.map(({status, value}) => {
      return {
        status: status === 'fulfilled' ? 'resolved' : 'error', value: value === undefined ? null : value
      }
    }))
  })
};

await performCalculations();