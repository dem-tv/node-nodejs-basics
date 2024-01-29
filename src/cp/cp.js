import {spawn} from 'child_process';
import {getFileData} from "../utils.js";

const spawnChildProcess = async (args = []) => {
  const {__dirname} = getFileData(import.meta.url);
  const script = spawn(`node`, ['./files/script.js', ...args], {cwd: __dirname, env: process.env});

  script.stdout.on('data', (data) => {
    console.log(`Received Data from child process: ${data}`);
  });

  script.stdin.write('Data from master process');
};

const a = ['--arg1', '-b', '--arg3']

// Put your arguments in function call to test this functionality
spawnChildProcess(a);
