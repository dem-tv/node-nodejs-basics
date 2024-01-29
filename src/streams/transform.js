import * as stream from "stream";

const transform = async () => {
  try {
    const t = new stream.Transform({
      transform(chunk, controller, cb) {
        const transformed = chunk.toString().split('').reverse().join('').replace('\n', '')
        this.push(transformed + '\n')
        cb()
      },
    });
    process.stdin.pipe(t).pipe(process.stdout)
  } catch (err) {
    console.log(err)
  }
};

await transform();